import { useState, useEffect } from "react";
import DeleteData from "./DeleteData";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Bsh from "./Bsh";
import Branch from "./Branch";
import HomePage from "./HomePage";
import SelectTimeTablePage from "./SelectTimeTablePage";
import BranchTimeTable from "./BranchTimeTable";
import AboutPage from "./AboutPage";
import PageNotFound from "./PageNotFound";
import BshTimeTable from "./BshTimeTable";
import FacultyTimeTable from "./FacultyTimeTable";
function Initial() {
  const [selectedOption, setselectedOption] = useState("");
  const [data, setdata] = useState(false);
  const [iselectivetabledisplayed, setiselectivetabledisplayed] =
    useState(false);
  const [electiveTableData, setelectiveTableData] = useState([]);
  const [isOpenElectiveEntered, setisOpenElectiveEntered] = useState(false);
  const [CollegeTimings, setCollegeTimings] = useState({
    BSH: {},
    CSE: { II: {}, III: {}, IV: {} },
    ECE: { II: {}, III: {}, IV: {} },
    IT: { II: {}, III: {}, IV: {} },
    EEE: { II: {}, III: {}, IV: {} },
    MECH: { II: {}, III: {}, IV: {} },
    CIVIL: { II: {}, III: {}, IV: {} },
  });
  const [CollegeSubjects, setCollegeSubjects] = useState({
    BSH: {},
    CSE: { II: {}, III: {}, IV: {} },
    ECE: { II: {}, III: {}, IV: {} },
    IT: { II: {}, III: {}, IV: {} },
    EEE: { II: {}, III: {}, IV: {} },
    MECH: { II: {}, III: {}, IV: {} },
    CIVIL: { II: {}, III: {}, IV: {} },
  });
  const [LowerTableData, setLowerTableData] = useState({
    BSH: {},
    CSE: { II: {}, III: {}, IV: {} },
    ECE: { II: {}, III: {}, IV: {} },
    IT: { II: {}, III: {}, IV: {} },
    EEE: { II: {}, III: {}, IV: {} },
    MECH: { II: {}, III: {}, IV: {} },
    CIVIL: { II: {}, III: {}, IV: {} },
  });
  const [facultytimings, setfacultytimings] = useState({});
  //const [isbuttonClicked, setisbuttonClicked] = useState(false);
  const [electiveTimings, setelectiveTimings] = useState({
    III: { OE: [], PE: [] },
    IV: { OE: [], PE: [] },
  });

  useEffect(() => {
    // Load data from local storage
    const loadedCollegeTimings = localStorage.getItem("CollegeTimings");
    console.log("loadedCollegeTimings", JSON.parse(loadedCollegeTimings));
    const loadedCollegeSubjects = localStorage.getItem("CollegeSubjects");
    console.log("CollegeSubjects", JSON.parse(loadedCollegeSubjects));
    const loadedLowerTableData = localStorage.getItem("LowerTableData");
    console.log("loadedLowerTableData", JSON.parse(loadedLowerTableData));
    const loadedFacultyTimings = localStorage.getItem("facultytimings");
    console.log("loadedFacultyTimings", JSON.parse(loadedFacultyTimings));
    const loadedElectiveTimings = localStorage.getItem("electiveTimings");
    console.log("loadedElectiveTimings", JSON.parse(loadedElectiveTimings));
    const loadedIsOpenElectiveEntered = localStorage.getItem(
      "isOpenElectiveEntered"
    );
    console.log(
      "loadedIsOpenElectiveEntered",
      JSON.parse(loadedIsOpenElectiveEntered)
    );

    // Parse JSON strings into JavaScript objects
    setCollegeTimings(
      JSON.parse(loadedCollegeTimings) || {
        BSH: {},
        CSE: { II: {}, III: {}, IV: {} },
        ECE: { II: {}, III: {}, IV: {} },
        IT: { II: {}, III: {}, IV: {} },
        EEE: { II: {}, III: {}, IV: {} },
        MECH: { II: {}, III: {}, IV: {} },
        CIVIL: { II: {}, III: {}, IV: {} },
      }
    );
    setCollegeSubjects(
      JSON.parse(loadedCollegeSubjects) || {
        BSH: {},
        CSE: { II: {}, III: {}, IV: {} },
        ECE: { II: {}, III: {}, IV: {} },
        IT: { II: {}, III: {}, IV: {} },
        EEE: { II: {}, III: {}, IV: {} },
        MECH: { II: {}, III: {}, IV: {} },
        CIVIL: { II: {}, III: {}, IV: {} },
      }
    );
    setLowerTableData(
      JSON.parse(loadedLowerTableData) || {
        BSH: {},
        CSE: { II: {}, III: {}, IV: {} },
        ECE: { II: {}, III: {}, IV: {} },
        IT: { II: {}, III: {}, IV: {} },
        EEE: { II: {}, III: {}, IV: {} },
        MECH: { II: {}, III: {}, IV: {} },
        CIVIL: { II: {}, III: {}, IV: {} },
      }
    );
    setfacultytimings(JSON.parse(loadedFacultyTimings) || {});
    setelectiveTimings(
      JSON.parse(loadedElectiveTimings) || {
        III: { OE: [], PE: [] },
        IV: { OE: [], PE: [] },
      }
    );
    setisOpenElectiveEntered(JSON.parse(loadedIsOpenElectiveEntered) || false);
  }, []);

  function randompicker(inputArray) {
    if (inputArray.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * inputArray.length);
    const randomNumber = inputArray[randomIndex];
    inputArray.splice(randomIndex, 1);

    for (let i = inputArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
    }

    console.log("The random picker number is ", randomNumber);
    return randomNumber;
  }

  useEffect(
    function () {
      console.log("College Subjects are in initial.jsx", CollegeSubjects);
      console.log("The elective Timings in initial.jsx is ", electiveTimings);
      console.log("facultytimings are in initial.jsx", facultytimings);
      console.log("CollegeTimings are in initial.jsx", CollegeTimings);
    },
    [CollegeSubjects, electiveTimings, CollegeTimings, facultytimings]
  );

  useEffect(() => {
    localStorage.setItem(
      "facultytimings",
      JSON.stringify(facultytimings, (key, value) => {
        // Serialize functions to string
        if (typeof value === "function") {
          return value.toString();
        }
        return value;
      })
    );
  }, [facultytimings]);
  useEffect(
    function () {
      console.log(
        "localStorage.setItem(CollegeTimings, JSON.stringify(CollegeTimings));",
        JSON.stringify(CollegeTimings)
      );
      localStorage.setItem("CollegeTimings", JSON.stringify(CollegeTimings));
      localStorage.setItem(
        "isOpenElectiveEntered",
        JSON.stringify(isOpenElectiveEntered)
      );
      localStorage.setItem("CollegeSubjects", JSON.stringify(CollegeSubjects));
      localStorage.setItem("LowerTableData", JSON.stringify(LowerTableData));
      // console.log(
      //   "localStorage.setItem(facultytimings, JSON.stringify(facultytimings));",
      //   JSON.stringify(facultytimings)
      // );
      // localStorage.setItem("facultytimings", JSON.stringify(facultytimings));
      localStorage.setItem("electiveTimings", JSON.stringify(electiveTimings));
    },
    [
      CollegeSubjects,
      electiveTimings,
      CollegeTimings,
      facultytimings,
      isOpenElectiveEntered,
      LowerTableData,
    ]
  );

  function handleOptionChange(e) {
    setselectedOption(e.target.value);
  }

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/timetable"
              element={<Navigate to="/HomePage" />} // Redirect to HomePage
            />

            <Route
              path="selecttimetablepage"
              element={
                <SelectTimeTablePage
                  CollegeTimings={CollegeTimings}
                  setCollegeTimings={setCollegeTimings}
                />
              }
            />
            <Route
              path="facultytimetable"
              element={
                <FacultyTimeTable
                  facultytimings={facultytimings}
                  selectedOption={selectedOption}
                  setselectedOption={setselectedOption}
                />
              }
            />
            <Route
              path="deletedata"
              element={
                <DeleteData
                  isOpenElectiveEntered={isOpenElectiveEntered}
                  setisOpenElectiveEntered={setisOpenElectiveEntered}
                  setCollegeTimings={setCollegeTimings}
                  CollegeTimings={CollegeTimings}
                  setCollegeSubjects={setCollegeSubjects}
                  CollegeSubjects={CollegeSubjects}
                  setLowerTableData={setLowerTableData}
                  LowerTableData={LowerTableData}
                  setfacultytimings={setfacultytimings}
                  facultytimings={facultytimings}
                  setelectiveTimings={setelectiveTimings}
                  electiveTimings={electiveTimings}
                />
              }
            />
            <Route
              path="bshtimetable"
              element={
                <BshTimeTable
                  CollegeTimings={CollegeTimings}
                  setCollegeTimings={setCollegeTimings}
                  LowerTableData={LowerTableData}
                  setLowerTableData={setLowerTableData}
                  selectedOption={selectedOption}
                  setselectedOption={setselectedOption}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="branchtimetable"
              element={
                <BranchTimeTable
                  CollegeTimings={CollegeTimings}
                  setCollegeTimings={setCollegeTimings}
                  LowerTableData={LowerTableData}
                  setLowerTableData={setLowerTableData}
                  selectedOption={selectedOption}
                  setselectedOption={setselectedOption}
                />
              }
            />
            <Route path="about" element={<AboutPage />} />
            <Route
              path="HomePage"
              element={
                <HomePage
                  setselectedOption={setselectedOption}
                  selectedOption={selectedOption}
                  handleOptionChange={handleOptionChange}
                />
              }
            />
            <Route
              path="BSH"
              element={
                <Bsh
                  selectedOption={selectedOption}
                  setselectedOption={setselectedOption}
                  CollegeTimings={CollegeTimings}
                  setCollegeTimings={setCollegeTimings}
                  facultytimings={facultytimings}
                  setfacultytimings={setfacultytimings}
                  CollegeSubjects={CollegeSubjects}
                  setCollegeSubjects={setCollegeSubjects}
                  LowerTableData={LowerTableData}
                  setLowerTableData={setLowerTableData}
                  randompicker={randompicker}
                />
              }
            />
            <Route
              path="BRANCH"
              element={
                <Branch
                  CollegeTimings={CollegeTimings}
                  data={data}
                  setdata={setdata}
                  iselectivetabledisplayed={iselectivetabledisplayed}
                  setiselectivetabledisplayed={setiselectivetabledisplayed}
                  setCollegeTimings={setCollegeTimings}
                  CollegeSubjects={CollegeSubjects}
                  setCollegeSubjects={setCollegeSubjects}
                  facultytimings={facultytimings}
                  setfacultytimings={setfacultytimings}
                  LowerTableData={LowerTableData}
                  setLowerTableData={setLowerTableData}
                  selectedOption={selectedOption}
                  setselectedOption={setselectedOption}
                  isOpenElectiveEntered={isOpenElectiveEntered}
                  setisOpenElectiveEntered={setisOpenElectiveEntered}
                  electiveTimings={electiveTimings}
                  setelectiveTimings={setelectiveTimings}
                  randompicker={randompicker}
                  electiveTableData={electiveTableData}
                  setelectiveTableData={setelectiveTableData}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <p>Please select to enter data for which of the following</p>
      <div>
        <label>
          <input
            type="radio"
            value="Bsh"
            checked={selectedOption === "Bsh"}
            onChange={(e) => handleOptionChange(e)}
          />
          BSH
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="BRANCH"
            checked={selectedOption === "Branch"}
            onChange={(e) => handleOptionChange(e)}
          />
          BRANCH
        </label>
      </div>

      <Link to={`/${selectedOption}`}>
        <button type="button">Go</button>
      </Link> */}
    </>
  );
}

export default Initial;
