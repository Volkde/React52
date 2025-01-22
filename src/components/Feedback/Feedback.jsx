
import { useState } from "react";
import Button from "../../components/Button/Button";
import "./styles.css";

function Feedback() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
  
    const resetResults = () => {
      setLikes(0);
      setDislikes(0);
    };
  
   
  return (
    <div className="feedback-container">
      <div className="feedback-buttons">
        <span className="feedback-likes">{likes}</span>
        <Button
          name="Like"
          type="button"
          onClick={() => setLikes((prevLikes) => prevLikes + 1)}
        />
        <Button
          name="Dislike"
          type="button"
          onClick={() => setDislikes((prevDislikes) => prevDislikes + 1)}
        />
        <span className="feedback-dislikes">{dislikes}</span>
      </div>
      <Button name="Reset Results" type="button" onClick={resetResults} />
    </div>
  );
}
    export default Feedback;
