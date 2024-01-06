import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences, socialLinks } from "../constants";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Wanijya
        </span>
        👋
      </h1>
      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          A versatile Software Engineer proficient in Python, JavaScript, Java,
          Express, MongoDB, React, Node.js, CSS, HTML, and MySQL. I specialize
          in full-stack development, crafting clean and efficient solutions.
          With a keen eye for detail and a commitment to best practices, I
          thrive in creating impactful software. Let's build something great!
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  className="w-1/2 h-1/2 object-contain"
                  src={skill.imageUrl}
                  alt={skill.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-11 flex flex-col">
        <h3 className="subhead-text">Social Links</h3>
        {/* <p className="mt-5 flex flex-col gap-3 text-slate-500">
          I've worked with all shorts of companies, leveling up your skills and
          teaming up with smart pepole. Here's the rundown:
        </p> */}
      </div>
      {/* <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experiences) => (
            <VerticalTimelineElement
              key={experiences.company_name}
              date={experiences.date}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experiences.icon}
                    alt={experiences.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              iconStyle={{ background: experiences.iconBg }}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBlockColor: experiences.iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experiences.title}
                </h3>
                <p
                  className="text-black-500 font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {experiences.company_name}
                </p>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                {experiences.points.map((point, index) => (
                  <li
                    key={`experiences-point-${index}`}
                    className="text-black-500/50 font-normal pl-1 text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div> */}
      <div className="mt-5 flex flex-wrap gap-12">
        {socialLinks.map((socialLink) => (
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <Link
                className="w-20 h-20 flex justify-center items-center"
                to={socialLink.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-1/2 h-1/2 object-contain"
                  src={socialLink.iconUrl}
                  alt={socialLink.name}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200 mt-10" />
      <CTA />
    </section>
  );
};

export default About;
