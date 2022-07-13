import React from "react";
import { useState } from "react";

export default function Forms(props) {
  const { onAdd } = props;

  const [form, setForm] = useState({
    date: "",
    text: "",
    error: false,
  });

  const handleChange = ({ target }) => {
    const name = target.name;
    setForm((prevForm) => ({ ...prevForm, [name]: target.value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (form.date === "" || form.text === "") {
      setForm((prevForm) => ({ ...prevForm, error: true }));
    } else {
      onAdd({ date: form.date, text: form.text });
      setForm({ text: "", date: "" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
          <input
            id="date"
            type="text"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="text">Пройдено км</label>
          <input
            id="text"
            type="text"
            name="text"
            value={form.text}
            onChange={handleChange}
          />
        </div>
        <button className="btn">Ok</button>
      </form>
      <div>
        {form.error && <span className="error">Заполните все поля </span>}
      </div>
    </div>
  );
}
