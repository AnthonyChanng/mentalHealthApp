import React from "react";
import SideNavbar from "../SideNavbar/sideNavbar";
import "./quotes.css";

const favoriteQuotes = [
  {
    author: "Maya Angelou",
    quote:
      "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
  },
  {
    author: "Unknown",
    quote: "You are stronger than you think and more capable than you realize.",
  },
  {
    author: "Helen Keller",
    quote:
      "Although the world is full of suffering, it is also full of the overcoming of it.",
  },
  {
    author: "Rumi",
    quote: "The wound is the place where the Light enters you.",
  },
  {
    author: "Fred Rogers",
    quote:
      "Anything that's human is mentionable, and anything that is mentionable can be more manageable.",
  },
];

export default function Quotes() {
  return (
    <div style={{ display: "flex", alignItems: "stretch", minHeight: "100vh" }}>
      <SideNavbar />
      <div className="quotes-bg">
        <div className="quotes-main-card">
          <h2 className="quotes-header">Your Favorite Quotes</h2>
          <table className="quotes-table">
            <thead>
              <tr>
                <th>Quote</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {favoriteQuotes.map((q, idx) => (
                <tr key={idx}>
                  <td className="quotes-quote">“{q.quote}”</td>
                  <td className="quotes-author">{q.author}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
