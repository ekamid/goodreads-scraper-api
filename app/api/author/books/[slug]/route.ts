import { NextRequest, NextResponse } from "next/server";
import { API_CONFIG, fetchWithConfig } from "@/lib/api-config";
const cheerio = require("cheerio");

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await API_CONFIG.rateLimit.check(req, "get_author_books");
  } catch {
    return NextResponse.json({ error: "Too Many Requests" }, { status: 429 });
  }

  try {
    const { slug } = params;
    const { searchParams } = new URL(req.url);
    
    // Get query parameters with defaults
    const page = parseInt(searchParams.get("page") || "1");
    const limit = Math.min(parseInt(searchParams.get("limit") || "10"), 50); // Max 100 books
    const sort = searchParams.get("sort") || "popularity"; // default, date_added, date_pub, rating, title
    
    // Validate parameters
    if (isNaN(page) || page < 1) {
      return NextResponse.json({ error: "Invalid page number" }, { status: 400 });
    }
    
    if (isNaN(limit) || limit < 1) {
      return NextResponse.json({ error: "Invalid limit number" }, { status: 400 });
    }
    
    const validSortOptions = ["popularity", "average_rating", "title"];
    if (!validSortOptions.includes(sort)) {
      return NextResponse.json({ 
        error: "Invalid sort option. Valid options: " + validSortOptions.join(", ") 
      }, { status: 400 });
    }

    // Construct URL with query parameters
    const scrapeURL = `https://www.goodreads.com/author/list/${slug}?page=${page}&per_page=${limit}&sort=${sort}`;

    const response = await fetchWithConfig(scrapeURL);
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);

    const title = $("div.mainContentFloat > h1").text();
    const desc = $("div.leftContainer > div:nth-child(2)").text();
    const books = $("tbody > tr")
      .map((i: number, el: any) => {
        const $el = $(el);
        const cover = $el.find("td > a > img.bookCover").attr("src");
        const title = $el.find("td > a > span").text();
        const bookURL = $el.find("td > a").attr("href");
        const author = $el
          .find("td > span[itemprop = 'author'] > div > a > span")
          .text();
        const authorURL = $el
          .find("td > span[itemprop = 'author'] > div > a")
          .attr("href");
        const rating = $el
          .find("td > div > span.greyText.smallText.uitext > span")
          .text();
        const id = i + 1;
        return {
          id: id,
          cover: cover,
          title: title,
          bookURL: bookURL,
          author: author,
          authorURL: authorURL,
          rating: rating,
        };
      })
      .toArray();

    const previousPage = $(
      "div.leftContainer > div[style='float: right'] > div > a.previous_page"
    ).attr("href");
    const nextPage = $(
      "div.leftContainer > div[style='float: right'] > div > a.next_page"
    ).attr("href");
    const lastScraped = new Date().toISOString();

    return NextResponse.json({
      success: true,
      scrapedURL: scrapeURL,
      pagination: {
        currentPage: page,
        limit: limit,
        sort: sort,
        hasNextPage: !!nextPage,
        hasPreviousPage: !!previousPage
      },
      books: {
        title: title,
        desc: desc,
        books: books,
        previousPage: previousPage,
        nextPage: nextPage,
        lastScraped: lastScraped,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        status: "Error - Invalid Query",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 404 }
    );
  }
}
