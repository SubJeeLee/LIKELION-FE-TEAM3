import React from "react";
import { useMemberStore } from "../store/zustand";

export default function TeamCard({ member }) {
  const { toggleLike } = useMemberStore();

  return (
    <div className="team-card">
      <h3>{member.name}</h3>
      <p>
        <b>{member.position}</b>
      </p>
      <p>
        {member.skills.map((skill, idx) => (
          <span
            key={idx}
            style={{ marginRight: 4, fontSize: 12, color: "#888" }}
          >
            #{skill}
          </span>
        ))}
      </p>
      <p style={{ fontSize: 14, margin: "8px 0" }}>{member.description}</p>
      <button
        onClick={() => toggleLike(member.id)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "18px",
          color: member.likes ? "red" : "#aaa",
        }}
        aria-label="좋아요"
      >
        ♥
      </button>
      <span style={{ marginLeft: 6 }}>{member.likes}</span>
    </div>
  );
}
