import React from "react";
import "./TeamModal.css"; // 아래에서 만들 파일

export default function TeamModal({ open, member, onClose }) {
  if (!open || !member) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-box">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{member.name}</h2>
        <h4>{member.position}</h4>
        <p>
          스킬:{" "}
          {member.skills &&
            member.skills.map((s, i) => (
              <span key={i} style={{ marginRight: 4 }}>
                #{s}
              </span>
            ))}
        </p>
        <p style={{ marginTop: 16 }}>{member.description}</p>
      </div>
    </div>
  );
}
