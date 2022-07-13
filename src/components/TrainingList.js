import React from "react";
import { nanoid } from "nanoid";

function TrainingList(props) {
  const sort = (arr) => {
    return arr.sort((a, b) =>
      new Date(
        `20${b.date.slice(6, 8)}-${b.date.slice(3, 5)}-${b.date.slice(0, 2)}`
      ).getTime() >
      new Date(
        `20${a.date.slice(6, 8)}-${a.date.slice(3, 5)}-${a.date.slice(0, 2)}`
      ).getTime()
        ? 1
        : -1
    );
  };

  return (
    <div>
      <div className="header">
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено км</span>
        <span>Действие</span>
      </div>
      <ul className="container">
        {sort(props.masTrainigs).map((item) => {
          return (
            <li key={nanoid()}>
              <span>{item.date}</span> <span>{item.text}</span>{" "}
              <span
                className="removeTrainigs"
                onClick={() => props.handleRemove(item.date)}
              >
                x
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TrainingList;
