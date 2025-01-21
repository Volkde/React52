import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

function Homework02() {
  return (
    <div className="homework-02-wrapper">
      <ProfileCard
      avatar="https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?t=st=1737292078~exp=1737295678~hmac=a452152db60bfd980955f6e14bbf333315abcb09ec776bded2531d377dd9d7cf&w=740"
    name="Ivan Ivanov"
    job="Software Developer"
    hobbies="Coding, Reading, Traveling"
    />
     <ProfileCard
  avatar="https://img.freepik.com/premium-vector/young-man-blue-hoodie_1308-173463.jpg?w=740"
    name="Andrey Konder"
    job="Graphic Designer"
        hobbies="Drawing, Photography"
/>
<ProfileCard
avatar="https://img.freepik.com/premium-vector/teen-boy-with-smile-face_1308-129682.jpg?w=740"
name="Alexy Proger"
job="Data Scientist"
hobbies="AI, Hiking, Gaming"
/>

      </div>
  );

}

export default Homework02;