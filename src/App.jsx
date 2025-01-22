import "./App.css";
//импорт по умолчанию (название компонента можно заменить на любое другое)
// import MyButton from "./components/Button/Button";
// import Button from "./components/Button/Button";
//lessons
// import Lesson02 from "./lessons/Lesson02/Lesson02";
//import Lesson03 from "./lessons/Lesson03/Lesson03";
//homeworks
// import Homework02 from "./homeworks/Homework02/Homework02";
//import Homework03 from "./components/homeworks/Homework03/Homework03";
//import Homework04 from "./components/homeworks/Homework04/Homework04";
import Homework05 from "./components/homeworks/Homework05/Homework05";

function App() {
  return (
      <div className="app">
        {/* <Button />
        <Button />
        <Button /> */}
        {/* ---Topic: Components */}
        {/* <Lesson02/> */}
        {/* <Homework02/> */}
        {/* ---Topic: Props */}
        {/* <Lesson03 /> */}
        {/* <Homework03/> */}
        {/* ---Topic: functions, hooks(useState) */}
        {/* <Lesson04 /> */}
        {/* Consultations */}
        {/* <Counsultation_02 /> */}
        {/* <Homework04 /> */}
        {/* ---Topic: map components */}
        <Homework05 />
      </div>
  );
}

export default App;

