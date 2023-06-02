import './stylesheet/index.css';
import Banner from './components/Banner';
import Button from './components/Button';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Banner
            button={Button}
          />
          <Gallery />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
