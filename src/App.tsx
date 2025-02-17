import Header from "./assets/componentes/header";
import Footer from "./assets/componentes/footer";
import Book from "./assets/componentes/book";
import Title from "./assets/componentes/title";
import "./App.css";

const booksList = [
  {
    title: "The Godfather",
    pages: 433,
    isRead: true,
    isFavorite: false,
  },
  {
    title: "The Little Prince",
    pages: 92,
    isRead: true,
    isFavorite: true,
  },
  {
    title: "Clean Code",
    pages: 425,
    isRead: false,
    isFavorite: false,
  },
  {
    title: "Dom Casmurro",
    pages: 192,
    isRead: true,
    isFavorite: false,
  },
  {
    title: "Vidas Secas",
    pages: 176,
    isRead: true,
    isFavorite: false,
  },
  {
    title: "Turma da Mônica",
    pages: 52,
    isRead: false,
    isFavorite: false,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Title>
          <s>Livros emprestados </s>Meus Livros:
        </Title>
        <p>
          <s>Livros emprestados </s>Meus Livros:
        </p>
        <ul className="books-list">
          {booksList.map((book) => (
            <Book book={book} key={book.title} />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
