// TeamSection.tsx
import React from "react";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
interface TeamMember {
  name: string;
  role: string;
  image: string;
  xLink: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Neo",
    role: "CODER",
    image: "./src/assets/images/team-profile/pic 2.png",
    xLink: "https://x.com/STaghipour95798",
  },
  {
    name: "ELLIOTT",
    role: "CEO",
    image: "./src/assets/images/team-profile/pic 3.png",
    xLink: "https://x.com/pouyanzandilak1",
  },
  {
    name: "Moon",
    role: "NFT",
    image: "./src/assets/images/team-profile/pic 1.jpg",
    xLink: "https://x.com/shima_art2022?s=11",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="team-section">
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img
              src={member.image}
              alt={member.name}
              className="team-avatar"
            />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <a
            href={member.xLink}
            target="_blank"
            rel="noreferrer"
            className="x-btn x-hidden"
            >
              <FaXTwitter />
              <span>Follow</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
