import React from "react";
import "./Projects.css";
import { FaReact, FaNodeJs, Facss } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  Sicss,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { Carosal } from "./Carosal";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>

        {/* ///Fruites And Vegies--------------------------- */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <Carosal
                  image={"https://i.ibb.co/vqn6YT5/Home-Fruits.png"}
                  image1={"https://i.ibb.co/C66wsg1/single-fruit-page.png"}
                  image2={"https://i.ibb.co/rwkXQyB/fruitproduct.png"}
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Fruitsandveggiesng Clone</h2>
              <p>
                Fruits & Veggies provides farm fresh fruits and vegetables
                online at the best prices in India.
                <br />
                <br />
                <b>Features</b> : Sign up/Login Page, Home Page, All fruits and
                vegetables List, Product Description,Cart Page, Payment Page
                User Profile and order History ,Connected to a MongoDB database
              </p>
              <div>
                <DiMongodb />
                <SiExpress />
                <FaReact />
                <FaNodeJs />
                <SiHtml5 />
                <DiCss3 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://fruitsandveggies.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Teju0910/Fruitsandveggiesng-clone.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ///Apple TV--------------------------- */}

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/RQXtSRH/apple-landing.png"
                  alt="appletv"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Apple TV+ Clone</h2>
              <p>
                Apple TV+ is a streaming service that lives inside the Apple TV
                app
                <br />
                <br />
                <b>Features</b> : Sign up/Login Page, Home Page, All Series and
                Movies List, Watch Movie/Series , Buy subscription plan
              </p>
              <div>
                <DiMongodb />
                <SiExpress />
                <FaReact />
                <FaNodeJs />
                <SiHtml5 />
                <DiCss3 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://tv-apple-clone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Teju0910/tv-apple-clone.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ///bluefly--------------------------- */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/GtLTz32/Capture.png"
                  alt="Pulseplus"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>BlueFly Clone</h2>
              <p>
                Bluefly offers its customers a selection of thousands of luxury
                brands at great prices and services.
                <br />
                <br />
                <b>Features</b> : Sign up/Login Page Home Page Product List,
                Product Description and Cart Page Payment Connected to a MongoDB
                database
              </p>
              <div>
                <DiMongodb />
                <SiExpress />
                <FaReact />
                <FaNodeJs />
                <SiHtml5 />
                <DiCss3 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://bluefly-clone-frontend.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Teju0910/bluefly-clone-frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src="https://i.ibb.co/jDYQFdb/revv.png" alt="Revv-clone" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>REVV.co.in Clone</h2>
              <p>
                Revv is a self-drive car rental company that provides a wide
                variety of cars on rent. A collaborative project built by a team
                of 4 executed within 5 days, hosted on Netlify
                <br />
                <br />
                <b>Features</b> : Sign-in/Sign-up, User Authentication, Sort and
                Filter Functionality, Added API for all Car, Added API for login
                user, Add to cart & Paytm payment gateway.
              </p>
              <div>
                <DiMongodb />
                <SiExpress />
                <FaNodeJs />
                <SiHtml5 />
                <DiCss3 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://revv-clone.netlify.app/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Teju0910/revvgroup-frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/wrTXJhN/pharma.png"
                  alt="pharmaEasy-clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>PharmEasy Clone</h2>
              <p>
                PharmEasy is one of India's leading healthcare aggregators and
                most trusted medicine delivery website. A collaborative project
                built by a team of 3 executed within 5 days, hosted on Netlify.
                <br />
                <br />
                <b>Features</b> : Sign-in/Sign-up, Home Page Dynamic product
                card, Sort and Filter Functionality, Add to cart & Paytm payment
                gateway.
              </p>
              <div>
                <DiCss3 />
                <SiHtml5 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://pharmeasy-clone-2022.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Teju0910/PharmEasy-Clone-Project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
