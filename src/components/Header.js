function Header(props) {
  return (
    <>
		<header>
			<div className="container flexbox">
				<div className="logo-container">
					<h2>MyGallery</h2>
				</div>
				<div className="nav-container">
					<nav>
						<ul>
							<li className="default"><a href="#banner">Home</a></li>
							<li><a href="#gallery">Gallery</a></li>
							<li><a href="#about">About</a></li>
						</ul>
					</nav>
				</div>
				<div className="burger-menu"><i className="fa-solid fa-bars"></i></div>
			</div>
		</header>
    </>
  )
}

export default Header;