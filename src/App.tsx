import Header from "./assets/componentes/Header";
import Footer from "./assets/componentes/Footer";
import Book from "./assets/componentes/book";

const book1 = {
  title: "The Godfather",
  pages: 433,
  isRead: true,
  isFavorite: false,
};

const book2 = {
  title: "The Little Prince",
  pages: 92,
  isRead: true,
  isFavorite: true,
};

const book3 = {
  title: "Clean Code",
  pages: 425,
  isRead: false,
  isFavorite: false,
};

function App() {
  return (
    <>
      <Header />
      <h1>Meus Livros:</h1>
      <ul>
        <Book book={book1} />
        <Book book={book2} />
        <Book book={book3} />
      </ul>
      <Footer />
    </>
  );
}

export default App;
