import { getAuthorDetailsApiParameters, getAuthorDetailsApiResponse } from "@/data/api-endpoint/get-author-details";
import {
  getBookDetailsApiParameters,
  getBookDetailsApiResponse,
  getBookDetailsCodeSnippets,
} from "@/data/api-endpoint/get-book-details";
import {
  getBookListsApiParameters,
  getBookListsApiResponse,
  getBookListsCodeSnippets,
} from "@/data/api-endpoint/get-book-lists";
import {
  searchBooksApiParameters,
  searchBooksApiResponse,
  searchBooksCodeSnippets,
} from "@/data/api-endpoint/search-books";

export interface Parameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
  placeholder?: string;
  options?: string[];
}

export interface CodeSnippets {
  javascript: string;
  typescript: string;
  python: string;
  nodejs: string;
}

export interface Endpoint {
  id: string;
  name: string;
  description: string;
  method: string;
  url: string;
  route: string;
  parameters: Parameter[];
  exampleResponse: any;
  codeSnippets: CodeSnippets;
}

export const endpoints: Endpoint[] = [
  {
    id: "get-book-lists",
    name: "Get Book Lists",
    description:
      "Retrieve lists of books based on category, genre, or popularity.",
    method: "GET",
    url: "/api/lists",
    route: "/api/lists",
    parameters: getBookListsApiParameters,
    exampleResponse: getBookListsApiResponse,
    codeSnippets: getBookListsCodeSnippets,
  },
  {
    id: "get-book-details",
    name: "Get Book Details",
    description:
      "Retrieve detailed information about a specific book by its Goodreads ID.",
    method: "GET",
    url: "/api/book/details/:slug",
    route: "/api/book/details",
    parameters: getBookDetailsApiParameters,
    exampleResponse: getBookDetailsApiResponse,
    codeSnippets: getBookDetailsCodeSnippets,
  },
  {
    id: "get-author-details",
    name: "Get Author Details",
    description:
      "Retrieve detailed information about an author by their Goodreads ID.",
    method: "GET",
    url: "/api/author/details/:slug",
    route: "/api/author/details",
    parameters: getAuthorDetailsApiParameters,
    exampleResponse: getAuthorDetailsApiResponse,
    codeSnippets: getBookListsCodeSnippets,
  },
  {
    id: "search-books",
    name: "Search Books",
    description: "Search for books by title, author, or ISBN.",
    method: "GET",
    url: "/api/search",
    route: "/api/search",
    parameters: searchBooksApiParameters,
    exampleResponse: searchBooksApiResponse,
    codeSnippets: searchBooksCodeSnippets,
  },
  {
    id: "get-user-shelves",
    name: "Get User Shelves",
    description: "Retrieve a user's bookshelves and the books they contain.",
    method: "GET",
    url: "/api/users/:username/shelves",
    route: "/api/search",
    parameters: [
      {
        name: "username",
        type: "string",
        required: true,
        description: "Goodreads username",
        placeholder: "user123",
      },
      {
        name: "shelf",
        type: "string",
        required: false,
        description: "Specific shelf to retrieve (default: all)",
        placeholder: "read",
      },
      {
        name: "limit",
        type: "number",
        required: false,
        description:
          "Number of books to return per shelf (default: 10, max: 50)",
        placeholder: "20",
      },
    ],
    exampleResponse: {
      success: true,
      user: {
        username: "bookworm42",
        name: "Jane Reader",
        profile: "https://www.goodreads.com/user/show/bookworm42",
        shelves: [
          {
            name: "read",
            bookCount: 247,
            books: [
              {
                id: "58490567",
                title: "Fourth Wing",
                author: "Rebecca Yarros",
                cover:
                  "https://images.gr-assets.com/books/1676401063m/58490567.jpg",
                rating: 4.58,
                userRating: 5,
                dateAdded: "2023-06-15",
              },
              {
                id: "62023642",
                title: "Iron Flame",
                author: "Rebecca Yarros",
                cover:
                  "https://images.gr-assets.com/books/1683767749m/62023642.jpg",
                rating: 4.72,
                userRating: 5,
                dateAdded: "2023-11-10",
              },
            ],
          },
          {
            name: "currently-reading",
            bookCount: 3,
            books: [
              {
                id: "40045999",
                title: "A Court of Silver Flames",
                author: "Sarah J. Maas",
                cover:
                  "https://images.gr-assets.com/books/1602570691m/40045999.jpg",
                rating: 4.53,
                userRating: 0,
                dateAdded: "2023-12-01",
              },
            ],
          },
        ],
      },
    },
    codeSnippets: {
      javascript: ``,
      typescript: ``,
      python: ``,
      nodejs: ``,
    },
  },
  {
    id: "get-book-reviews",
    name: "Get Book Reviews",
    description: "Retrieve reviews for a specific book.",
    method: "GET",
    url: "/api/book/details/:slug/reviews",
    route: "/api/book/details/:slug/reviews",
    parameters: [
      {
        name: "id",
        type: "string",
        required: true,
        description: "Goodreads book ID",
        placeholder: "58490567",
      },
      {
        name: "sort",
        type: "select",
        required: false,
        description: "Sort order for reviews",
        options: ["default", "newest", "oldest", "rating-high", "rating-low"],
      },
      {
        name: "limit",
        type: "number",
        required: false,
        description: "Number of reviews to return (default: 10, max: 50)",
        placeholder: "20",
      },
    ],
    exampleResponse: {
      success: true,
      book: {
        id: "58490567",
        title: "Fourth Wing",
        author: "Rebecca Yarros",
      },
      reviews: {
        total: 156432,
        page: 1,
        limit: 10,
        sort: "default",
        items: [
          {
            id: "4567890123",
            user: {
              id: "12345678",
              name: "Sarah Reader",
              profile:
                "https://www.goodreads.com/user/show/12345678-sarah-reader",
              avatar:
                "https://images.gr-assets.com/users/1234567890p2/12345678.jpg",
            },
            rating: 5,
            date: "Dec 15, 2023",
            text: "This book completely blew me away! The world-building is incredible, the characters are complex and relatable, and the plot kept me on the edge of my seat. I couldn't put it down and read it in one sitting. Can't wait for the next book in the series!",
            likes: 342,
            comments: 15,
          },
          {
            id: "5678901234",
            user: {
              id: "23456789",
              name: "John Bookworm",
              profile:
                "https://www.goodreads.com/user/show/23456789-john-bookworm",
              avatar:
                "https://images.gr-assets.com/users/2345678901p2/23456789.jpg",
            },
            rating: 4,
            date: "Nov 20, 2023",
            text: "A solid fantasy read with great characters and an interesting magic system. The romance subplot was well-developed and didn't overshadow the main story. My only criticism is that some parts of the middle section dragged a bit, but the ending more than made up for it.",
            likes: 156,
            comments: 7,
          },
        ],
      },
    },
    codeSnippets: {
      javascript: ``,
      typescript: ``,
      python: ``,
      nodejs: ``,
    },
  },
  {
    id: "get-book-quotes",
    name: "Get Book Quotes",
    description: "Retrieve quotes from a specific book or by an author.",
    method: "GET",
    url: "/api/quotes",
    route: "/api/quotes",
    parameters: [
      {
        name: "bookId",
        type: "string",
        required: false,
        description:
          "Goodreads book ID (either bookId or authorId is required)",
        placeholder: "58490567",
      },
      {
        name: "authorId",
        type: "string",
        required: false,
        description:
          "Goodreads author ID (either bookId or authorId is required)",
        placeholder: "7363610",
      },
      {
        name: "limit",
        type: "number",
        required: false,
        description: "Number of quotes to return (default: 10, max: 50)",
        placeholder: "20",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for pagination (default: 1)",
        placeholder: "1",
      },
    ],
    exampleResponse: {
      success: true,
      quotes: {
        total: 42,
        page: 1,
        limit: 10,
        source: {
          type: "book",
          id: "58490567",
          title: "Fourth Wing",
          author: "Rebecca Yarros",
        },
        items: [
          {
            id: "q123456789",
            text: "Power is neither good nor evil, but its user makes it so.",
            likes: 1245,
            tags: ["power", "wisdom", "fantasy"],
            addedBy: {
              id: "u12345678",
              name: "BookLover42",
            },
          },
          {
            id: "q234567890",
            text: "Fear is a powerful motivator, but hope... hope is stronger.",
            likes: 987,
            tags: ["hope", "fear", "motivation"],
            addedBy: {
              id: "u23456789",
              name: "QuoteCollector",
            },
          },
        ],
      },
    },
    codeSnippets: {
      javascript: ``,
      typescript: ``,
      python: ``,
      nodejs: ``,
    },
  },
];
