import { CodeSnippets } from "@/lib/api-endpoints";

export const getBookDetailsApiParameters = [
  {
    name: "slug",
    type: "string",
    required: true,
    description: "Goodreads book SLUG",
    placeholder: "18144590-the-alchemist",
  },
];

export const getBookDetailsApiResponse = {
  success: true,
  scrapedURL: "https://www.goodreads.com/book/show/18144590-the-alchemist",
  book: {
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    series: "",
    slug: "18144590-the-alchemist",
    title: "The Alchemist",
    author: [
      {
        id: 1,
        name: "Paulo Coelho",
        url: "/author/show/566.Paulo_Coelho",
      },
    ],
    rating: "3.92",
    ratingCount: "3,363,456 ",
    reviewsCount: "135,508 reviews135,508 reviews",
    description:
      "Combining magic, mysticism, wisdom, and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations.Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, following our dreams.",
    genres: [
      "",
      "Fiction",
      "Fantasy",
      "Philosophy",
      "Self Help",
      "Book Club",
      "Novels",
      "Spirituality",
    ],
    bookEdition: "182 pages, Paperback",
    publishDate: "First published January 1, 1988",
    related: [],
    reviewBreakdown: {
      rating5: "1,333,077",
      rating4: "973,336",
      rating3: "651,958",
      rating2: "260,381",
      rating1: "144,704",
    },
    reviews: [
      {
        id: 1,
        image:
          "/_next/image?url=https%3A%2F%2Fi.gr-assets.com%2Fimages%2FS%2Fcompressed.photo.goodreads.com%2Fusers%2F1472073986i%2F1642452._UX200_CR0%2C28%2C200%2C200_.jpg&w=128&q=75",
        author: "Kenny",
        date: "February 19, 2025",
        stars: "Rating 5 out of 5",
        text: '<b><i>It\'s the possibility of having a dream come true that makes life interesting.</i><br><a href="https://goodreads.com/book/show/18144590.The_Alchemist" title="The Alchemist by Paulo Coelho" rel="noopener"> The Alchemist</a> ~~ <a href="https://goodreads.com/author/show/566.Paulo_Coelho" title="Paulo Coelho" rel="noopener"> Paulo Coelho</a></b><br><br><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1484452848i/21719825._SX540_.gif" alt="1" class="gr-hostedUserImg" loading="lazy"><br><br>I preface my review by saying I am amazed how wildly passionate people are in their feelings toward this novel ~~ regardless of whether they love or hate <a href="https://goodreads.com/book/show/18144590.The_Alchemist" title="The Alchemist by Paulo Coelho" rel="noopener"> The Alchemist</a>. I’m one of those people who love it. But, I understand why people are so passionate in their dislike of this work. <a href="https://goodreads.com/author/show/566.Paulo_Coelho" title="Paulo Coelho" rel="noopener"> Paul Coelho</a> looks to inspire passion in people with The Alchemist. And he succeeds in doing so ~~ especially in those who are so passionate in their dislike of this book.<br><br><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1484452848i/21719826._SY540_.jpg" alt="1" class="gr-hostedUserImg" loading="lazy"><br><br><a href="https://goodreads.com/book/show/18144590.The_Alchemist" title="The Alchemist by Paulo Coelho" rel="noopener"> The Alchemist</a> is a novel that combines an atmosphere of medieval mysticism with the voice of the desert -- dreams, symbols, signs, and adventure follow Santiago and the reader like echoes of ancient wise voices. With this symbolic novel Coelho states that we should not avoid our destinies, and urges people to follow their dreams, because to find our "Personal Myth" and our mission on Earth is the way to find God, meaning happiness, fulfillment, and the ultimate purpose of creation.<br><br><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1484452848i/21719827._SY540_.jpg" alt="1" class="gr-hostedUserImg" loading="lazy"><br><br>The novel tells the tale of Santiago, a boy who has a dream and the courage to follow it. After listening to "the signs" the boy ventures in his personal, journey of exploration and self-discovery, searching for a hidden treasure located near the pyramids in Egypt. In his journey, Santiago sees the greatness of the world, and meets all kinds of exciting people like kings and alchemists. However, by the end of the novel, he discovers that "treasure lies where your heart belongs", and that the treasure was the journey itself, the discoveries he made, and the wisdom he acquired.<br><br><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1484452848i/21719828._SY540_.jpg" alt="1" class="gr-hostedUserImg" loading="lazy"><br><br>As the alchemist himself says when he appears to Santiago in the form of an old king "when you really want something to happen, the whole universe conspires so that your wish comes true". This is the core of the novel\'s theme. Isn\'t it true that all of us want to believe the old king when he says that the greatest lie in the world is that at some point we lose the ability to control our lives, and become the pawns of fate.<br><br><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1484452848i/21719829._SY540_.jpg" alt="1" class="gr-hostedUserImg" loading="lazy"> <br><br>Coelho also suggests that those who do not have the courage to follow their “Personal Myth", are doomed to a life of emptiness, misery, and unfulfillment. Fear, fear of failure seems to be the greatest obstacle to happiness. The old crystal-seller tragically confesses: “I am afraid that great disappointment awaits me, and so I prefer to dream". This is where Coelho really captures the drama of man, who sacrifices fulfillment to conformity, who knows he can achieve greatness but denies doing so, and ends up living an empty shell of a life.<br><br><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1484452848i/21719830._SY540_.jpg" alt="1" class="gr-hostedUserImg" loading="lazy"> <br><br><a href="https://goodreads.com/book/show/18144590.The_Alchemist" title="The Alchemist by Paulo Coelho" rel="noopener"> The Alchemist</a> is a novel that will not appeal to everybody. Not everyone will identify with Santiago. We all have dreams, and are praying for somebody to tell us they can come true. The novel skillfully combines words of wisdom, philosophy, and simplicity of meaning and language, and this is what makes it so enchanting.<br><br><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1484452848i/21719831._SY540_.jpg" alt="1" class="gr-hostedUserImg" loading="lazy">',
        likes: "1,111 likes",
      },
      {
        id: 2,
        image:
          "/_next/image?url=https%3A%2F%2Fi.gr-assets.com%2Fimages%2FS%2Fcompressed.photo.goodreads.com%2Fusers%2F1241119454i%2F551316.jpg&w=128&q=75",
        author: "Sithara",
        date: "December 22, 2007",
        stars: "Rating 2 out of 5",
        text: "I need to start this review by stating 1) I can't stand self-help books and 2) I'm a feminist (no, I don't hate men- some men are quite awesome, but I am very conscious of women and our place in the world.)<br><br>Short summary (mild spoilers): A boy named Santiago follows his 'Personal Legend' in traveling from Spain to the Pyramids in Egypt searching for treasure. Along the way, he learns 'the Language of the World' the 'Soul of the World' and discovers that the 'Soul of God' is 'his own soul.'<br><br>If the statements in quotes above ('personal legend', etc) fascinate you, then you'll enjoy this book. If you think they are hokey and silly, then you'll think this is a terrible book. If you think statements such as \"When you want something, all the universe conspires you to achieve it\" and \"All things are one\" are moving and life-changing, you'll love this book. If such statements have you rolling your eyes, then this isn't your cup of tea.<br><br>Its not that I find anything wrong with these messages. They are important, but must be balanced with responsibility. In my experience, 'following your dreams' (or personal legend) is not the only way toward wisdom and strength. Is the person who struggles to put food on the table every day for his or her family, consciously realizing that he or she may not be following his or her 'personal legend' any less heroic than some traveler who leaves everything and everyone he or she is responsible for to go on a spiritual quest? Coelho comes close to labeling such people, as losers in life, which I find completely off the mark as some of these people have the most to offer in terms of wisdom.<br><br>The issue of responsibility is also part of this book's sexism. The main male characters in the novel have 'Personal Legends' - they are either seeking them, or have achieved them, or have failed to achieve them. But Coelho never mentions 'Personal Legend' with regard to women, other than to say that Fatima, Santiago's fiance, is 'a part of Santiago's Personal Legend.\" Thats fine, but what about her own Personal Legend? Instead of traveling to find her dreams, she is content to sit around, do chores, and stare everyday at the desert to wait for his return. This is her 'fate' as a desert women. The fact that women don't have Personal Legends is even more galling considering the fact that according to Coelho, even minerals such as lead and copper have Personal Legends, allowing them to 'evolve' to something better (ie, gold).<br><br>In the ideal world presented in THE ALCHEMIST, it seems that the job of men is to seek out their personal legends, leaving aside thoughts of family and responsibility, and its the job of women to let them, and pine for their return. Of course, someone has to do the unheroic, inconvenient work of taking care of the children, the animals, the elderly, the ill...If everyone simply goes off on spiritual quests, deciding they have no responsibility other than to seek their Personal Legends, no one would be taking responsibility for the unglamorous work that simply has to take place for the world to run.<br><br>On the other hand, what if both men and women are allowed to struggle towards their 'Personal Legends,' and help each other as best as they can towards them, but recognize that their responsibilities may force them to defer, compromise, or even 'sacrifice' their dreams? This may seem depressing, but it isn't necessarily. Coelho seems to think that Personal Legends are fixed at childhood (or at birth, or even before) and are not changeable: they have to be followed through to the end, no matter how silly. But in my experience, many people have chosen to adjust, compromise, and even 'give up' on their dreams, only to find that life grants them something better, or they have a new, better dream to follow, a path providing greater wisdom. For me, these people have a more realistic, more humble, more fair, and less cliched vision of the world than Paulo Coelho's vision in THE ALCHEMIST.<br><br>",
        likes: "3,905 likes",
      },
      {
        id: 3,
        image:
          "/_next/image?url=https%3A%2F%2Fi.gr-assets.com%2Fimages%2FS%2Fcompressed.photo.goodreads.com%2Fusers%2F1411956191i%2F1219253._UX200_CR0%2C0%2C200%2C200_.jpg&w=128&q=75",
        author: "Amanda",
        date: "April 21, 2013",
        stars: "Rating 1 out of 5",
        text: "***spoilers and bitterness ahead--be forewarned**<br><br>I'm not sure that I can capture my utter disdain for this book in words, but I'll give it a shot. I read this book about three years ago and just had to re-read it for book club. It was a steaming pile of crap then and, guess what?, it's a steaming pile of crap now. The main reason I hate this book: it's trite inspirational literature dressed up as an adventure quest. You go into it thinking that it's going to be about a boy's quest for treasure. If you read the back, there are words like \"Pyramids,\" \"Gypsy,\" \"alchemist.\" Turns out, this is just <i>The Purpose Driven Life</i> dressed up with a little fable. It's Hallmark Hall of Fame territory set in an exotic locale. Which pisses me off to no end as I normally try to dodge that sort of thing, but here it is masquerading as the type of book I normally like. It's cliche, didactic, and poorly written. <br><br>Just as with <i>Aesop's Fables</i>, there's a moral to the story. And Coelho keeps backing up and running over it just to make sure that we get it (and he capitalizes important key words necessary to understanding it, lest we overlook their significance). If there's one thing Paulo Coelho can do, it's flog a dead horse. <br><br>Essentially, boy thinks he's happy in life. He's a shepherd who gets to travel the world, has all of his needs met, and owns a book which he can always trade for another book when he goes to market. What more can a boy need? Boy is then told by a mysterious stranger that he's not happy at all. Why not? He has failed to recognize his Personal Legend. Everyone has a Personal Legend, which is life's plan for you. However, most of us give up on our Personal Legend in childhood. If you are fortunate enough to hang onto and pursue your Personal Legend, then The Soul of the World will help you obtain it. All of nature conspires to bring you luck and good fortune so that you can fulfill your destiny, whether it's to be a shepherd on a quest for treasure at the pyramids, a butcher, a baker, a candlestick maker, or, one would assume, a prostitute, drug dealer, or porn star. Hey, we're all fate's bitch in <i>The Alchemist</i>. But I digress. Boy seeks out his Personal Legend and finds it's a long, hard road to obtaining what you want in life. But with faith, perseverance, and just a little goshdarnit good luck, the boy learns to speak the Language of the World and tap into The Soul of the World and fulfills his Personal Legend. And what does he learn? That what he sought was back home, the place he started from. Oh, silly boy. <br><br>So, in summation, here is what you should learn from <i>The Alchemist</i>:<br><br>1) Dream. And, while you're at it, dream BIG<br>2) Follow your bliss<br>3) Don't be surprised if you find obstacles in your way, but you will overcome<br>4) It's good to travel and encounter people from other cultures<br>5) What we most often seek is right in front of us, but sometimes we have to leave home to realize it<br><br>To all of these important life lessons, I can only say, \"Well, no shit, Sherlock.\" If Coelho knew anything about alchemy, he would have been able to transform this crap into gold. Alas, it's still crap. <br><br>Cross posted at <a href=\"http://viiamanda.blogspot.com/\" rel=\"nofollow noopener\">This Insignificant Cinder</a>",
        likes: "1,301 likes",
      },
    ],
    quotes: "2,569",
    quotesURL: "https://www.goodreads.com/work/quotes/4835472",
    questions: "119",
    questionsURL: "https://www.goodreads.com/book/18144590/questions",
    lastScraped: "2025-04-27T06:16:05.253Z",
  },
};

export const getBookDetailsCodeSnippets: CodeSnippets = {
  javascript: `// Using fetch
const slug = '18144590-the-alchemist';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

fetch(\`\${baseUrl}/api/book/details/\${slug}\`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Process the book details
    const book = data.book;
    console.log(\`\${book.title} by \${book.author[0].name}\`);
    console.log(\`Rating: \${book.rating}/5 (\${book.ratingCount} ratings)\`);
    console.log(\`Published: \${book.publishDate}\`);
    console.log(\`Genres: \${book.genres.join(', ')}\`);
    console.log(\`Description: \${book.desc}\`);
  })
  .catch(error => console.error('Error fetching book details:', error));`,

  typescript: `// Using axios with TypeScript
import axios from 'axios';

interface Author {
  id: number;
  name: string;
  url: string;
}

interface Book {
  cover: string;
  series: string;
  slug: string;
  seriesURL?: string;
  title: string;
  author: Author[];
  rating: string;
  ratingCount: string;
  reviewsCount: string;
  desc: string;
  genres: string[];
  bookEdition: string;
  publishDate: string;
  // ... existing code ...
}

interface BookResponse {
  success: boolean;
  scrapedURL: string;
  book: Book;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

async function getBookDetails(slug: string): Promise<Book | null> {
  try {
    const response = await axios.get<BookResponse>(
      \`\${baseUrl}/api/book/details/\${slug}\`
    );
    return response.data.book;
  } catch (error) {
    console.error('Error fetching book details:', error);
    return null;
  }
}

// Usage
const slug = '18144590-the-alchemist';
getBookDetails(slug).then(book => {
  if (book) {
    console.log(\`\${book.title} by \${book.author[0].name}\`);
    console.log(\`Rating: \${book.rating}/5 (\${book.ratingCount} ratings)\`);
    console.log(\`Published: \${book.publishDate}\`);
  }
});`,

  python: `# Using requests in Python
import requests
import os

def get_book_details(slug):
    base_url = os.getenv('NEXT_PUBLIC_BASE_URL', 'http://localhost:3000')
    response = requests.get(f'{base_url}/api/book/details/{slug}')
    
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        print(f"Error: {response.status_code}")
        return None

# Usage
slug = '18144590-the-alchemist'
result = get_book_details(slug)

if result:
    book = result['book']
    print(f"{book['title']} by {book['author'][0]['name']}")
    print(f"Rating: {book['rating']}/5 ({book['ratingCount']} ratings)")
    print(f"Published: {book['publishDate']}")
    print(f"Genres: {', '.join(book['genres'])}")`,

  nodejs: `// Next.js API route handler
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { slug } = params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  try {
    const response = await fetch(\`\${baseUrl}/api/book/details/\${slug}\`);
    
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
};
