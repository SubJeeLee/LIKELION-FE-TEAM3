import React, { useState, useEffect, useContext } from "react";
import TeamCard from "../components/TeamCard";
import TeamModal from "../components/TeamModal";
import AddForm from "../components/AddForm";
import "./Home.css";
import "../components/DarkModeToggle.css";

import { useMemberStore } from "../store/zustand";
import { mockMembers } from "../mockData";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
  const { members, setMembers, interests, removeInterest } = useMemberStore();
  const [selected, setSelected] = useState(null);
  const { mode, setMode } = useContext(ThemeContext);

  const handleAddMember = (member) => {
    setMembers([...members, member]);
  };

  useEffect(() => {
    setMembers(mockMembers);
  }, [setMembers]);

  return (
    <div className="home-root">
      <button
        className="dark-light-toggle"
        aria-label="다크/라이트 전환"
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      >
        <div className={`icon30 sun${mode === "dark" ? "" : " active"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#222222"
          >
            <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
          </svg>
        </div>
        <div className={`icon30 moon${mode === "dark" ? " active" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
          </svg>
        </div>
      </button>

      <AddForm onAdd={handleAddMember} />
      <h2>우리 팀원들</h2>
      <div className="team-list">
        {members.map((member) => (
          <TeamCard
            key={member.id}
            member={member}
            onClick={() => setSelected(member)}
          />
        ))}
      </div>
      <TeamModal
        open={!!selected}
        member={selected}
        onClose={() => setSelected(null)}
      />
      <div style={{ margin: "32px 0 24px 0" }}>
        <h3>관심사(관심 팀원) 목록</h3>
        {interests.length === 0 ? (
          <div style={{ color: "#aaa" }}>아직 관심 팀원이 없습니다.</div>
        ) : (
          <div className="interest-list">
            {interests.map((member) => (
              <div key={member.id} className="interest-card">
                <span>{member.name}</span>
                <button
                  onClick={() => removeInterest(member.id)}
                  className="interest-remove-btn"
                  aria-label="관심 목록에서 제거"
                >
                  -
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
