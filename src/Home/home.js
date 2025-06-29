import React from "react";
import "./home.css";
import moodImg from "../assets/moodTracker.jpg";
import journalImg from "../assets/journal.png";
import quoteImg from "../assets/qotd.png";
import boardImg from "../assets/bulletinBoard.jpg";

function Home() {
  return (
    <div className="container home-container">
      <div className="home-intro">
        <h1 id="title">Your Mental Health Matters</h1>
        <h3 id="description">
          A safe space for support, growth, and healing. <br />
          Track your progress, access resoruces, and connect with others.
        </h3>
        <div className="home-buttons">
          <button className="learn-more-btn">Already a member?</button>
          <button className="join-community-btn">Join Community</button>
        </div>
      </div>
      <div className="home-features">
        <h2 className="features-title">Features</h2>
        <div className="features-blocks">
          <div className="feature-row">
            <div className="feature-text">
              <h3 className="feature-heading">Mood Logging</h3>
              <p className="feature-desc">
                Mood logging is a personal tracking tool that allows users to
                record their emotional state over time. By regularly noting how
                they feel each day, users can track fluctuations in their mood
                and identify patterns or triggers that influence their mental
                health. This will be helpful for self-reflection, giving users
                the ability to take proactive steps towards improvement.
              </p>
            </div>
            <div className="feature-image">
              <div className="img-placeholder">
                <img src={moodImg} alt="Mood" />
              </div>
            </div>
          </div>
          <div className="feature-row reverse">
            <div className="feature-image">
              <div className="img-placeholder">
                <img src={quoteImg} alt="Quote" />
              </div>
            </div>
            <div className="feature-text reverse">
              <h3 className="feature-heading">Daily Quotes</h3>
              <p className="feature-desc">
                Daily affirmations provide users with positive, uplifting
                statements that help reframe negative thoughts and foster a
                mindset of self-belief and gratitude. By incorporating these
                affirmations into their daily rountine, users can boost
                self-esteem, reduce stress, and improve their emotional
                resilience.
              </p>
            </div>
          </div>
          <div className="feature-row">
            <div className="feature-text">
              <h3 className="feature-heading">Personal Journal</h3>
              <p className="feature-desc">
                A personal journal allows users to reflect on their thoughts,
                emotions, and experiences in a private, non-judgmental space. By
                making journaling a habit, users can enhance self-awareness,
                reduce stress, and develop a deeper understanding of their
                mental well-being.
              </p>
            </div>
            <div className="feature-image">
              <div className="img-placeholder">
                <img src={journalImg} alt="Journal" />
              </div>
            </div>
          </div>
          <div className="feature-row reverse">
            <div className="feature-image">
              <div className="img-placeholder">
                <img src={boardImg} alt="Board" />
              </div>
            </div>
            <div className="feature-text reverse">
              <h3 className="feature-heading">
                Community Support Bulletinboard
              </h3>
              <p className="feature-desc">
                An anonymous community bulletin board provides users with a safe
                space to share their thoughts, experiences, and support without
                revealing their identity. This platform fosters a sense of
                connection, allowing individuals to express themselves freely
                while maintaining privacy. By participating, users can gain
                emotional support, offer advice, and build a sense of solidarity
                with others facing similar challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
