/**
 * TeamModal 컴포넌트
 * -------------------------------------------
 * - 팀원 카드를 클릭하면 뜨는 상세보기 모달창입니다.
 * - open(열림 여부), member(팀원 데이터), onClose(닫기 함수) props로 받음
 * - 모달 바깥 클릭, 닫기 버튼 클릭 시 onClose() 호출로 닫힘
 * - 모달 내에서 팀원의 이름, 포지션, 스킬, 자기소개를 보여줌
 * -------------------------------------------
 */

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
