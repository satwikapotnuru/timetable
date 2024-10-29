import React, { useState } from "react";
import Header from "./Header";
import InfoTable from "./InfoTable";

function BranchTimeTable({
  CollegeTimings,
  setCollegeTimings,
  LowerTableData,
  setLowerTableData,
  selectedOption,
  setselectedOption,
}) {
  const names = ["CSE", "ECE", "EEE", "IT", "CIVIL", "MECH"];
  const Yearss = ["II", "III", "IV"];
  const [Branchh, setBranchh] = useState("");
  const [Yearr, setYearr] = useState("");
  const [todisplay, settodisplay] = useState(false);

  function handletodisplay(e) {
    e.preventDefault();
    // Check if both branch and year are selected
    if (Branchh && Yearr) {
      settodisplay(true);
    } else {
      alert("Please select both branch and year.");
    }
  }

  function handleBranchChange(branch) {
    setBranchh(branch);
    // Reset to not display InfoTable when branch changes
    settodisplay(false);
  }

  function handleYearChange(year) {
    setYearr(year);
    // Reset to not display InfoTable when year changes
    settodisplay(false);
  }

  return (
    <>
      <Header />
      <div>
        <label htmlFor="branch">Select Branch:</label>
        <select
          name="branch"
          id="branch"
          value={Branchh}
          onChange={(e) => handleBranchChange(e.target.value)}
        >
          <option value="">Select Branch</option>
          {names.map((ele) => (
            <option key={ele} value={ele}>
              {ele}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="year">Select Year:</label>
        <select
          name="year"
          id="year"
          value={Yearr}
          onChange={(e) => handleYearChange(e.target.value)}
        >
          <option value="">Select Year</option>
          {Yearss.map((ele) => (
            <option key={ele} value={ele}>
              {ele}
            </option>
          ))}
        </select>
        <br />
        <button type="button" onClick={(e) => handletodisplay(e)}>
          Display
        </button>
      </div>

      {todisplay &&
        Branchh &&
        Yearr &&
        CollegeTimings[Branchh] &&
        CollegeTimings[Branchh][Yearr] && (
          <InfoTable
            data={CollegeTimings[Branchh][Yearr]}
            branch={Branchh}
            year={Yearr}
            LowerTableData={LowerTableData}
            setLowerTableData={setLowerTableData}
            selectedOption={selectedOption}
            setselectedOption={setselectedOption}
          />
        )}
    </>
  );
}

export default BranchTimeTable;
