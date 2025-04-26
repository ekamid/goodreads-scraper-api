export interface Parameter {
  name: string
  type: string
  required: boolean
  description: string
  placeholder?: string
  options?: string[]
}

export interface Endpoint {
  id: string
  name: string
  description: string
  method: string
  url: string
  parameters: Parameter[]
  exampleResponse: any
  codeSnippets: {
    javascript: string
    typescript: string
    python: string
    nodejs: string
  }
}

export const endpoints: Endpoint[] = [
  {
    id: "get-book-lists",
    name: "Get Book Lists",
    description: "Retrieve lists of books based on category, genre, or popularity.",
    method: "GET",
    url: "/api/lists",
    parameters: [
      {
        name: "type",
        type: "select",
        required: true,
        description: "Type of list to retrieve",
        options: ["bestsellers", "most-read", "top-rated", "new-releases", "genre"],
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
    ],
    exampleResponse: {
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
    },
    codeSnippets: {
      javascript: `// Using fetch
fetch('https://api.goodreads-scraper.com/api/lists?type=bestsellers&limit=10')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Process the book list data
    const books = data.list.books;
    books.forEach(book => {
      console.log(\`\${book.title} by \${book.author} - \${book.rating}/5\`);
    });
  })
  .catch(error => console.error('Error fetching book lists:', error));`,
      typescript: `// Using axios with TypeScript
import axios from 'axios';

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  url: string;
}

interface BookListResponse {
  success: boolean;
  list: {
    type: string;
    title: string;
    books: Book[];
  };
}

async function getBookList(type: string, limit: number = 10): Promise<Book[]> {
  try {
    const response = await axios.get<BookListResponse>(
      \`https://api.goodreads-scraper.com/api/lists?type=\${type}&limit=\${limit}\`
    );
    return response.data.list.books;
  } catch (error) {
    console.error('Error fetching book lists:', error);
    return [];
  }
}

// Usage
getBookList('bestsellers', 20).then(books => {
  books.forEach(book => {
    console.log(\`\${book.title} by \${book.author} - \${book.rating}/5\`);
  });
});`,
      python: `# Using requests in Python
import requests

def get_book_list(list_type, genre=None, limit=10):
    params = {
        'type': list_type,
        'limit': limit
    }
    
    if genre and list_type == 'genre':
        params['genre'] = genre
        
    response = requests.get('https://api.goodreads-scraper.com/api/lists', params=params)
    
    if response.status_code == 200:
        data = response.json()
        return data['list']['books']
    else:
        print(f"Error: {response.status_code}")
        return []

# Usage
bestsellers = get_book_list('bestsellers', limit=20)
for book in bestsellers:
    print(f"{book['title']} by {book['author']} - {book['rating']}/5")`,
      nodejs: `// Next.js API route handler
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'bestsellers';
  const genre = searchParams.get('genre');
  const limit = parseInt(searchParams.get('limit') || '10');
  
  try {
    const apiUrl = new URL('https://api.goodreads-scraper.com/api/lists');
    apiUrl.searchParams.set('type', type);
    if (genre) apiUrl.searchParams.set('genre', genre);
    apiUrl.searchParams.set('limit', limit.toString());
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching book lists:', error);
    return NextResponse.json(
      { error: 'Failed to fetch book lists' },
      { status: 500 }
    );
  }
}`,
    },
  },
  {
    id: "get-book-details",
    name: "Get Book Details",
    description: "Retrieve detailed information about a specific book by its Goodreads ID.",
    method: "GET",
    url: "/api/books/:id",
    parameters: [
      {
        name: "id",
        type: "string",
        required: true,
        description: "Goodreads book ID",
        placeholder: "58490567",
      },
    ],
    exampleResponse: {
      success: true,
      book: {
        id: "58490567",
        title: "Fourth Wing",
        author: "Rebecca Yarros",
        authorId: "7363610",
        cover: "https://images.gr-assets.com/books/1676401063l/58490567.jpg",
        rating: 4.58,
        ratingsCount: 1245789,
        reviewsCount: 156432,
        publicationDate: "May 2, 2023",
        publisher: "Red Tower Books",
        language: "English",
        pages: 512,
        genres: ["Fantasy", "Romance", "New Adult", "Fiction"],
        description:
          "Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: dragon riders...",
        series: {
          name: "The Empyrean",
          position: 1,
          books: [
            {
              id: "58490567",
              title: "Fourth Wing",
              position: 1,
            },
            {
              id: "62023642",
              title: "Iron Flame",
              position: 2,
            },
          ],
        },
        similarBooks: [
          {
            id: "40045999",
            title: "A Court of Silver Flames",
            author: "Sarah J. Maas",
            cover: "https://images.gr-assets.com/books/1602570691m/40045999.jpg",
            rating: 4.53,
          },
        ],
      },
    },
    codeSnippets: {
      javascript: `// Using fetch
const bookId = '58490567';

fetch(\`https://api.goodreads-scraper.com/api/books/\${bookId}\`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Process the book details
    const book = data.book;
    console.log(\`\${book.title} by \${book.author}\`);
    console.log(\`Rating: \${book.rating}/5 (\${book.ratingsCount} ratings)\`);
    console.log(\`Published: \${book.publicationDate} by \${book.publisher}\`);
    console.log(\`Genres: \${book.genres.join(', ')}\`);
    console.log(\`Description: \${book.description}\`);
  })
  .catch(error => console.error('Error fetching book details:', error));`,
      typescript: `// Using axios with TypeScript
import axios from 'axios';

interface Book {
  id: string;
  title: string;
  author: string;
  authorId: string;
  cover: string;
  rating: number;
  ratingsCount: number;
  reviewsCount: number;
  publicationDate: string;
  publisher: string;
  language: string;
  pages: number;
  genres: string[];
  description: string;
  series?: {
    name: string;
    position: number;
    books: {
      id: string;
      title: string;
      position: number;
    }[];
  };
  similarBooks: {
    id: string;
    title: string;
    author: string;
    cover: string;
    rating: number;
  }[];
}

interface BookResponse {
  success: boolean;
  book: Book;
}

async function getBookDetails(bookId: string): Promise<Book | null> {
  try {
    const response = await axios.get<BookResponse>(
      \`https://api.goodreads-scraper.com/api/books/\${bookId}\`
    );
    return response.data.book;
  } catch (error) {
    console.error('Error fetching book details:', error);
    return null;
  }
}

// Usage
const bookId = '58490567';
getBookDetails(bookId).then(book => {
  if (book) {
    console.log(\`\${book.title} by \${book.author}\`);
    console.log(\`Rating: \${book.rating}/5 (\${book.ratingsCount} ratings)\`);
    console.log(\`Published: \${book.publicationDate} by \${book.publisher}\`);
  }
});`,
      python: `# Using requests in Python
import requests

def get_book_details(book_id):
    response = requests.get(f'https://api.goodreads-scraper.com/api/books/{book_id}')
    
    if response.status_code == 200:
        data = response.json()
        return data['book']
    else:
        print(f"Error: {response.status_code}")
        return None

# Usage
book_id = '58490567'
book = get_book_details(book_id)

if book:
    print(f"{book['title']} by {book['author']}")
    print(f"Rating: {book['rating']}/5 ({book['ratingsCount']} ratings)")
    print(f"Published: {book['publicationDate']} by {book['publisher']}")
    print(f"Genres: {', '.join(book['genres'])}")
    
    if 'series' in book and book['series']:
        print(f"Series: {book['series']['name']} (Book {book['series']['position']})")
        
    print("\\nSimilar Books:")
    for similar in book['similarBooks'][:3]:
        print(f"- {similar['title']} by {similar['author']} ({similar['rating']}/5)")`,
      nodejs: `// Next.js API route handler
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const bookId = params.id;
  
  try {
    const response = await fetch(\`https://api.goodreads-scraper.com/api/books/\${bookId}\`);
    
    if (!response.ok) {
      throw new Error(\`Failed to fetch book details: \${response.status}\`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching book details:', error);
    return NextResponse.json(
      { error: 'Failed to fetch book details' },
      { status: 500 }
    );
  }
}`,
    },
  },
  {
    id: "get-author-details",
    name: "Get Author Details",
    description: "Retrieve detailed information about an author by their Goodreads ID.",
    method: "GET",
    url: "/api/authors/:id",
    parameters: [
      {
        name: "id",
        type: "string",
        required: true,
        description: "Goodreads author ID",
        placeholder: "7363610",
      },
    ],
    exampleResponse: {
      success: true,
      author: {
        id: "7363610",
        name: "Rebecca Yarros",
        image: "https://images.gr-assets.com/authors/1674852251p5/7363610.jpg",
        biography:
          "Rebecca Yarros is the Wall Street Journal and USA Today bestselling author of over fifteen novels, including Great and Precious Things and The Last Letter. She is a hopeless romantic and lover of all things coffee, chocolate, and paleo...",
        website: "https://www.rebeccayarros.com",
        followers: 125,
        booksCount: 18,
        rating: 4.32,
        genres: ["Romance", "Fantasy", "New Adult", "Contemporary"],
        books: [
          {
            id: "58490567",
            title: "Fourth Wing",
            cover: "https://images.gr-assets.com/books/1676401063m/58490567.jpg",
            rating: 4.58,
            publicationDate: "May 2, 2023",
          },
          {
            id: "62023642",
            title: "Iron Flame",
            cover: "https://images.gr-assets.com/books/1683767749m/62023642.jpg",
            rating: 4.72,
            publicationDate: "November 7, 2023",
          },
        ],
        series: [
          {
            name: "The Empyrean",
            books: 2,
          },
          {
            name: "Flight & Glory",
            books: 5,
          },
        ],
      },
    },
    codeSnippets: {
      javascript: `// Using fetch
const authorId = '7363610';

fetch(\`https://api.goodreads-scraper.com/api/authors/\${authorId}\`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Process the author details
    const author = data.author;
    console.log(\`\${author.name}\`);
    console.log(\`Rating: \${author.rating}/5\`);
    console.log(\`Books: \${author.booksCount}\`);
    console.log(\`Genres: \${author.genres.join(', ')}\`);
    
    console.log('\\nPopular Books:');
    author.books.forEach(book => {
      console.log(\`- \${book.title} (\${book.rating}/5) - \${book.publicationDate}\`);
    });
  })
  .catch(error => console.error('Error fetching author details:', error));`,
      typescript: `// Using axios with TypeScript
import axios from 'axios';

interface AuthorBook {
  id: string;
  title: string;
  cover: string;
  rating: number;
  publicationDate: string;
}

interface AuthorSeries {
  name: string;
  books: number;
}

interface Author {
  id: string;
  name: string;
  image: string;
  biography: string;
  website: string;
  followers: number;
  booksCount: number;
  rating: number;
  genres: string[];
  books: AuthorBook[];
  series: AuthorSeries[];
}

interface AuthorResponse {
  success: boolean;
  author: Author;
}

async function getAuthorDetails(authorId: string): Promise<Author | null> {
  try {
    const response = await axios.get<AuthorResponse>(
      \`https://api.goodreads-scraper.com/api/authors/\${authorId}\`
    );
    return response.data.author;
  } catch (error) {
    console.error('Error fetching author details:', error);
    return null;
  }
}

// Usage
const authorId = '7363610';
getAuthorDetails(authorId).then(author => {
  if (author) {
    console.log(\`\${author.name}\`);
    console.log(\`Rating: \${author.rating}/5\`);
    console.log(\`Books: \${author.booksCount}\`);
    
    console.log('\\nPopular Books:');
    author.books.forEach(book => {
      console.log(\`- \${book.title} (\${book.rating}/5)\`);
    });
    
    console.log('\\nSeries:');
    author.series.forEach(series => {
      console.log(\`- \${series.name} (\${series.books} books)\`);
    });
  }
});`,
      python: `# Using requests in Python
import requests

def get_author_details(author_id):
    response = requests.get(f'https://api.goodreads-scraper.com/api/authors/{author_id}')
    
    if response.status_code == 200:
        data = response.json()
        return data['author']
    else:
        print(f"Error: {response.status_code}")
        return None

# Usage
author_id = '7363610'
author = get_author_details(author_id)

if author:
    print(f"{author['name']}")
    print(f"Rating: {author['rating']}/5")
    print(f"Books: {author['booksCount']}")
    print(f"Genres: {', '.join(author['genres'])}")
    
    print("\\nPopular Books:")
    for book in author['books']:
        print(f"- {book['title']} ({book['rating']}/5) - {book['publicationDate']}")
    
    print("\\nSeries:")
    for series in author['series']:
        print(f"- {series['name']} ({series['books']} books)")`,
      nodejs: `// Next.js API route handler
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const authorId = params.id;
  
  try {
    const response = await fetch(\`https://api.goodreads-scraper.com/api/authors/\${authorId}\`);
    
    if (!response.ok) {
      throw new Error(\`Failed to fetch author details: \${response.status}\`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching author details:', error);
    return NextResponse.json(
      { error: 'Failed to fetch author details' },
      { status: 500 }
    );
  }
}`,
    },
  },
  {
    id: "search-books",
    name: "Search Books",
    description: "Search for books by title, author, or ISBN.",
    method: "GET",
    url: "/api/search",
    parameters: [
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
    ],
    exampleResponse: {
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
    },
    codeSnippets: {
      javascript: `// Using fetch
const searchQuery = 'fourth wing';
const searchType = 'all';
const limit = 20;

fetch(\`https://api.goodreads-scraper.com/api/search?query=\${encodeURIComponent(searchQuery)}&type=\${searchType}&limit=\${limit}\`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Process the search results
    const results = data.results;
    console.log(\`Found \${results.totalResults} results for "\${results.query}"\`);
    
    results.books.forEach(book => {
      console.log(\`\${book.title} by \${book.author} - \${book.rating}/5\`);
    });
  })
  .catch(error => console.error('Error searching books:', error));`,
      typescript: `// Using axios with TypeScript
import axios from 'axios';

interface SearchBook {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  publicationDate: string;
  genres: string[];
}

interface SearchResponse {
  success: boolean;
  results: {
    query: string;
    totalResults: number;
    books: SearchBook[];
  };
}

async function searchBooks(
  query: string, 
  type: 'all' | 'title' | 'author' | 'isbn' = 'all', 
  limit: number = 10
): Promise<SearchBook[]> {
  try {
    const response = await axios.get<SearchResponse>(
      'https://api.goodreads-scraper.com/api/search',
      {
        params: {
          query,
          type,
          limit
        }
      }
    );
    return response.data.results.books;
  } catch (error) {
    console.error('Error searching books:', error);
    return [];
  }
}

// Usage
searchBooks('fourth wing', 'title', 20).then(books => {
  console.log(\`Found \${books.length} books:\`);
  books.forEach(book => {
    console.log(\`\${book.title} by \${book.author} - \${book.rating}/5 (\${book.publicationDate})\`);
    console.log(\`Genres: \${book.genres.join(', ')}\`);
  });
});`,
      python: `# Using requests in Python
import requests

def search_books(query, search_type='all', limit=10):
    params = {
        'query': query,
        'type': search_type,
        'limit': limit
    }
    
    response = requests.get('https://api.goodreads-scraper.com/api/search', params=params)
    
    if response.status_code == 200:
        data = response.json()
        return data['results']['books']
    else:
        print(f"Error: {response.status_code}")
        return []

# Usage
query = 'fourth wing'
books = search_books(query, search_type='title', limit=20)

print(f"Found {len(books)} books for '{query}':")
for book in books:
    print(f"{book['title']} by {book['author']} - {book['rating']}/5")
    print(f"Published: {book['publicationDate']}")
    print(f"Genres: {', '.join(book['genres'])}")
    print()`,
      nodejs: `// Next.js API route handler
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const type = searchParams.get('type') || 'all';
  const limit = parseInt(searchParams.get('limit') || '10');
  
  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 }
    );
  }
  
  try {
    const apiUrl = new URL('https://api.goodreads-scraper.com/api/search');
    apiUrl.searchParams.set('query', query);
    apiUrl.searchParams.set('type', type);
    apiUrl.searchParams.set('limit', limit.toString());
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(\`Failed to search books: \${response.status}\`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error searching books:', error);
    return NextResponse.json(
      { error: 'Failed to search books' },
      { status: 500 }
    );
  }
}`,
    },
  },
  {
    id: "get-user-shelves",
    name: "Get User Shelves",
    description: "Retrieve a user's bookshelves and the books they contain.",
    method: "GET",
    url: "/api/users/:username/shelves",
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
        description: "Number of books to return per shelf (default: 10, max: 50)",
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
                cover: "https://images.gr-assets.com/books/1676401063m/58490567.jpg",
                rating: 4.58,
                userRating: 5,
                dateAdded: "2023-06-15",
              },
              {
                id: "62023642",
                title: "Iron Flame",
                author: "Rebecca Yarros",
                cover: "https://images.gr-assets.com/books/1683767749m/62023642.jpg",
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
                cover: "https://images.gr-assets.com/books/1602570691m/40045999.jpg",
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
      javascript: `// Using fetch
const username = 'bookworm42';
const shelf = 'read'; // Optional: specific shelf to retrieve
const limit = 20;

const url = new URL(\`https://api.goodreads-scraper.com/api/users/\${username}/shelves\`);
if (shelf) url.searchParams.append('shelf', shelf);
url.searchParams.append('limit', limit.toString());

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Process the user's shelves
    const user = data.user;
    console.log(\`\${user.name} (@\${user.username})\`);
    
    user.shelves.forEach(shelf => {
      console.log(\`\\n\${shelf.name} (\${shelf.bookCount} books):\`);
      shelf.books.forEach(book => {
        const userRating = book.userRating ? \`\${book.userRating}/5\` : 'Not rated';
        console.log(\`- \${book.title} by \${book.author} - \${userRating}\`);
      });
    });
  })
  .catch(error => console.error('Error fetching user shelves:', error));`,
      typescript: `// Using axios with TypeScript
import axios from 'axios';

interface ShelfBook {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  userRating: number;
  dateAdded: string;
}

interface Shelf {
  name: string;
  bookCount: number;
  books: ShelfBook[];
}

interface UserShelvesResponse {
  success: boolean;
  user: {
    username: string;
    name: string;
    profile: string;
    shelves: Shelf[];
  };
}

async function getUserShelves(
  username: string, 
  shelf?: string, 
  limit: number = 10
): Promise<Shelf[]> {
  try {
    const params: Record<string, string | number> = { limit };
    if (shelf) params.shelf = shelf;
    
    const response = await axios.get<UserShelvesResponse>(
      \`https://api.goodreads-scraper.com/api/users/\${username}/shelves\`,
      { params }
    );
    
    return response.data.user.shelves;
  } catch (error) {
    console.error('Error fetching user shelves:', error);
    return [];
  }
}

// Usage
const username = 'bookworm42';
getUserShelves(username, undefined, 20).then(shelves => {
  shelves.forEach(shelf => {
    console.log(\`\${shelf.name} (\${shelf.bookCount} books):\`);
    shelf.books.forEach(book => {
      const userRating = book.userRating ? \`\${book.userRating}/5\` : 'Not rated';
      console.log(\`- \${book.title} by \${book.author} - \${userRating} (Added: \${book.dateAdded})\`);
    });
  });
});`,
      python: `# Using requests in Python
import requests

def get_user_shelves(username, shelf=None, limit=10):
    params = {'limit': limit}
    if shelf:
        params['shelf'] = shelf
        
    response = requests.get(
        f'https://api.goodreads-scraper.com/api/users/{username}/shelves',
        params=params
    )
    
    if response.status_code == 200:
        data = response.json()
        return data['user']['shelves']
    else:
        print(f"Error: {response.status_code}")
        return []

# Usage
username = 'bookworm42'
shelves = get_user_shelves(username, limit=20)

for shelf in shelves:
    print(f"\\n{shelf['name']} ({shelf['bookCount']} books):")
    for book in shelf['books']:
        user_rating = f"{book['userRating']}/5" if book['userRating'] > 0 else "Not rated"
        print(f"- {book['title']} by {book['author']} - {user_rating}")
        print(f"  Added on: {book['dateAdded']}")`,
      nodejs: `// Next.js API route handler
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const username = params.username;
  const { searchParams } = new URL(request.url);
  const shelf = searchParams.get('shelf');
  const limit = parseInt(searchParams.get('limit') || '10');
  
  try {
    const apiUrl = new URL(\`https://api.goodreads-scraper.com/api/users/\${username}/shelves\`);
    if (shelf) apiUrl.searchParams.set('shelf', shelf);
    apiUrl.searchParams.set('limit', limit.toString());
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(\`Failed to fetch user shelves: \${response.status}\`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching user shelves:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user shelves' },
      { status: 500 }
    );
  }
}`,
    },
  },
  {
    id: "get-book-reviews",
    name: "Get Book Reviews",
    description: "Retrieve reviews for a specific book.",
    method: "GET",
    url: "/api/books/:id/reviews",
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
              profile: "https://www.goodreads.com/user/show/12345678-sarah-reader",
              avatar: "https://images.gr-assets.com/users/1234567890p2/12345678.jpg",
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
              profile: "https://www.goodreads.com/user/show/23456789-john-bookworm",
              avatar: "https://images.gr-assets.com/users/2345678901p2/23456789.jpg",
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
      javascript: `// Using fetch
const bookId = '58490567';
const sort = 'newest';
const limit = 20;

const url = new URL(\`https://api.goodreads-scraper.com/api/books/\${bookId}/reviews\`);
url.searchParams.append('sort', sort);
url.searchParams.append('limit', limit.toString());

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Process the book reviews
    const book = data.book;
    const reviews = data.reviews;
    
    console.log(\`Reviews for "\${book.title}" by \${book.author}\`);
    console.log(\`Total reviews: \${reviews.total}\`);
    
    reviews.items.forEach(review => {
      console.log(\`\\n\${review.user.name} - \${review.rating}/5 stars - \${review.date}\`);
      console.log(review.text);
      console.log(\`\${review.likes} likes | \${review.comments} comments\`);
    });
  })
  .catch(error => console.error('Error fetching book reviews:', error));`,
      typescript: `// Using axios with TypeScript
import axios from 'axios';

interface User {
  id: string;
  name: string;
  profile: string;
  avatar: string;
}

interface Review {
  id: string;
  user: User;
  rating: number;
  date: string;
  text: string;
  likes: number;
  comments: number;
}

interface BookReviewsResponse {
  success: boolean;
  book: {
    id: string;
    title: string;
    author: string;
  };
  reviews: {
    total: number;
    page: number;
    limit: number;
    sort: string;
    items: Review[];
  };
}

type SortOption = 'default' | 'newest' | 'oldest' | 'rating-high' | 'rating-low';

async function getBookReviews(
  bookId: string, 
  sort: SortOption = 'default', 
  limit = 10
): Promise<Review[]> {
  try {
    const response = await axios.get<BookReviewsResponse>(
      \`https://api.goodreads-scraper.com/api/books/\${bookId}/reviews\`,
      {
        params: { sort, limit }
      }
    );
    
    return response.data.reviews.items;
  } catch (error) {
    console.error('Error fetching book reviews:', error);
    return [];
  }
}

// Usage
const bookId = '58490567';
getBookReviews(bookId, 'newest', 20).then(reviews => {
  console.log(\`Found \${reviews.length} reviews:\`);
  
  reviews.forEach(review => {
    console.log(\`\\n\${review.user.name} - \${review.rating}/5 stars - \${review.date}\`);
    console.log(review.text.substring(0, 150) + (review.text.length > 150 ? '...' : ''));
    console.log(\`\${review.likes} likes | \${review.comments} comments\`);
  });
});`,
      python: `# Using requests in Python
import requests

def get_book_reviews(book_id, sort='default', limit=10):
    params = {
        'sort': sort,
        'limit': limit
    }
    
    response = requests.get(
        f'https://api.goodreads-scraper.com/api/books/{book_id}/reviews',
        params=params
    )
    
    if response.status_code == 200:
        data = response.json()
        return data['book'], data['reviews']
    else:
        print(f"Error: {response.status_code}")
        return None, None

# Usage
book_id = '58490567'
book, reviews = get_book_reviews(book_id, sort='newest', limit=20)

if book and reviews:
    print(f'Reviews for "{book["title"]}" by {book["author"]}')
    print(f'Total reviews: {reviews["total"]}')
    
    for review in reviews['items']:
        print(f'\\n{review["user"]["name"]} - {review["rating"]}/5 stars - {review["date"]}')
        # Truncate long reviews for display
        review_text = review['text']
        if len(review_text) > 150:
            review_text = review_text[:150] + '...'
        print(review_text)
        print(f'{review["likes"]} likes | {review["comments"]} comments')`,
      nodejs: `// Next.js API route handler
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const bookId = params.id;
  const { searchParams } = new URL(request.url);
  const sort = searchParams.get('sort') || 'default';
  const limit = Number.parseInt(searchParams.get('limit') || '10');
  
  try {
    const apiUrl = new URL(\`https://api.goodreads-scraper.com/api/books/\${bookId}/reviews\`);
    apiUrl.searchParams.set('sort', sort);
    apiUrl.searchParams.set('limit', limit.toString());
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(\`Failed to fetch book reviews: \${response.status}\`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching book reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch book reviews' },
      { status: 500 }
    );
  }
}`,
    },
  },
  {
    id: "get-book-quotes",
    name: "Get Book Quotes",
    description: "Retrieve quotes from a specific book or by an author.",
    method: "GET",
    url: "/api/quotes",
    parameters: [
      {
        name: "bookId",
        type: "string",
        required: false,
        description: "Goodreads book ID (either bookId or authorId is required)",
        placeholder: "58490567",
      },
      {
        name: "authorId",
        type: "string",
        required: false,
        description: "Goodreads author ID (either bookId or authorId is required)",
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
      javascript: `// Using fetch
const bookId = '58490567';
const limit = 20;

fetch(\`https://api.goodreads-scraper.com/api/quotes?bookId=\${bookId}&limit=\${limit}\`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Process the quotes
    const quotes = data.quotes;
    console.log(\`Quotes from "\${quotes.source.title}" by \${quotes.source.author}\`);
    
    quotes.items.forEach(quote => {
      console.log(\`\\n"\${quote.text}"\`);
      console.log(\`Likes: \${quote.likes} | Tags: \${quote.tags.join(', ')}\`);
    });
  })
  .catch(error => console.error('Error fetching quotes:', error));`,
      typescript: `// Using axios with TypeScript
import axios from 'axios';

interface Quote {
  id: string;
  text: string;
  likes: number;
  tags: string[];
  addedBy: {
    id: string;
    name: string;
  };
}

interface QuotesResponse {
  success: boolean;
  quotes: {
    total: number;
    page: number;
    limit: number;
    source: {
      type: string;
      id: string;
      title?: string;
      author?: string;
      name?: string;
    };
    items: Quote[];
  };
}

async function getBookQuotes(
  bookId: string, 
  limit = 10,
  page = 1
): Promise<Quote[]> {
  try {
    const response = await axios.get<QuotesResponse>(
      'https://api.goodreads-scraper.com/api/quotes',
      {
        params: { bookId, limit, page }
      }
    );
    
    return response.data.quotes.items;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return [];
  }
}

// Usage
const bookId = '58490567';
getBookQuotes(bookId, 20).then(quotes => {
  console.log(\`Found \${quotes.length} quotes:\`);
  
  quotes.forEach(quote => {
    console.log(\`"\${quote.text}"\`);
    console.log(\`Likes: \${quote.likes} | Tags: \${quote.tags.join(', ')}\`);
  });
});`,
      python: `# Using requests in Python
import requests

def get_quotes(book_id=None, author_id=None, limit=10, page=1):
    params = {
        'limit': limit,
        'page': page
    }
    
    if book_id:
        params['bookId'] = book_id
    elif author_id:
        params['authorId'] = author_id
    else:
        raise ValueError("Either book_id or author_id must be provided")
        
    response = requests.get('https://api.goodreads-scraper.com/api/quotes', params=params)
    
    if response.status_code == 200:
        data = response.json()
        return data['quotes']
    else:
        print(f"Error: {response.status_code}")
        return None

# Usage
book_id = '58490567'
quotes = get_quotes(book_id=book_id, limit=20)

if quotes:
    source_type = quotes['source']['type']
    if source_type == 'book':
        print(f'Quotes from "{quotes["source"]["title"]}" by {quotes["source"]["author"]}')
    else:
        print(f'Quotes by {quotes["source"]["name"]}')
    
    for quote in quotes['items']:
        print(f'\\n"{quote["text"]}"')
        print(f'Likes: {quote["likes"]} | Tags: {", ".join(quote["tags"])}')`,
      nodejs: `// Next.js API route handler
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const bookId = searchParams.get('bookId');
  const authorId = searchParams.get('authorId');
  const limit = Number.parseInt(searchParams.get('limit') || '10');
  const page = Number.parseInt(searchParams.get('page') || '1');
  
  if (!bookId && !authorId) {
    return NextResponse.json(
      { error: 'Either bookId or authorId parameter is required' },
      { status: 400 }
    );
  }
  
  try {
    const apiUrl = new URL('https://api.goodreads-scraper.com/api/quotes');
    if (bookId) apiUrl.searchParams.set('bookId', bookId);
    if (authorId) apiUrl.searchParams.set('authorId', authorId);
    apiUrl.searchParams.set('limit', limit.toString());
    apiUrl.searchParams.set('page', page.toString());
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(\`Failed to fetch quotes: \${response.status}\`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch quotes' },
      { status: 500 }
    );
  }
}`,
    },
  },
  {
    id: "about",
    name: "About",
    description: "Information about the Goodreads Scraper API, its team, and usage terms.",
    method: "",
    url: "",
    parameters: [],
    exampleResponse: {},
    codeSnippets: {
      javascript: "",
      typescript: "",
      python: "",
      nodejs: "",
    },
  },
]
