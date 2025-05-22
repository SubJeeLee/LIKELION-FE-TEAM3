import React, { useState } from "react";
import TeamCard from "../components/TeamCard";
import { mockMembers } from "../mockData";

export default function Home() {
  const [members, setMembers] = useState(mockMembers);

  return (
    <div>
      <h2>우리 팀원들</h2>
      <div style={{ display: "flex", gap: "16px" }}>
        {members.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
