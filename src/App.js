import './stylesheet/index.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';

// Import images
import image1 from './images/gallery-1.jpg';
import image2 from './images/gallery-2.jpg';
import image3 from './images/gallery-3.jpg';
import image4 from './images/gallery-4.jpg';

function App() { 
  
  const imageArray = [
		{
      id: 1,
			src: image1,
      alt: "img1"
		},
		{
      id: 2,
			src: image2,
      alt: "img2"
		},
		{
      id: 3,
			src: image3,
      alt: "img3"
		},
		{
      id: 4,
			src: image4,
      alt: "img4"
		}
	];
   
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Banner />
          <Gallery images={imageArray} />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
