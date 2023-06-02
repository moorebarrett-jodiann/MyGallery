function GalleryCards(props) {
  return (
    <>
        {props.items.map(item => (
            <div className="img-card">
                <img src={item.src} alt="img"></img>
            </div>
        ))}
    </>
  )
}

export default GalleryCards