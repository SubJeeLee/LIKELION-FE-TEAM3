import React from "react";

export default function TeamCard({ member, onClick }) {
  return (
    <div className="team-card" onClick={onClick}>
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
      <p>좋아요: {member.likes}</p>
    </div>
  );
}
