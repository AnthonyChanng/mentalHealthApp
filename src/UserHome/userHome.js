import React, { useState } from "react";
import SideNavbar from "../SideNavbar/sideNavbar";
import "./userHome.css";

const emojiList = [
  { icon: "😢", label: "Very Sad" },
  { icon: "😕", label: "Sad" },
  { icon: "😐", label: "Neutral" },
  { icon: "🙂", label: "Happy" },
  { icon: "😁", label: "Very Happy" },
];

const quote =
  '"You are stronger than you think and more capable than you realize."';

export default function UserHome() {
  const [mood, setMood] = useState(2);
  const [moodNote, setMoodNote] = useState("");
  const [quoteSaved, setQuoteSaved] = useState(false);
  const handleMoodChange = (e) => setMood(Number(e.target.value));
  const handleMoodNoteChange = (e) => setMoodNote(e.target.value);

  const handleLogMood = (e) => {
    e.preventDefault();
    setMoodNote("");
    alert("Mood logged!");
  };
  const handleSaveQuote = () => setQuoteSaved(true);

  return (
    <div style={{ display: "flex", alignItems: "stretch", minHeight: "100vh" }}>
      <SideNavbar />
      <div className="userhome-bg" style={{ width: "100%" }}>
        <div className="userhome-main">
          <div className=" userhome-greeting">
            <h2>Good Morning, Alex</h2>
            <p>How are you feeling today?</p>
          </div>
          <div className="userhome-card userhome-moodcard">
            <div className="userhome-mood-label">Current Mood</div>
            <div className="userhome-mood-slider-row">
              {emojiList.map((e, i) => (
                <span
                  key={e.label}
                  className={`emoji${i === mood ? " selected" : ""}`}
                >
                  {e.icon}
                </span>
              ))}
            </div>
            <input
              type="range"
              min="0"
              max="4"
              value={mood}
              onChange={handleMoodChange}
              className="userhome-mood-slider"
            />
            <div className="userhome-mood-desc">{emojiList[mood].label}</div>
            <textarea
              className="userhome-mood-note"
              placeholder="Add a note about how you're feeling..."
              value={moodNote}
              onChange={handleMoodNoteChange}
            />
            <button
              className="userhome-btn userhome-log-btn"
              onClick={handleLogMood}
            >
              Log Mood
            </button>
          </div>
          <div className="userhome-card userhome-quote">
            <div className="userhome-quote-text">{quote}</div>
            <button
              className="userhome-btn userhome-quote-btn"
              onClick={handleSaveQuote}
              disabled={quoteSaved}
            >
              {quoteSaved ? "Saved!" : <>Save Quote</>}
            </button>
          </div>
          <div className="userhome-card userhome-emergency">
            <div className="userhome-emergency-title">Need immediate help?</div>
            <div className="userhome-emergency-row">
              <span>Crisis Text Line</span>
              <a
                className="userhome-emergency-btn"
                href="https://www.crisistextline.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Text HOME to 741741
              </a>
            </div>
            <div className="userhome-emergency-row">
              <span>National Suicide Prevention</span>
              <a className="userhome-emergency-btn" href="tel:988">
                Call 988
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
