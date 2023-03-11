const books = [ // No. of books: 15
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008,
    genre: "Young Adult, Science Fiction",
    rating: 4.33,
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    year: 2007,
    genre: "Fantasy",
    rating: 4.63,
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    year: 2005,
    genre: "Mystery, Thriller",
    rating: 4.13,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    year: 2003,
    genre: "Mystery, Thriller",
    rating: 3.82,
  },
  {
    title: "The Help",
    author: "Kathryn Stockett",
    year: 2009,
    genre: "Historical Fiction",
    rating: 4.47,
  },
  {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    year: 1996,
    genre: "Fantasy",
    rating: 4.45,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Fiction, Fantasy",
    rating: 3.86,
  },
  {
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    year: 2015,
    genre: "Mystery, Thriller",
    rating: 3.9,
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    year: 2012,
    genre: "Mystery, Thriller",
    rating: 4.06,
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    year: 2012,
    genre: "Young Adult, Romance",
    rating: 4.21,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    rating: 4.29,
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    year: 2003,
    genre: "Historical Fiction",
    rating: 4.29,
  },
  {
    title: "The Girl Who Played with Fire",
    author: "Stieg Larsson",
    year: 2006,
    genre: "Mystery, Thriller",
    rating: 4.23,
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    year: 2006,
    genre: "Post-Apocalyptic Fiction",
    rating: 3.97,
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    year: 2005,
    genre: "Historical Fiction",
    rating: 4.37,
  },
];
const filteredBooks = books.filter((book) => book.year <= 2010);
const bookList = document.createElement("ol");
filteredBooks.forEach((book) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${book.title} by ${book.author}, published in Year ${book.year}.`;
  listItem.style.fontSize = "20px";
  bookList.appendChild(listItem);
});
document.body.appendChild(bookList);