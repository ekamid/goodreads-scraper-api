import { Parameter, CodeSnippets } from "@/lib/api-endpoints";

export const getQuotesApiParameters: Parameter[] = [
  {
    name: "slug",
    type: "string",
    required: true,
    description: "Author's Goodreads slug",
    placeholder: "566.Paulo_Coelho",
  },
  {
    name: "sort",
    type: "select",
    required: false,
    description: "Sort order by popularity, average_rating, title",
    options: [
      "popularity",
      "average_rating",
      "title",
    ],
  },
  {
    name: "page",
    type: "number",
    required: false,
    description: "Page number (default: 1)",
    placeholder: "1",
  },
  {
    name: "limit",
    type: "number",
    required: false,
    description: "Number of books per page (default: 10, max: 50)",
    placeholder: "10",
  },
];

export const getBookListsApiResponse = {
  success: true,
  list: {
    type: "bestsellers",
    title: "Goodreads Bestsellers",
    books: [
      {
        id: "58490567",
        title: "Fourth Wing",
        author: "Rebecca Yarros",
        cover: "https://images.gr-assets.com/books/1676401063m/58490567.jpg",
        rating: 4.58,
        url: "https://www.goodreads.com/book/show/58490567-fourth-wing",
      },
      {
        id: "62023642",
        title: "Iron Flame",
        author: "Rebecca Yarros",
        cover: "https://images.gr-assets.com/books/1683767749m/62023642.jpg",
        rating: 4.72,
        url: "https://www.goodreads.com/book/show/62023642-iron-flame",
      },
    ],
  },
};

export const getBookListsCodeSnippets: CodeSnippets = {
  javascript: ``,
  typescript: ``,
  python: ``,
  nodejs: ``,
};