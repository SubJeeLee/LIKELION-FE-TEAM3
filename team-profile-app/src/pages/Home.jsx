import React, { useState, useEffect } from "react";
import TeamCard from "../components/TeamCard";
import TeamModal from "../components/TeamModal";
import { useMemberStore } from "../store/zustand";
import { mockMembers } from "../mockData";

export default function Home() {
  const { members, setMembers } = useMemberStore();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setMembers(mockMembers);
  }, [setMembers]);

  return (
    <div>
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
