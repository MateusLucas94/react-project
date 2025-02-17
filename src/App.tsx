import Header from "./assets/componentes/Header";
import Footer from "./assets/componentes/Footer";
import Book from "./assets/componentes/Book";
import Title from "./assets/componentes/Title";

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
    <>
      <Header />
      <Title>
        <s>Livros emprestados </s>Meus Livros:
      </Title>
      <p>
        <s>Livros emprestados </s>Meus Livros:
      </p>
      <ul>
        {booksList.map((book) => (
          <Book book={book} key={book.title} />
        ))}
      </ul>
      <Footer />
    </>
  );
}

export default App;
