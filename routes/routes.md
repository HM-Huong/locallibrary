# Routes

- `catalog/` — The home/index page.
- `catalog/<objects>/` — The list of all books, bookInstances, genres, or authors (e.g. /catalog/books/, /catalog/genres/, etc.)
- `catalog/<object>/<id>` — The detail page for a specific book, bookInstance, genre, or author with the given _id field - value (e.g. /catalog/book/584493c1f4887f06c0e67d37).
- `catalog/<object>/create` — The form to create a new book, bookInstance, genre, or author (e.g. /catalog/book/create).
- `catalog/<object>/<id>/update` — The form to update a specific book, bookInstance, genre, or author with the given _id field value (e.g. /catalog/book/584493c1f4887f06c0e67d37/update).
- `catalog/<object>/<id>/delete` — The form to delete a specific book, bookInstance, genre, author with the given _id field value (e.g. /catalog/book/584493c1f4887f06c0e67d37/delete).
