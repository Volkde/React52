import React from "react";
import "./styles.css";

function ProfileCard({ avatar, name, job, hobbies }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
      <h2>{name}</h2>
      <p><strong>job:</strong> {job}</p>
      <p><strong>Hobbies:</strong> {hobbies}</p>
    </div>
  );
}

export default ProfileCard;
