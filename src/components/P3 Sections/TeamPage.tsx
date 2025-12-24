import { FaXTwitter, FaTelegram } from "react-icons/fa6";

const TeamPage = () => {
  return (
    <section className="team-page">
      {/* Intro */}
      <div className="team-intro">
        <h1>Meet The Team</h1>
        <p>
          A collective of creators, builders, and visionaries shaping the future
          of digital culture.
        </p>
      </div>

      {/* Members */}
      <div className="team-grid">
        {/* Member 1 */}
        <div className="team-card">
          <img src="./src/assets/images/team-profile/pic 2.png" alt="Neo" />
          <h3>Neo</h3>
          <span>Coder</span>

          <div className="team-social">
            <a href="https://x.com/STaghipour95798" target="_blank">
              <FaXTwitter />
            </a>
            <a href="https://t.me/neo" target="_blank">
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* Member 2 */}
        <div className="team-card">
          <img src="./src/assets/images/team-profile/pic 3.png" alt="Elliott" />
          <h3>ELLIOTT</h3>
          <span>CEO</span>

          <div className="team-social">
            <a href="https://x.com/pouyanzandilak1" target="_blank">
              <FaXTwitter />
            </a>
            <a href="https://t.me/elliott" target="_blank">
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* Member 3 */}
        <div className="team-card">
          <img src="./src/assets/images/team-profile/pic 1.jpg" alt="Moon" />
          <h3>Moon</h3>
          <span>NFT</span>

          <div className="team-social">
            <a href="https://x.com/shima_art2022?s=11" target="_blank">
              <FaXTwitter />
            </a>
            <a href="https://t.me/moon" target="_blank">
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>

      {/* Official Team Channels */}
      <div className="team-official">
        <h4>Official Team Channels</h4>

        <div className="official-links">
          <a href="https://x.com/Stonelookclub" target="_blank">
            <FaXTwitter />
            <span>X (Twitter)</span>
          </a>

          <a href="https://t.me/Stonelookclub" target="_blank">
            <FaTelegram />
            <span>Telegram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
