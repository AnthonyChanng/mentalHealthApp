import React from "react";
import SideNavbar from "../SideNavbar/sideNavbar";
import "./bulletinboard.css";

const notes = [
  {
    color: "yellow",
    message: "You're not alone in this journey. Every small step counts! 💙",
    rotate: -7,
  },
  {
    color: "pink",
    message:
      "Bad days don't last, but resilient people like you do. Keep going! ✨",
    rotate: 5,
  },
  {
    color: "blue",
    message:
      "Your feelings are valid. Take it one breath at a time. You've got this! 🌟",
    rotate: 2,
  },
  {
    color: "green",
    message: "Progress isn't always linear. Celebrate the small wins! 🏆",
    rotate: -4,
  },
  {
    color: "orange",
    message: "Tomorrow is a new opportunity to heal and grow. Stay strong! 💪",
    rotate: 6,
  },
  {
    color: "purple",
    message:
      "Self-care isn't selfish. You deserve kindness, especially from you! 🌸",
    rotate: 3,
  },
  {
    color: "blue",
    message:
      "It's okay to have tough days. What matters is that you're here. 😊",
    rotate: -5,
  },
  {
    color: "lightgreen",
    message:
      "Your mental health journey matters. We're all cheering for you! 🦸‍♂️",
    rotate: 4,
  },
];

const colorMap = {
  yellow: "#fff475",
  pink: "#ffd6e0",
  blue: "#c6e2ff",
  green: "#b6fcd5",
  orange: "#ffe4b3",
  purple: "#e1d6ff",
  lightgreen: "#eaffd0",
};

export default function BulletinBoard() {
  return (
    <div style={{ display: "flex", alignItems: "stretch", minHeight: "100vh" }}>
      <SideNavbar />
      <div className="bulletin-bg">
        <div className="bulletin-board">
          <div className="bulletin-header">Community Support Board</div>
          <div className="bulletin-notes">
            {notes.map((note, idx) => (
              <div
                key={idx}
                className="bulletin-note"
                style={{
                  background: colorMap[note.color],
                  transform: `rotate(${note.rotate}deg)`,
                }}
              >
                <div className="bulletin-note-pin" />
                <div className="bulletin-note-name">{note.name}</div>
                <div className="bulletin-note-message">{note.message}</div>
              </div>
            ))}
            <div className="bulletin-note bulletin-add-note">
              <div className="bulletin-add-dashed">+</div>
              <div className="bulletin-add-text">Add your note</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
