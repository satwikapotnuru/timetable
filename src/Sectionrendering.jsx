import { useEffect, useState } from "react";

function Sectionrendering({
  sections,
  setsections,
  setissectionalloted,
  sectiontimings,
  setsectiontimings,
}) {
  const [error, setError] = useState("");

  function handleSection(index, value) {
    const newsections = [...sections];
    newsections[index] = value;
    setsections(newsections);
    setsectiontimings((prevtimings) => {
      const updatedtimings = { ...prevtimings };
      if (!prevtimings[value]) {
        updatedtimings[value] = [];
      }
      return updatedtimings;
    });
  }

  useEffect(() => {
    console.log("after updating sectiontimings", sectiontimings);
  }, [sectiontimings]);

  function handleAllocation(e, somefunction) {
    e.preventDefault();
    // Check if all sections are filled
    const filledSections = sections.filter((section) => section.trim() !== "");
    if (filledSections.length !== sections.length) {
      setError("Please fill in all section names.");
    } else {
      somefunction(true);
      setError("");
    }
  }

  return (
    <div>
      {sections.map((value, index) => (
        <div key={index}>
          <label>{`Section ${index + 1}:`}</label>
          <input
            type="text"
            value={value}
            onChange={(e) => handleSection(index, e.target.value)}
            required
          />
          <br />
        </div>
      ))}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={(e) => handleAllocation(e, setissectionalloted)}>
        Done
      </button>
    </div>
  );
}

export default Sectionrendering;
