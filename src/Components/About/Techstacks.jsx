import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaNpm } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiPostman,
  SiExpress,
  SiRedis,
  SiTypescript,
  SiPrisma,
  SiInsomnia,
  SiDocker,
  SiKubernetes,
  SiMongodb
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiTypescript />
            <h5>Typescript</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <SiPrisma />
            <h5> Prisma
            </h5>
          </div>
          <div>
            <GrGraphQl />
            <h5>GraphQl</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <SiMongodb />
            <h5>Mongodb</h5>
          </div>
          <div>
            <SiRedis />
            <h5>Redis</h5>
          </div>
          <div>
            <FaNpm />
            <h5>npm</h5>
          </div>
          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>
          <div>
            <SiInsomnia />
            <h5>Insomnia</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiDocker />
            <h5>SiDocker</h5>
          </div>
          <div>
            <SiKubernetes />
            <h5>Kubernetes</h5>
          </div>
        </div>
      </div>
    </>
  );
};
