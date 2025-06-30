import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnsers = useRef();
  if (!shuffledAnsers.current) {
    shuffledAnsers.current = [...answers].sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnsers.current.map((option) => {
        let cssClass = "";
        const isSelected = selectedAnswer === option;
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={option} className="answer">
            <button
              onClick={() => onSelect(option)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
