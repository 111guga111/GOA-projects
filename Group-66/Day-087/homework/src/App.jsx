import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <nav><Nav /></nav>
      <main><About /></main>
      <section><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;

