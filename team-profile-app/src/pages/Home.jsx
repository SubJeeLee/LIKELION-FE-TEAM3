import React, { useState, useEffect, useContext } from "react";
import TeamCard from "../components/TeamCard";
import TeamModal from "../components/TeamModal";
import AddForm from "../components/AddForm";
import "../components/DarkModeToggle.css";
import { useMemberStore } from "../store/zustand";
import { mockMembers } from "../mockData";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
  const { members, setMembers } = useMemberStore();
  const [selected, setSelected] = useState(null);
  const { mode, setMode } = useContext(ThemeContext);

  const handleAddMember = (member) => {
    setMembers([...members, member]);
  };

  useEffect(() => {
    setMembers(mockMembers);
  }, [setMembers]);

  return (
    <div>
      <button
        className="darkmode-toggle-btn"
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      >
        {mode === "dark" ? "라이트모드" : "다크모드"}
      </button>

      <AddForm onAdd={handleAddMember} />
      <h2>우리 팀원들</h2>
      <div style={{ display: "flex", gap: "16px" }}>
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
    </div>
  );
}
