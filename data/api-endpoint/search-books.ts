import { Parameter, CodeSnippets } from "@/lib/api-endpoints";

export const searchBooksApiParameters: Parameter[] = [
  {
    name: "query",
    type: "string",
    required: true,
    description: "Search query (title, author, or ISBN)",
    placeholder: "fourth wing",
  },
  {
    name: "type",
    type: "select",
    required: false,
    description: "Type of search to perform",
    options: ["all", "title", "author", "isbn"],
  },
  {
    name: "limit",
    type: "number",
    required: false,
    description: "Number of results to return (default: 10, max: 50)",
    placeholder: "20",
  },
];

export const searchBooksApiResponse = {
  success: true,
  results: {
    query: "fourth wing",
    totalResults: 15,
    books: [
      {
        id: "58490567",
        title: "Fourth Wing",
        author: "Rebecca Yarros",
        cover: "https://images.gr-assets.com/books/1676401063m/58490567.jpg",
        rating: 4.58,
        publicationDate: "May 2, 2023",
        genres: ["Fantasy", "Romance", "New Adult"],
      },
      {
        id: "123456789",
        title: "Fourth Wing: The Empyrean Collector's Edition",
        author: "Rebecca Yarros",
        cover: "https://images.gr-assets.com/books/1234567890m/123456789.jpg",
        rating: 4.65,
        publicationDate: "November 7, 2023",
        genres: ["Fantasy", "Romance", "New Adult"],
      },
    ],
  },
};

export const searchBooksCodeSnippets: CodeSnippets = {
  javascript: ``,
  typescript: ``,
  python: ``,
  nodejs: ``,
};
