# Changelog

All notable changes to the Goodreads Scraper API will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-04-25

### Added
- Initial public release of the Goodreads Scraper API
- Core endpoints:
  - `/api/lists` - Get book lists by category, genre, or popularity
  - `/api/book/details/:slug` - Get detailed information about a specific book
  - `/api/author/details/:slug` - Get detailed information about an author
  - `/api/search` - Search for books by title, author, or ISBN
  - `/api/users/:username/shelves` - Get a user's bookshelves and their books
  - `/api/book/details/:slug/reviews` - Get reviews for a specific book
  - `/api/quotes` - Get quotes from a book or by an author
- API key authentication system
- Rate limiting (1,000 requests per day for free tier)
- Comprehensive documentation

## [0.9.0] - 2024-03-15

### Added
- Beta release for selected partners
- Added `/api/quotes` endpoint for retrieving book and author quotes
- Implemented pagination for all list-based endpoints
- Added sorting options for reviews and search results
- Expanded book details to include series information
- Added similar books recommendations to book details

### Changed
- Improved error handling with detailed error messages
- Enhanced rate limiting with better header information
- Optimized response times for all endpoints

### Fixed
- Fixed UTF-8 encoding issues with non-English book titles and author names
- Resolved inconsistencies in date formatting across endpoints
- Fixed search functionality to properly handle special characters

## [0.8.0] - 2024-02-10

### Added
- Alpha release for internal testing
- Implemented core endpoints:
  - `/api/book/details/:slug`
  - `/api/author/details/:slug`
  - `/api/search`
  - `/api/lists`
- Basic authentication system
- Simple rate limiting
- Initial documentation

### Known Issues
- Inconsistent date formatting across endpoints
- Limited error handling
- Performance issues with large result sets
- No pagination for list-based endpoints

## [Upcoming Changes]

### Planned for v1.1.0
- New endpoint: `/api/genres` - Get detailed information about book genres
- New endpoint: `/api/series/:id` - Get detailed information about book series
- Enhanced filtering options for search endpoint
- Expanded author details with more biographical information
- Support for bulk operations to reduce API calls

### Planned for v1.2.0
- GraphQL API support alongside REST
- WebSocket support for real-time updates
- OAuth2 authentication option
- Enhanced analytics for API usage
- Improved caching mechanisms

## Breaking Changes Notice

### Upcoming in v2.0.0 (Q3 2024)
- The response format will be standardized across all endpoints
- Some fields will be renamed for consistency
- Authentication will require API keys to be passed in headers only (query parameters will be deprecated)
- Rate limits will be adjusted based on usage patterns

---

## Legacy Versions Support

| Version | Support Status | End-of-Life Date |
|---------|----------------|------------------|
| 1.0.x   | Full Support   | TBD              |
| 0.9.x   | Security Updates Only | 2024-10-25 |
| 0.8.x   | No Support     | 2024-04-25       |

For migration guides and assistance, please contact ebrahimkha71@gmail.com.
