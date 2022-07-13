import React from "react";
import { useState } from "react";
import Forms from "./Forms";
import TrainingList from "./TrainingList";

export default function TrainingRecords() {
  const [masTrainigs, setMasTrainigs] = useState([]);

  const handleAdd = (trainigs) => {
    let trainigsData = masTrainigs.find((el) => el.date === trainigs.date);

    if (trainigsData) {
      setMasTrainigs((prevTrainigs) =>
        prevTrainigs.map((o) =>
          o.date === trainigs.date
            ? { date: o.date, text: +o.text + +trainigs.text }
            : o
        )
      );
    } else {
      setMasTrainigs((prevTrainigs) => [...prevTrainigs, trainigs]);
    }
  };

  const handleRemove = (date) => {
    setMasTrainigs((prevTrainigs) =>
      prevTrainigs.filter((o) => o.date !== date)
    );
  };

  return (
    <div>
      <Forms onAdd={handleAdd} />
      <TrainingList masTrainigs={masTrainigs} handleRemove={handleRemove} />
    </div>
  );
}
