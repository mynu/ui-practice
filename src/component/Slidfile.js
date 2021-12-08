import React, { Component } from 'react'
import Carousel from 'react-bootstrap/esm/Carousel'
import '../component/procss.css'

export default class Slidfile extends Component {
  render() {
    return (
      <div className="slid">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/66/b7/f6/66b7f6e5ad85cdfeab3459f2b5480407.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className='slidname'>First slide label</h3>
              <p className='slidname'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpapercave.com/wp/wp2634222.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className='slidname'>Second slide label</h3>
              <p className='slidname'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://c4.wallpaperflare.com/wallpaper/234/414/551/earth-4k-hd-image-for-wallpaper-preview.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className='slidname'>Third slide label</h3>
              <p className='slidname'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
       

      </div>
    )
  }
}
