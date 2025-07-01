import React from "react";
import "./about.css";
import { TfiLinkedin } from "react-icons/tfi";
import { FaPeopleRobbery } from "react-icons/fa6";
import { GiWingedShield } from "react-icons/gi";
import { TbAccessPoint } from "react-icons/tb";

const teamMembers = [
  { name: "Anthony Channg", title: "CEO", linkedin: "#" },
  { name: "Anthony Channg", title: "Lead Software Developer", linkedin: "#" },
];

const values = [
  {
    icon: <TbAccessPoint size={50} />,
    title: "Accessibility",
    desc: "Designing the app to be easy to use and accessible for individuals of all ages and tech skill levels, ensuring that mental health support is available to everyone.",
  },
  {
    icon: <FaPeopleRobbery size={50} />,
    title: "Empathy",
    desc: "Offering a platform where users feel understood, supported, and encouraged, creating a community that values kindness and compassion.",
  },
  {
    icon: <GiWingedShield size={50} />,
    title: "Resilience",
    desc: "Helping users build mental strength and coping mechanisms by providing consistent support, resources, and activities that foster emotional resilience.",
  },
];

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">Our Team</h2>
      <div className="team-list">
        {teamMembers.map((member, idx) => (
          <React.Fragment key={idx}>
            <div className="team-row">
              <div className="team-name-col">{member.name}</div>
              <div className="team-title-col">{member.title}</div>
            </div>
            {idx !== teamMembers.length - 1 && <div className="team-divider" />}
          </React.Fragment>
        ))}
      </div>
      <div className="values-section">
        <h2 className="about-title">Our Values</h2>
        <div className="value-cards-list">
          {values.map((value, idx) => (
            <React.Fragment key={idx}>
              <div className="value-row">
                <div className="value-icon-col">{value.icon}</div>
                <div className="value-text-col">
                  <div className="value-title">{value.title}</div>
                  <div className="value-desc">{value.desc}</div>
                </div>
              </div>
              {idx !== values.length - 1 && <div className="value-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
