import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
 const handleSubmit = (e) => {
  e.preventDefault();

  fetch("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("POST inviato:", data);
    })
    .catch((err) => console.error(err));
  };
  return (
    <div style={{ padding: "40px" }}>
      <h1>Post Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Autore</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Titolo</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Testo</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>
            Pubblico
            <input
              type="checkbox"
              name="public"
              checked={formData.public}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">Invia</button>
      </form>
    </div>
  );
}

export default App;
