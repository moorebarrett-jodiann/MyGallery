import Button from './Button';

function Banner() {

  let isPrimary = true;

  return (
    <>
      <section className="banner-container" id="banner">
          <div className="banner-info">
            <div className="main-text">
              <p>Enter a world of <span>Photos</span> and Amazing <span>Moments</span></p>
            </div>
            <div className="hr"></div>
            <div className="sub-text">
              <p>
              Welcome to our photography website, where we are passionate about capturing breathtaking moments for commercial display. 
              From vibrant landscapes to genuine human connections, our diverse portfolio offers a wide range of images suitable for 
              various commercial applications.
              </p>
            </div>
            <Button 
              isPrimary={isPrimary}
            />
          </div>
      </section>
    </>
  )
}

export default Banner;