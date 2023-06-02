function Button(props) {
  return (
    <div className="btn-container">
      <button className={props.isPrimary ? "primary" : "secondary"}>{props.isPrimary ? "Primary" : "Secondary"}</button>
      <button className={props.isSecondary ? "secondary" : "primary"}>{props.isSecondary ? "Secondary" : "Primary"}</button>
    </div>
  )
}

export default Button;