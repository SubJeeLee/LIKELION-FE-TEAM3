import React, { useState } from "react";
import "./AddForm.css";

export default function AddForm({ onAdd }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [skills, setSkills] = useState("");
  const [desc, setDesc] = useState(""); // 자기소개 state
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !position.trim()) {
      setError("이름과 포지션을 입력해주세요.");
      return;
    }
    const skillArr = skills.split(/[\s,]+/).filter(Boolean);
    onAdd({
      id: Date.now(),
      name,
      position,
      skills: skillArr,
      likes: 0,
      description: desc, // 자기소개 전달
    });
    setName("");
    setPosition("");
    setSkills("");
    setDesc(""); // 자기소개 입력란 초기화
    setError("");
  };

  return (
    <form className="addform-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="포지션"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <input
        type="text"
        placeholder="스킬(띄어쓰기/쉼표 구분)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        style={{ width: 180 }}
      />
      <input
        type="text"
        placeholder="한 줄 자기소개"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        style={{ width: 220 }}
      />
      <button type="submit">추가</button>
      {error && <span className="addform-error">{error}</span>}
    </form>
  );
}
