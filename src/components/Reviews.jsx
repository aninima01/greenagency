import React from 'react'
import Heading from '../layout/Heading'
import ReviewCard from '../layout/ReviewCard'
import img1 from "../assets/images/pic1.png";
import img2 from "../assets/images/pic2.png";
import img3 from "../assets/images/pic3.png";

const Reviews = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
      <Heading title1 = "Our" title2 = "Reviews " />

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} info = "The web development course was a game-changer! Clear explanations, hands-on projects, and fantastic support. Mastering HTML, CSS, and JavaScript felt like a breeze. Highly recommended for aspiring developers." />
        <ReviewCard img={img2} info = "This app development course exceeded expectations. Comprehensive content, real-world projects, and expert guidance made learning iOS and Android app development a joy. Ready to launch my own app." />
        <ReviewCard img={img3} info = "The graphic designing course was phenomenal! From mastering design tools to unleashing creativity, it's a visual arts journey. Real-world projects made the learning experience both enjoyable and rewarding. Highly recommended for budding designers!" />
      </div>

      
    </div>
  )
}

export default Reviews
