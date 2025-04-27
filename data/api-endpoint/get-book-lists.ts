import { Parameter, CodeSnippets } from "@/lib/api-endpoints";

export const getBookListsApiParameters: Parameter[] = [
  {
    name: "type",
    type: "select",
    required: true,
    description: "Type of list to retrieve",
    options: [
      "bestsellers",
      "most-read",
      "top-rated",
      "new-releases",
      "genre",
    ],
  },
  {
    name: "genre",
    type: "string",
    required: false,
    description: "Genre name (required if type is 'genre')",
    placeholder: "fantasy",
  },
  {
    name: "limit",
    type: "number",
    required: false,
    description: "Number of books to return (default: 10, max: 50)",
    placeholder: "20",
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