import React, { useEffect } from "react";
import TeamCard from "../components/TeamCard";
import { mockMembers } from "../mockData";
import { useMemberStore } from "../store/zustand";

export default function Home() {
  const { members, setMembers } = useMemberStore();

  // 앱 시작시 한 번만 mock 데이터 저장
  useEffect(() => {
    setMembers(mockMembers);
  }, [setMembers]);

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
