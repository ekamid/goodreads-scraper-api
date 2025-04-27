# Goodreads Scraper API

![API Status](https://img.shields.io/badge/status-operational-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

A modern, RESTful API for accessing Goodreads data. Created as an alternative to the deprecated official Goodreads API.

## 📚 Overview

The Goodreads Scraper API provides developers with access to book data from Goodreads, including book details, author information, reviews, quotes, and more. This API is designed to be easy to use and integrate into your applications.

### Base URL

```
https://gdscraper.bookishnearby.com
```

To obtain an API key, [contact us](mailto:api@goodreads-scraper.com) or sign up on our [developer portal](https://api.goodreads-scraper.com/developers).

## 📋 Available Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/lists` | GET | Get book lists by category, genre, or popularity |
| `/api/book/details/:slug` | GET | Get detailed information about a specific book |
| `/api/authors/:id` | GET | Get detailed information about an author |
| `/api/search` | GET | Search for books by title, author, or ISBN |
| `/api/users/:username/shelves` | GET | Get a user's bookshelves and their books |
| `/api/book/details/:slug/reviews` | GET | Get reviews for a specific book |
| `/api/quotes` | GET | Get quotes from a book or by an author |

## 🚀 Quick Start Examples

### Get Book Details

```javascript
// Using fetch
fetch('https://api.goodreads-scraper.com/api/books/58490567', {
  headers: {
    'X-API-Key': 'your_api_key_here'
  }
})
.then(response => response.json())
.then(data => {
  console.log(data);
  // Process the book details
})
.catch(error => console.error('Error fetching book details:', error));
```

### Search for Books

```javascript
// Using fetch
const searchQuery = 'fourth wing';
const searchType = 'all';
const limit = 20;

fetch(`https://api.goodreads-scraper.com/api/search?query=${encodeURIComponent(searchQuery)}&type=${searchType}&limit=${limit}`, {
  headers: {
    'X-API-Key': 'your_api_key_here'
  }
})
.then(response => response.json())
.then(data => {
  console.log(data);
  // Process the search results
})
.catch(error => console.error('Error searching books:', error));
```

### Get Book Lists

```javascript
// Using fetch
fetch('https://api.goodreads-scraper.com/api/lists?type=bestsellers&limit=10', {
  headers: {
    'X-API-Key': 'your_api_key_here'
  }
})
.then(response => response.json())
.then(data => {
  console.log(data);
  // Process the book list data
})
.catch(error => console.error('Error fetching book lists:', error));
```

## 📦 Installation

### Node.js (npm)

```bash
npm install goodreads-scraper-api
```

### Python (pip)

```bash
pip install goodreads-scraper-api
```

## 📘 Documentation

For complete documentation, visit our [API Documentation](https://api.goodreads-scraper.com/docs).

## 📊 Rate Limits

- Free tier: 1,000 requests per day
- Pro tier: 10,000 requests per day
- Enterprise tier: Custom limits

## 🔄 Response Format

All API responses are returned in JSON format with the following structure:

```json
{
  "success": true,
  "data": { ... },
  "error": null
}
```

In case of an error:

```json
{
  "success": false,
  "data": null,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error message description"
  }
}
```

## 🛠️ Error Codes

| Code | Description |
|------|-------------|
| `INVALID_API_KEY` | The API key is invalid or missing |
| `RATE_LIMIT_EXCEEDED` | You have exceeded your rate limit |
| `RESOURCE_NOT_FOUND` | The requested resource was not found |
| `INVALID_PARAMETERS` | The request parameters are invalid |
| `SERVER_ERROR` | An internal server error occurred |

## 👥 Who Made This?

The Goodreads Scraper API was built during a caffeine-fueled coding sprint as part of the R&D project [Nearby Bookish](https://bookishnearby.com); a platform that connects local readers to share books, engage in discussions, and foster a sense of community around reading.  
Since Goodreads shut down their API, one overwhelmed developer (hi 👋) decided to make a new way to fetch book data — by scraping it.

**Developer**: [Ebrahim Khalil](https://github.com/ekamid) (professional overthinker and sometimes pretends to be a book nerd)

## 🙏 Credits

Special thanks to the open-source community for providing invaluable tools and libraries. We're particularly grateful to [Biblioreads](https://biblioreads.eu.org) for their pioneering work in making book data accessible. Their project has been a significant inspiration for this API.


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more information.

## 📞 Support

If you need help or have any questions, please [create an issue](https://github.com/ekamid/goodreads-scraper-api/issues/new) or contact us at [ebrahimkha@gmail.com](mailto:ebrahimkha@gmail.com).

If you find this project helpful, consider buying me a coffee:

<a href="https://www.buymeacoffee.com/ebrahimkhalil" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50">
</a>

## ⚠️ Disclaimer

This API is not affiliated with or endorsed by Goodreads or Amazon. It is an independent project that scrapes publicly available data from Goodreads. Please use responsibly and in accordance with Goodreads' terms of service.
