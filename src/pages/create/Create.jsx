import { useState } from "react";

import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="create">
      <h2 className="page-title">Add a New Show</h2>
      <form>
        <label>
          <span>Show Title/ Headline:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Location:</span>
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            required
          />
        </label>
        <label>
          <span>Date:</span>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
        </label>
        <label>
          <span>Time:</span>
          <input
            type="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            required
          />
        </label>
        <label>
          <span>Description:</span>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </label>
      </form>
    </div>
  );
}
