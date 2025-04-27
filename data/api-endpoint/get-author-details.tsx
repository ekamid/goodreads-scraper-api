import { CodeSnippets } from "@/lib/api-endpoints";

export const getAuthorDetailsApiParameters = [
  {
    name: "slug",
    type: "string",
    required: true,
    description: "Goodreads author slug",
    placeholder: "566.Paulo_Coelho",
  },
];

export const getAuthorDetailsApiResponse = {
  success: true,
  scrapedURL: "https://www.goodreads.com/author/show/566.Paulo_Coelho",
  author: {
    image: "https://images.gr-assets.com/authors/1201840056p5/566.jpg",
    slug: "566.Paulo_Coelho",
    name: "Paulo Coelho",
    website: "http://www.paulocoelhoblog.com",
    genres: ["Literature & Fiction", "Nonfiction", "Biographies & Memoirs"],
    influences: [],
    birthDate: "",
    deathDate: "",
    description:
      "The Brazilian author PAULO COELHO was born in 1947 in the city of Rio de Janeiro. Before dedicating his life completely to literature, he worked as theatre director and actor, lyricist and journalist. In 1986, PAULO COELHO did the pilgrimage to Saint James of Compostella, an experience later to be documented in his book The Pilgrimage. In the following year, COELHO published The Alchemist. Slow initial sales convinced his first publisher to drop the novel, but it went on to become one of the best selling Brazilian books of all time. Other titles include Brida (1990), The Valkyries (1992), By the river Piedra I sat Down and Wept (1994), the collection of his best columns published in the Brazilian newspaper Folha de São Paulo entitle Maktub ",
    books: [
      {
        id: 1,
        cover:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590._SY75_.jpg",
        title: "The Alchemist",
        url: "/book/show/18144590-the-alchemist",
        rating: " 3.92 avg rating From 3363,574 ratings",
        publishDate:
          "\n                 3.92 avg rating — 3,363,574 ratings\n              —\n                published\n               1988\n              —\n              941 editions\n          ",
      },
      {
        id: 2,
        cover:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1722247409i/216950113._SY75_.jpg",
        title: "Veronika Decides to Die",
        url: "/book/show/216950113-veronika-decides-to-die",
        rating: " 3.73 avg rating From 234377 ratings",
        publishDate:
          "\n                 3.73 avg rating — 234,377 ratings\n              —\n                published\n               1998\n              —\n              410 editions\n          ",
      },
      {
        id: 3,
        cover:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1358266987i/1430._SY75_.jpg",
        title: "Eleven Minutes",
        url: "/book/show/1430.Eleven_Minutes",
        rating: " 3.71 avg rating From 185662 ratings",
        publishDate:
          "\n                 3.71 avg rating — 185,662 ratings\n              —\n                published\n               2003\n              —\n              365 editions\n          ",
      },
      {
        id: 4,
        cover:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466877798i/1428._SY75_.jpg",
        title: "By the River Piedra I Sat Down and Wept",
        url: "/book/show/1428.By_the_River_Piedra_I_Sat_Down_and_Wept",
        rating: " 3.57 avg rating From 106635 ratings",
        publishDate:
          "\n                 3.57 avg rating — 106,635 ratings\n              —\n                published\n               1994\n              —\n              324 editions\n          ",
      },
      {
        id: 5,
        cover:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1410756929i/1252043._SY75_.jpg",
        title: "The Witch of Portobello",
        url: "/book/show/1252043.The_Witch_of_Portobello",
        rating: " 3.56 avg rating From 83054 ratings",
        publishDate:
          "\n                 3.56 avg rating — 83,054 ratings\n              —\n                published\n               2006\n              —\n              241 editions\n          ",
      },
      {
        id: 6,
        cover:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1493044059i/1427._SY75_.jpg",
        title: "The Zahir",
        url: "/book/show/1427.The_Zahir",
        rating: " 3.58 avg rating From 81295 ratings",
        publishDate:
          "\n                 3.58 avg rating — 81,295 ratings\n              —\n                published\n               2005\n              —\n              263 editions\n          ",
      },
      {
        id: 7,
        cover:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1719427694i/2817201._SY75_.jpg",
        title: "Brida",
        url: "/book/show/2817201-brida",
        rating: " 3.51 avg rating From 82158 ratings",
        publishDate:
          "\n                 3.51 avg rating — 82,158 ratings\n              —\n                published\n               1990\n              —\n              259 editions\n          ",
      },
      {
        id: 8,
        cover:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1719433911i/4008._SY75_.jpg",
        title: "The Devil and Miss Prym",
        url: "/book/show/4008.The_Devil_and_Miss_Prym",
        rating: " 3.62 avg rating From 72931 ratings",
        publishDate:
          "\n                 3.62 avg rating — 72,931 ratings\n              —\n                published\n               2000\n              —\n              305 editions\n          ",
      },
      {
        id: 9,
        cover:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390304912i/2759537._SY75_.jpg",
        title: "The Pilgrimage",
        url: "/book/show/2759537-the-pilgrimage",
        rating: " 3.65 avg rating From 65477 ratings",
        publishDate:
          "\n                 3.65 avg rating — 65,477 ratings\n              —\n                published\n               1987\n              —\n              334 editions\n          ",
      },
      {
        id: 10,
        cover:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1406247571i/20819682._SX50_.jpg",
        title: "Adultery",
        url: "/book/show/20819682-adultery",
        rating: " 3.09 avg rating From 58971 ratings",
        publishDate:
          "\n 3.09 avg rating — 58,971 ratings\n              —\n                published\n               2012\n              —\n              168 editions\n          ",
      },
    ],
    series: [
      {
        id: 1,
        cover:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466877798l/1428._SY75_.jpg",
        title: "On the Seventh Day ",
        seriesURL: "/series/183186-on-the-seventh-day",
        author: "Paulo Coelho",
        authorURL: "/author/show/566.Paulo_Coelho",
        rating: " 3.67 avg rating — 413,909 ratings",
      },
    ],
    lastScraped: "2025-04-27T10:45:52.013Z",
  },
};

export const getBookDetailsCodeSnippets: CodeSnippets = {
  javascript: ``,
  typescript: ``,
  python: ``,
  nodejs: ``,
};
