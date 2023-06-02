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
      /**
       * Photo by <a href="https://unsplash.com/@the_jenn_wood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jenn Wood</a> 
       * on <a href="https://unsplash.com/photos/7sma23m8eJY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
       */
      id: 1,
			src: image1,
      alt: "img1"
		},
		{
      /**
       * Photo by <a href="https://unsplash.com/@the_jenn_wood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jenn Wood</a> 
       * on <a href="https://unsplash.com/photos/7sma23m8eJY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
       */
      id: 2,
			src: image2,
      alt: "img2"
		},
		{
      /**
       * Photo by <a href="https://unsplash.com/@the_jenn_wood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jenn Wood</a> 
       * on <a href="https://unsplash.com/photos/7sma23m8eJY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
       */
      id: 3,
			src: image3,
      alt: "img3"
		},
		{
      /**
       * Photo by <a href="https://unsplash.com/@the_jenn_wood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jenn Wood</a> 
       * on <a href="https://unsplash.com/photos/7sma23m8eJY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
       */
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
