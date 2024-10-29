import { useState, useEffect } from "react";
import App from "./App";
import Header from "./Header";
import ElectiveTable from "./ElectiveTable";
function Branch({
  randompicker,
  electiveTableData,
  setelectiveTableData,
  data,
  setdata,
  iselectivetabledisplayed,
  setiselectivetabledisplayed,
  CollegeTimings,
  setCollegeTimings,
  facultytimings,
  setfacultytimings,
  CollegeSubjects,
  setCollegeSubjects,
  LowerTableData,
  setLowerTableData,
  selectedOption,
  setselectedOption,
  isOpenElectiveEntered,
  setisOpenElectiveEntered,
  electiveTimings,
  setelectiveTimings,
}) {
  const Branchnames = ["CSE", "ECE", "EEE", "IT", "CIVIL", "MECH"];
  const Years = ["II", "III", "IV"];
  const [Branch, setBranch] = useState("");
  const [Year, setYear] = useState("");
  // const [data, setdata] = useState(false);
  const [electiveName, setelectiveName] = useState("");
  const [electiveNameCode, setelectiveNameCode] = useState("");
  const [electiveDuration, setelectiveDuration] = useState(null);
  const [electiveOccurences, setelectiveOccurences] = useState(null);
  const [electiveBranch, setelectiveBranch] = useState("");
  const [electivetype, setelectivetype] = useState("");
  const [electiveYear, setelectiveYear] = useState("");
  // const [electiveTableData, setelectiveTableData] = useState([]);
  // const [iselectivetabledisplayed, setiselectivetabledisplayed] =
  //   useState(false);
  const [issetbuttonClicked, setissetbuttonClicked] = useState(false);
  console.log("in Branch.jsx CollegeTimings are", CollegeTimings);
  console.log("in Branch.jsx setCollegeTimings are", setCollegeTimings);
  useEffect(
    function () {
      console.log("Year is ", Year);
      console.log("issetbuttonClicked", issetbuttonClicked);
      console.log("iselectivetabledisplayed ", iselectivetabledisplayed);
      console.log("data is ", data);
      console.log("isOpenElectiveEntered", isOpenElectiveEntered);
    },
    [
      Year,
      issetbuttonClicked,
      iselectivetabledisplayed,
      data,
      isOpenElectiveEntered,
    ]
  );
  useEffect(
    function () {
      console.log("elective table data in Branch.jsx is", electiveTableData);
    },
    [electiveTableData]
  );
  function handleElectiveAdd(e) {
    e.preventDefault();
    setiselectivetabledisplayed(true);

    setelectiveTableData((prevData) => {
      const tempData = [...prevData];
      let anArray = [
        electiveName,
        electiveNameCode,
        electiveDuration,
        electiveOccurences,
        electiveBranch,
        Year,
      ];
      console.log("anArray is ", anArray);
      tempData.push(anArray);
      console.log("tempData is ", tempData);
      return tempData;
    });
    setCollegeSubjects((prevSubjects) => {
      const tempSubjects = { ...prevSubjects };
      tempSubjects[electiveBranch][Year][electiveName] = [
        electiveDuration,
        electiveOccurences,
        electiveNameCode,
        electivetype,
      ];
      return tempSubjects;
    });
    setelectiveBranch("");
    setelectiveName("");
    setelectiveNameCode("");
    setelectiveDuration(null);
    setelectiveOccurences(null);
    setelectiveBranch("");
    setelectivetype("");
  }
  function handleElectiveFinish(e) {
    e.preventDefault();
    setisOpenElectiveEntered(true);
    setdata(true);
  }

  function handleSetdata(e) {
    e.preventDefault();
    setissetbuttonClicked(true);

    if (Year === "II") {
      setdata(true);
    }
    if (isOpenElectiveEntered) {
      setdata(true);
    }
  }
  return (
    <>
      <Header />

      {!data && (
        <div>
          <label htmlFor="branch">Select Branch:</label>
          <select
            name="branch"
            id="branch"
            value={Branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            <option value="">Select Branch</option>
            {Branchnames.map((ele) => (
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
            value={Year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Select Year</option>
            {Years.map((ele) => (
              <option key={ele} value={ele}>
                {ele}
              </option>
            ))}
          </select>
          <br />
          <button type="button" onClick={(e) => handleSetdata(e)}>
            Set
          </button>
        </div>
      )}
      {iselectivetabledisplayed && issetbuttonClicked && (
        <ElectiveTable electiveTableData={electiveTableData} />
      )}
      {(Year === "III" || Year === "IV") &&
        issetbuttonClicked &&
        !isOpenElectiveEntered && (
          <div>
            <label htmlFor="electivename">Enter Elective:</label>
            <input
              type="text"
              value={electiveName}
              onChange={(e) => setelectiveName(e.target.value)}
            />
            <label htmlFor="electivenamecode">Enter ElectiveCode:</label>
            <input
              type="text"
              value={electiveNameCode}
              onChange={(e) => setelectiveNameCode(e.target.value)}
            />
            <label htmlFor="duration">Duration:</label>
            <input
              type="number"
              min="1"
              max="3"
              value={electiveDuration}
              onChange={(e) => setelectiveDuration(parseInt(e.target.value))}
            />
            <label htmlFor="occurences">Occurences:</label>
            <input
              type="number"
              min="1"
              max="3"
              value={electiveOccurences}
              onChange={(e) => setelectiveOccurences(parseInt(e.target.value))}
            />
            <label htmlFor="branchname">Select Branch:</label>
            <select
              name="branchname"
              id="branchname"
              value={electiveBranch}
              onChange={(e) => setelectiveBranch(e.target.value)}
            >
              <option value="">Select Branch</option>
              {Branchnames.map((ele) => (
                <option key={ele} value={ele}>
                  {ele}
                </option>
              ))}
            </select>
            <br />
            <label htmlFor="yearname">Year:</label>
            <select name="yearname" id="yearname" value={Year}>
              <option value="">Select Year</option>
              {Years.map((ele) => (
                <option key={ele} value={ele}>
                  {ele}
                </option>
              ))}
            </select>
            <label htmlFor="electivetype">Select Elective Type:</label>
            <select
              name="electivetype"
              id="electivetype"
              value={electivetype}
              onChange={(e) => setelectivetype(e.target.value)}
            >
              <option value="">Select type</option>
              <option value="OE">OE</option>
              <option value="PE">PE</option>
            </select>
            <button onClick={(e) => handleElectiveAdd(e)}>Add</button>
            <button onClick={(e) => handleElectiveFinish(e)}>Finish</button>
          </div>
        )}
      {data && (Year === "II" ? true : iselectivetabledisplayed) && (
        <App
          CollegeTimings={CollegeTimings}
          setCollegeTimings={setCollegeTimings}
          electiveTimings={electiveTimings}
          setelectiveTimings={setelectiveTimings}
          isOpenElectiveEntered={isOpenElectiveEntered}
          setisOpenElectiveEntered={setisOpenElectiveEntered}
          Branch={Branch}
          setBranch={setBranch}
          Year={Year}
          setYear={setYear}
          setdata={setdata}
          facultytimings={facultytimings}
          setfacultytimings={setfacultytimings}
          CollegeSubjects={CollegeSubjects}
          setCollegeSubjects={setCollegeSubjects}
          LowerTableData={LowerTableData}
          setLowerTableData={setLowerTableData}
          selectedOption={selectedOption}
          setselectedOption={setselectedOption}
          setiselectivetabledisplayed={setiselectivetabledisplayed}
          setissetbuttonClicked={setissetbuttonClicked}
          randompicker={randompicker}
        />
      )}
    </>
  );
}

export default Branch;
