import { useState } from "react";

function Subjectstable({ tableofsubjects, settableofsubjects, setsubjects }) {
  const [error, setError] = useState("");

  function handleDelete(e, value) {
    e.preventDefault();
    settableofsubjects(tableofsubjects.filter((ele) => ele[0] !== value));
    setsubjects((prevsubjects) => {
      const updatedSubjects = { ...prevsubjects };
      delete updatedSubjects[value];
      return updatedSubjects;
    });
  }

  function validateBeforeDelete(e, value) {
    e.preventDefault();
    // Check if subject exists in tableofsubjects
    const subjectExists = tableofsubjects.some((ele) => ele[0] === value);
    if (!subjectExists) {
      setError("Subject not found in table.");
    } else {
      handleDelete(e, value);
      setError("");
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>SubjectCode</th>
            <th>Duration</th>
            <th>Occurences</th>
          </tr>
        </thead>
        <tbody>
          {tableofsubjects.map((ele, index) => (
            <tr key={index}>
              <td>{ele[0]}</td>
              <td>{ele[3]}</td>
              <td>{ele[1]}</td>
              <td>{ele[2]}</td>
              <td>
                <button onClick={(e) => validateBeforeDelete(e, ele[0])}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Subjectstable;
