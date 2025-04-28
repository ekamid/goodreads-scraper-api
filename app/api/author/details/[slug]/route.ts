import { NextRequest, NextResponse } from "next/server";
import { API_CONFIG, fetchWithConfig } from "@/lib/api-config";
const cheerio = require("cheerio");

export async function GET(req: NextRequest,   { params }: { params: { slug: string } }) {
  try {
    // Apply rate limiting
    await API_CONFIG.rateLimit.check(req, "get_author_details");
  } catch {
    return NextResponse.json(
      { error: "Too Many Requests" },
      { status: 429 }
    );
  }

  try {
    const { slug } = await params;
    const scrapeURL = `https://www.goodreads.com/author/show/${slug}`;

    const response = await fetchWithConfig(scrapeURL);
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);

    const image = $("div[itemtype='http://schema.org/Person'] > div > a > img").attr("src");
    const name = $("h1.authorName > span").text();
    const website = $("div.dataItem > a[itemprop='url']").text();
    const genres = $("div.dataItem > a[href*='/genres/']")
      .map((i: number, el: any) => $(el).text())
      .get();
    const influences = $("div.dataItem > span a[href*='/author/']")
      .map((i: number, el: any) => {
        const $el = $(el);
        const author = $el.text();
        const url = $el.attr("href");
        const id = i + 1;
        return {
          id: id,
          author: author,
          url: url,
        };
      })
      .toArray();

    const birthDate = $("div.rightContainer > div[itemprop='birthDate']").text();
    const deathDate = $("div.rightContainer > div[itemprop='deathDate']").text();
    const description = $(".aboutAuthorInfo > span").html();

    const books = $("table.stacked > tbody > tr")
      .map((i: number, el: any) => {
        const $el = $(el);
        const cover = $el.find("td > a > img").attr("src");
        const title = $el.find("td:nth-child(2) > a > span").text();
        const url = $el.find("td:nth-child(2) > a").attr("href");
        const rating = $el
          .find("td:nth-child(2) > div > span > span")
          .text()
          .replace("—", "From")
          .replace(",", "");
        const publishDate = $el.find("td:nth-child(2) > div > span").text();
        const id = i + 1;
        return {
          id: id,
          cover: cover,
          title: title,
          url: url,
          rating: rating,
          publishDate: publishDate,
        };
      })
      .toArray();

    const series = $(".bigBoxBody > div > div[itemtype='http://schema.org/BookSeries']")
      .map((i: number, el: any) => {
        const $el = $(el);
        const cover = $el.find("div.seriesCovers > a > img").attr("src");
        const title = $el.find("div.seriesDesc > span[itemprop='name'] > a").text();
        const seriesURL = $el.find("div.seriesDesc > span[itemprop='name'] > a").attr("href");
        const author = $el.find("div.seriesDesc > span[itemprop='author'] > div > a > span").html();
        const authorURL = $el
          .find("div.seriesDesc > span[itemprop='author'] > div > a")
          .attr("href")
          .replace("https://www.goodreads.com", "");
        const rating = $el.find("div.seriesDesc > span.greyText.smallText.uitext > span").text();
        const id = i + 1;

        return {
          id: id,
          cover: cover,
          title: title,
          seriesURL: seriesURL,
          author: author,
          authorURL: authorURL,
          rating: rating,
        };
      })
      .toArray();

    const lastScraped = new Date().toISOString();


    return NextResponse.json({
      success: true,
      scrapedURL: scrapeURL,
      author: {
        image,
        slug,
        name,
        website,
        genres,
        influences,
        birthDate,
        deathDate,
        description,
        books,
        series,
        lastScraped
      }
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      status: "Error - Invalid Query",
      error: error instanceof Error ? error.message : "Unknown error",
    }, { status: 404 });
  }
}
