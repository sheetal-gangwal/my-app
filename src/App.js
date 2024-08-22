import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    occupation: "",
    gender: "",
    languages: [],
  });

  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const onChangeHandler = (event) => {
    const { name, value, type, checked } = event.target;

    if (name === "languages") {
      // Handle language checkbox changes
      let updatedLanguages = [...formData.languages];
      if (checked) {
        updatedLanguages.push(value);
      } else {
        updatedLanguages = updatedLanguages.filter((lang) => lang !== value);
      }
      setFormData({ ...formData, languages: updatedLanguages });
    } else if (type === "radio") {
      // Handle radio button changes
      setFormData({ ...formData, [name]: value });
    } else {
      // Handle other form fields
      setFormData({ ...formData, [name]: value });
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.table(formData); // Show form data in a table format in the console
    setSuccessMessage("Form submitted successfully!"); // Set success message
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            className="form-control"
            name="userName"
            value={formData.userName} // Controlled input value
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            name="email"
            value={formData.email} // Controlled input value
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="occupation" className="form-label">
            Occupation
          </label>
          <select
            name="occupation"
            className="form-select"
            value={formData.occupation} // Controlled select value
            onChange={onChangeHandler}
          >
            <option value="">Select</option>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"} // Controlled radio checked state
              onChange={onChangeHandler}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"} // Controlled radio checked state
              onChange={onChangeHandler}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === "other"} // Controlled radio checked state
              onChange={onChangeHandler}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="languages" className="form-label">
            Languages
          </label>
          <div>
            <input
              type="checkbox"
              name="languages"
              value="html"
              checked={formData.languages.includes("html")} // Controlled checkbox checked state
              onChange={onChangeHandler}
            />
            <label htmlFor="html">HTML</label>

            <input
              type="checkbox"
              name="languages"
              value="css"
              checked={formData.languages.includes("css")} // Controlled checkbox checked state
              onChange={onChangeHandler}
            />
            <label htmlFor="css">CSS</label>

            <input
              type="checkbox"
              name="languages"
              value="javascript"
              checked={formData.languages.includes("javascript")} // Controlled checkbox checked state
              onChange={onChangeHandler}
            />
            <label htmlFor="javascript">Javascript</label>
          </div>
        </div>
        <div className="form-group">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
      {successMessage && <p>{successMessage}</p>}{" "}
      {/* Conditionally render success message */}
    </div>
  );
}

export default App;
