import React from "react";
import Heading from "../layout/Heading";
import webImg from "../assets/web-dev.svg";
import appImg from "../assets/App-dev.svg";
import graphicImg from "../assets/graphic.svg";
import digitalImg from "../assets/digital.svg";
import CourseCard from "../layout/CoursesCard";

const Courses = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title1=" Our " title2=" Courses " />

      <div className=" flex flex-wrap justify-center gap-6 mt-6">
        <CourseCard img={webImg} title="Web Development" info = "Embark on a transformative journey into the world of web development with our comprehensive course. From mastering HTML and CSS to diving into JavaScript and responsive design, this program equips you with the skills to build dynamic and visually stunning websites. Elevate your coding prowess and bring your web projects to life!" />
        <CourseCard img={appImg} title="App Development" info = "Unlock the realm of app development with our intensive course. Dive into the fundamentals of programming languages, UI/UX design, and mobile platforms. From creating sleek interfaces to deploying functional apps, this program guides you through the entire development lifecycle. Elevate your skills and bring your app ideas to fruition with confidence." />
        <CourseCard img={graphicImg} title="Graphic Designing" info = "Immerse yourself in the art of visual storytelling with our Graphic Designing course. From mastering industry-standard tools to unleashing your creativity in digital and print media, this program guides you through the essentials. Develop a keen eye for design principles and unleash your artistic potential. Elevate your visual communication skills today!" />
        <CourseCard img={digitalImg} title="Digital Marketing" info = "Ignite your digital marketing prowess with our comprehensive course. Dive into strategies for social media, SEO, content creation, and analytics. Learn to craft compelling campaigns and optimize online presence. Stay ahead in the dynamic world of digital marketing. Elevate your skills and drive impactful results for businesses. Enroll now to thrive in the digital landscape." />
      </div>
    </div>
  );
};

export default Courses;
