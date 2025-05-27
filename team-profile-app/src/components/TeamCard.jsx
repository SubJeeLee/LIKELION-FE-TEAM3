/**
 * TeamCard 컴포넌트
 * ----------------------------------------------
 * - 팀원 한 명의 프로필 카드 UI를 렌더링합니다.
 * - 카드 클릭 시 상세보기(모달) 호출
 * - ♥ 버튼: 좋아요 토글
 * - + 버튼: 관심 팀원 목록에 추가
 * - 이미 관심 목록에 있으면 + 버튼 비활성화(disabled)
 * ----------------------------------------------
 */

import React from "react";
import { useMemberStore } from "../store/zustand";
import "./TeamCard.css";

export default function TeamCard({ member, onClick }) {
  const { toggleLike, interests, addInterest } = useMemberStore();
  const alreadyAdded = interests.some((m) => m.id === member.id);

  return (
    <div className="team-card" onClick={onClick}>
      <h3 className="member-name">{member.name}</h3>
      <p className="member-position">
        <b>{member.position}</b>
      </p>
      <p className="skills">
        {member.skills.map((skill, idx) => (
          <span key={idx} className="skill-tag">
            #{skill}
          </span>
        ))}
      </p>
      <p className="member-desc">{member.description}</p>
      <div className="team-card-bottom-row">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleLike(member.id);
          }}
          className={`like-btn${member.likes ? " liked" : ""}`}
          aria-label="좋아요"
        >
          ♥
        </button>
        <span className="like-count">{member.likes}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            addInterest(member);
          }}
          disabled={alreadyAdded}
          className="team-card-add-btn"
          aria-label="관심 목록에 추가"
        >
          +
        </button>
      </div>
    </div>
  );
}
