import React from "react";
import SideNavbar from "../SideNavbar/sideNavbar";
import "./journal.css";

const journalEntries = [
  {
    date: "2024-06-01",
    entry: "Today I started my new journal. Feeling hopeful and motivated!",
  },
  {
    date: "2024-06-02",
    entry: "Had a tough day, but I reached out to a friend and felt better.",
  },
  {
    date: "2024-06-03",
    entry: "Went for a walk and enjoyed the sunshine. Small steps matter.",
  },
  {
    date: "2024-06-04",
    entry: "Practiced self-care by reading and relaxing in the evening.",
  },
  {
    date: "2024-06-05",
    entry: "Felt anxious in the morning, but journaling helped me process it.",
  },
];

export default function Journal() {
  return (
    <div style={{ display: "flex", alignItems: "stretch", minHeight: "100vh" }}>
      <SideNavbar />
      <div className="journal-bg">
        <div className="journal-main-card">
          <h2 className="journal-header">Your Journal Entries</h2>
          <table className="journal-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Entry</th>
              </tr>
            </thead>
            <tbody>
              {journalEntries.map((j, idx) => (
                <tr key={idx}>
                  <td className="journal-date">{j.date}</td>
                  <td className="journal-entry">{j.entry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
