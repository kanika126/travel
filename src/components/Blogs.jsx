import { useState } from 'react'
import styled from "styled-components";


const Gallery = ({Blog,word,url}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  return (
    <Section id="blog">
    <div>
      <h1 className="headertekst">Top Indian Blogs To Check Out </h1>
      <br></br>
      {openModal && 
        <div className='sliderWrap'>
          
          <div className='fullScreenImage'>
            <img src={Blog[slideNumber].img} alt='' />
            <h3>{word}</h3>
            <a href={url}>More</a>
          </div>
        </div>
      }

      {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {Blog.length}
      <br /><br /> */}

      <div className='galleryWrap'>
        {
          Blog && Blog.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <div className='title'> 
                
                <img src={slide.img} alt='' />
                <h3>{slide.word}</h3>
                <a href={slide.url}> Read More... </a>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
    <br></br>
    <br></br>
    </Section>
  )
}

export default Gallery

const Section = styled.section`
.galleryWrap {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
}
h1.headertekst {
  text-align: center;
} 
.title{
  text-align: center;
}
.galleryWrap .single {
  width: 400px;
  cursor: pointer;
}

.galleryWrap .single img {
  max-width: 100%;
}

.galleryWrap .single img:hover {
  transform: scale(0.80);
}

.sliderWrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.sliderWrap .btnClose, .sliderWrap .btnPrev, .sliderWrap .btnNext {
  position: fixed;
  cursor: pointer;
  opacity: 0.6;
  color: #fff;
  z-index: 9999;
}

.btnNext:hover, .btnPrev:hover, .btnClose:hover {
  opacity: 1;
}

`;