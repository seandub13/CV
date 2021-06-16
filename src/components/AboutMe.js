import React from "react";
import Selfie from '../bus-selfie.jpg';

const AboutMe = () => {
  return (
    <div id="About" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
          Hi, I am Sean Williams, a web developer from Dublin, Ireland.
          I created this website as an interactive way to get to know me and showcase some of my development skills.
          I have been programming for over 10 years, which started with a 300 page book that thought you how to make websites and have been developing ever since.
          Over this time I have gathered experience in multiple different programming languages like Java, Python, Angular, Javascript, C++, Haskell and many more.
          I studied Enterprise Computing at Dublin City University graduating in 2019 with an Honours Bachelor's Degree and I am in the process of obtaining my Masters from Technological University Dublin in Advanced Software Development.
          I joined AIG after college as part of a rotation program that allowed me to experience multiple different aspects of software development so that I can now work as a full stack developer.
          As well as that, some of my hobbies include teaching, basketball and esports.
          If I had to describe myself, the best way would be as that I am big nerd who loves American sports who wants to create interesting and usefull web applcations.
          I'm always open to anybody that wants to talk job oppurtunites, emerging technologies or NBA results, please dont be shy and reach out to me.
          
          </p>
        </div>
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5 ">
            <img className="profile-img" src={Selfie} alt="Picture of me" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
