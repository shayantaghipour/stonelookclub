

const HeroPage = () => {
  return (
    <section className="community-page">
      {/* Hero */}
      <div className="community-hero">
        <h1>
          Where Culture Meets <span>Community</span>
        </h1>
        <p>
          A creative ecosystem built around people, stories, and shared
          experiences. Our community brings together art, fashion, and digital
          culture into one evolving world.
        </p>
      </div>

      {/* Visual Grid */}
      <div className="community-grid">
        <img src="./src/assets/images/community-section/P2/c1.jpg" />
        <img src="./src/assets/images/community-section/P2/c2.jpg" />
        <img src="./src/assets/images/community-section/P2/c3.jpg" />
        <img src="./src/assets/images/community-section/P2/c4.jpg" />
        <img src="./src/assets/images/community-section/P2/c5.jpg" />
        <img src="./src/assets/images/community-section/P2/c6.jpg" />
      </div>

      {/* Values */}
      <div className="community-values">
        <div className="value-card">
          <h3>Art & Identity</h3>
          <p>
            Every piece reflects individuality, freedom, and digital
            self-expression.
          </p>
        </div>

        <div className="value-card">
          <h3>People First</h3>
          <p>
            The community grows with its members — creators, collectors, and
            believers.
          </p>
        </div>

        <div className="value-card">
          <h3>Web3 Native</h3>
          <p>
            Built for decentralization, ownership, and the future of culture.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="community-actions">
        <button className="primary">Join Community</button>
        <button className="secondary">Read Manifesto</button>
      </div>
    </section>
  );
};

export default HeroPage;
