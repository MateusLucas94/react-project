import Header from "./assets/componentes/header";
import Footer from "./assets/componentes/footer";
import Book from "./assets/componentes/book";
import Title from "./assets/componentes/title";
import { bestMovie, booksList } from "./data";

import interstellarSrc from "./assets/interstellarSrc.jpg";

import "./App.css";

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
        <Title>{bestMovie}</Title>
        <div className="images-container">
          <img src={interstellarSrc} alt="Poster 1 interstellar" />
          <img src="/interstellarPublic.jpg" alt="Poster 2 interstellar" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
