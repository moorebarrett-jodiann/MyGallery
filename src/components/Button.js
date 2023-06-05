function Button(props) {
  return (
    <div className="btn-container">
      <button className={props.isPrimary ? "primary" : "secondary"}>View Gallery</button>
    </div>
  )
}

export default Button;