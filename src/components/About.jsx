import React from "react";
import img from "../assets/about.svg";
import { Link } from "react-scroll";
import Button from "../layout/Button";
import Heading from "../layout/Heading";

const About = () => {
  return (
    <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-centre gap-5 md:mx-32 mx-5 mt-14">
      <div className="w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>
      <div className="w-full md:w-2/4 text-centre space-y-2 ">
        <Heading title1= "About" title2="Us ? "/>
        <p className="text-lightText">
          Welcome to eStudy, your premier destination for transformative
          learning experiences. At eStudy, we believe in the power of education
          to shape and elevate lives. Our mission is to provide accessible and
          innovative learning resources that empower individuals to unlock their
          full potential. Whether you're a student navigating the complexities
          of academics, a professional seeking to enhance your skills, or an
          inquisitive mind eager to explore new realms of knowledge, we have
          curated a diverse range of courses and content to cater to your unique
          learning journey.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
        <Button title = "Know More" /> 
        </Link>
      </div>
    </div>
  );
};

export default About;
