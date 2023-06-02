import GalleryCards from "./GalleryCards";

function Gallery(props) {

  return (
    <>
      <section className="gallery-container" id="gallery">
        <div className="section-heading">
          <h2>Gallery</h2>
          <hr></hr>
        </div>
        <div className="gallery-grid">
          <GalleryCards
            items={props.images}
          />
        </div>
      </section>
    </>
  )
}

export default Gallery;