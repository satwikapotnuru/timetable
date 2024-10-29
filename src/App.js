import React, { useState, useEffect } from "react";
import Sectionrendering from "./Sectionrendering";
import Subjects from "./Subjects";
import Subjectstable from "./Subjectstable";
import Facultyrendering from "./Facultyrendering";
import Algorithm from "./Algorithm";
import Facultytable from "./Facultytable";
import "./App.css";

function App({
  randompicker,
  facultytimings,
  setfacultytimings,
  CollegeTimings,
  setCollegeTimings,
  Branch,
  Year,
  setissetbuttonClicked,
  setiselectivetabledisplayed,
  CollegeSubjects,
  setCollegeSubjects,
  setBranch,
  setYear,
  setdata,
  LowerTableData,
  setLowerTableData,
  selectedOption,
  setselectedOption,
  isOpenElectiveEntered,
  setisOpenElectiveEntered,
  electiveTimings,
  setelectiveTimings,
}) {
  const [count, setcount] = useState(0);
  const [sections, setsections] = useState([]);
  const [isfacultyalloted, setisfacultyalloted] = useState(false);
  const [issectionallotted, setissectionalloted] = useState(false);
  const [facultyarraytable, setfacultyarraytable] = useState([]);
  console.log("Bran is", Branch);
  const [subjects, setsubjects] = useState(() => {
    if (Branch !== undefined) {
      return { ...CollegeSubjects[Branch][Year] };
    } else {
      return { ...CollegeSubjects["BSH"] };
    }
  });

  console.log("Subjects in App.js after openelective added", subjects);
  const [tableofsubjects, settableofsubjects] = useState([]);
  const [issubjectsallocated, setissubjectsallocated] = useState(false);
  const [faculty, setfaculty] = useState({});
  const [sectiontimings, setsectiontimings] = useState({});
  const [displayingtimetable, setdisplayingtimetable] = useState(false);

  const handleCount = (e, statefunction, string) => {
    e.preventDefault();
    const value = parseInt(document.getElementById(`${string}`).value, 10);
    if (!isNaN(value) && value > 0) {
      statefunction(value);
    } else {
      alert("Please enter a valid positive number.");
    }
  };

  useEffect(() => {
    setsections(Array.from({ length: count }, () => ""));
  }, [count]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="sectioncount">Number of sections:</label>
      <input type="number" id="sectioncount" required min="1" />
      <button onClick={(e) => handleCount(e, setcount, "sectioncount")}>
        Set
      </button>
      {count ? (
        <Sectionrendering
          sections={sections}
          setsections={setsections}
          setissectionalloted={setissectionalloted}
          sectiontimings={sectiontimings}
          setsectiontimings={setsectiontimings}
        />
      ) : null}
      {issectionallotted && (
        <Subjectstable
          settableofsubjects={settableofsubjects}
          tableofsubjects={tableofsubjects}
          setsubjects={setsubjects}
        />
      )}
      {issectionallotted && (
        <Subjects
          subjects={subjects}
          setsubjects={setsubjects}
          handleCount={handleCount}
          issectionallotted={issectionallotted}
          settableofsubjects={settableofsubjects}
          setissubjectsallocated={setissubjectsallocated}
        />
      )}
      {isfacultyalloted && (
        <Facultytable
          facultyarraytable={facultyarraytable}
          setfacultyarraytable={setfacultyarraytable}
          faculty={faculty}
          setfaculty={setfaculty}
          facultytimings={facultytimings}
          setfacultytimings={setfacultytimings}
        />
      )}
      {issubjectsallocated && (
        <Facultyrendering
          randompicker={randompicker}
          setfaculty={setfaculty}
          facultyarraytable={facultyarraytable}
          electiveTimings={electiveTimings}
          setelectiveTimings={setelectiveTimings}
          subjects={subjects}
          sections={sections}
          faculty={faculty}
          setfacultytimings={setfacultytimings}
          facultytimings={facultytimings}
          setdisplayingtimetable={setdisplayingtimetable}
          displayingtimetable={displayingtimetable}
          setfacultyarraytable={setfacultyarraytable}
          issubjectsallocated={issubjectsallocated}
          setisfacultyalloted={setisfacultyalloted}
          LowerTableData={LowerTableData}
          setLowerTableData={setLowerTableData}
          Branch={Branch}
          Year={Year}
          isOpenElectiveEntered={isOpenElectiveEntered}
          selectedOption={selectedOption}
          setselectedOption={setselectedOption}
        />
      )}
      {displayingtimetable && (
        <Algorithm
          subjects={subjects}
          setiselectivetabledisplayed={setiselectivetabledisplayed}
          setissetbuttonClicked={setissetbuttonClicked}
          setsubjects={setsubjects}
          sections={sections}
          faculty={faculty}
          facultytimings={facultytimings}
          setfacultytimings={setfacultytimings}
          sectiontimings={sectiontimings}
          setsectiontimings={setsectiontimings}
          setdisplayingtimetable={setdisplayingtimetable}
          displayingtimetable={displayingtimetable}
          CollegeTimings={CollegeTimings}
          setCollegeTimings={setCollegeTimings}
          Branch={Branch}
          Year={Year}
          CollegeSubjects={CollegeSubjects}
          setCollegeSubjects={setCollegeSubjects}
          setcount={setcount}
          setsections={setsections}
          setisfacultyalloted={setisfacultyalloted}
          setissectionalloted={setissectionalloted}
          setfacultyarraytable={setfacultyarraytable}
          settableofsubjects={settableofsubjects}
          setissubjectsallocated={setissubjectsallocated}
          setfaculty={setfaculty}
          setBranch={setBranch}
          setYear={setYear}
          setdata={setdata}
          selectedOption={selectedOption}
          setselectedOption={setselectedOption}
          isOpenElectiveEntered={isOpenElectiveEntered}
          setisOpenElectiveEntered={setisOpenElectiveEntered}
          electiveTimings={electiveTimings}
          setelectiveTimings={setelectiveTimings}
          LowerTableData={LowerTableData}
          randompicker={randompicker}
        />
      )}
    </form>
  );
}

export default App;
