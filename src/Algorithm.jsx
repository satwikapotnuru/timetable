import React from "react";

function Algorithm(subjects) {
  const courses = subjects["subjects"];
  let AvailbleTimings = {};
  // const isOpenElectiveEntered = subjects["isOpenElectiveEntered"];
  // const setisOpenElectiveEntered = subjects["setisOpenElectiveEntered"];
  const randompicker = subjects["randompicker"];
  const setcount = subjects["setcount"];
  const setsections = subjects["setsections"];
  const setisfacultyalloted = subjects["setisfacultyalloted"];
  const setissectionalloted = subjects["setissectionalloted"];
  const setfacultyarraytable = subjects["setfacultyarraytable"];
  const settableofsubjects = subjects["settableofsubjects"];
  const setissubjectsallocated = subjects["setissubjectsallocated"];
  const setdisplayingtimetable = subjects["setdisplayingtimetable"];
  const setsubjects = subjects["setsubjects"];
  const sections = subjects["sections"];
  const faculty = subjects["faculty"];
  const sectiontimings = subjects["sectiontimings"];
  const setsectiontimings = subjects["setsectiontimings"];
  const facultytimings = subjects["facultytimings"];
  const tempfactimings = { ...facultytimings };
  const setfacultytimings = subjects["setfacultytimings"];
  const setCollegeTimings = subjects["setCollegeTimings"];
  // const CollegeSubjects = subjects["CollegeSubjects"];
  //const LowerTableData = subjects["LowerTableData"];
  const setCollegeSubjects = subjects["setCollegeSubjects"];
  const Branch = subjects["Branch"];
  const setBranch = subjects["setBranch"];
  const Year = subjects["Year"];
  const setYear = subjects["setYear"];
  const setdata = subjects["setdata"];
  //const CollegeTimings = subjects["CollegeTimings"];
  const selectedOption = subjects["selectedOption"];
  const electiveTimings = subjects["electiveTimings"];
  // const setelectiveTimings = subjects["setelectiveTimings"];
  const setissetbuttonClicked = subjects["setissetbuttonClicked"];
  //const setiselectivetabledisplayed = subjects["setiselectivetabledisplayed"];

  console.log("in Algorithm.jsx subjects are", subjects);
  //console.log("in Algorithm.jsx CollegeTimings are", CollegeTimings);
  console.log("in Algorithm.jsx setCollegeTimings are", setCollegeTimings);

  const Timings = [
    1.1, 1.2, 1.4, 1.5, 1.7, 1.8, 1.9, 2.1, 2.2, 2.4, 2.5, 2.7, 2.8, 2.9, 3.1,
    3.2, 3.4, 3.5, 3.7, 3.8, 3.9, 4.1, 4.2, 4.4, 4.5, 4.7, 4.8, 4.9, 5.1, 5.2,
    5.4, 5.5, 5.7, 5.8, 5.9, 6.1, 6.2, 6.4, 6.5,
  ];

  const nonlabtimings = [
    1.2, 1.5, 1.9, 2.2, 2.5, 2.9, 3.2, 3.5, 3.9, 4.2, 4.5, 4.9, 5.2, 5.5, 5.9,
    6.2, 6.5,
  ];

  console.log("The Yearvalue for BSH error is ", Year);
  if (Year === "III" || Year === "IV") {
    const minusoneOE = electiveTimings[Year]["OE"].map((ele) => {
      nonlabtimings.push(parseFloat((ele - 0.1).toFixed(1)));
    });
    const minusonePE = electiveTimings[Year]["PE"].map((ele) => {
      nonlabtimings.push(parseFloat((ele - 0.1).toFixed(1)));
    });
  }

  function handleAllocation(e) {
    if (Year === "III" || Year === "IV") {
      console.log("Elective timings in algorithm.jsx is ", electiveTimings);

      for (const j of sections) {
        AvailbleTimings[j] = Timings.filter(
          (ele) =>
            !electiveTimings[Year]["OE"].includes(ele) &&
            !electiveTimings[Year]["PE"].includes(ele)
        );
        console.log("Availble timings after filter is ", AvailbleTimings[j]);
      }
    }

    if (Year === "BSH" || Year === "II") {
      for (const j of sections) {
        AvailbleTimings[j] = Timings;
      }
    }

    console.log("non lab timings is ", nonlabtimings);
    console.log("The sections in Algorithm.jsx is", sections);
    console.log("The courses in Algorithm.jsx is", courses);
    console.log("The faculty in Algorithm.jsx is", faculty);
    console.log("The sectiontimings in Algorithm.jsx is", sectiontimings);
    console.log("The facultytimings in Algorithm.jsx is", facultytimings);

    //for PE

    for (const s of sections) {
      for (const [facultyName, facultyArray] of Object.entries(faculty)) {
        for (let i = 0; i < facultyArray.length; i++) {
          if (facultyArray[i][1] === s && facultyArray[i][2] === "PE") {
            let k = 0;
            while (k < 3) {
              let temp = electiveTimings[Year]["PE"][k];
              console.log("electiveTimings is ", electiveTimings);
              console.log(
                "electiveTimings[Year][PE][k] ",
                electiveTimings[Year]["PE"][k]
              );
              let newArrayy = [];
              let p = [];
              p.push(temp);
              newArrayy["timings"] = p;
              newArrayy["subject"] = facultyArray[i][0];
              newArrayy["subjectcode"] = courses[facultyArray[i][0]][2];
              newArrayy["section"] = s;
              newArrayy["Branch"] = Branch;
              newArrayy["Year"] = Year;

              tempfactimings[facultyName].push(newArrayy);
              console.log("newArray2 is", [...newArrayy]);
              console.log("tempfactimings is", tempfactimings);
              k = k + 1;
              let newArray = [];
              newArray.push(temp);
              newArray.push(facultyArray[i][0]);
              newArray.push(facultyName);
              newArray.push(courses[facultyArray[i][0]][2]);
              sectiontimings[s].push(newArray);
            }
          }
        }
      }
    }
    //for OE

    for (const s of sections) {
      for (const [facultyName, facultyArray] of Object.entries(faculty)) {
        for (let i = 0; i < facultyArray.length; i++) {
          if (facultyArray[i][1] === s && facultyArray[i][2] === "OE") {
            let k = 0;
            while (k < 3) {
              let temp = electiveTimings[Year]["OE"][k];
              console.log("electiveTimings is ", electiveTimings);
              console.log(
                "electiveTimings[Year][OE][k] ",
                electiveTimings[Year]["OE"][k]
              );
              let newArrayy = [];
              let p = [];
              p.push(temp);
              newArrayy["timings"] = p;
              newArrayy["subject"] = facultyArray[i][0];
              newArrayy["subjectcode"] = courses[facultyArray[i][0]][2];
              newArrayy["section"] = s;
              newArrayy["Branch"] = Branch;
              newArrayy["Year"] = Year;

              tempfactimings[facultyName].push(newArrayy);
              console.log("newArray2 is", [...newArrayy]);
              console.log("tempfactimings is", tempfactimings);
              k = k + 1;
              let newArray = [];
              newArray.push(temp);
              newArray.push(facultyArray[i][0]);
              newArray.push(facultyName);
              newArray.push(courses[facultyArray[i][0]][2]);
              sectiontimings[s].push(newArray);
            }
          }
        }
      }
    }
    //for labs
    for (const s of sections) {
      for (const [facultyName, facultyArray] of Object.entries(faculty)) {
        console.log("facultyname in Algorithm", facultyName);
        console.log("facultyArray in Algorithm", facultyArray);
        for (let i = 0; i < facultyArray.length; i++) {
          if (
            facultyArray[i][1] === s &&
            !facultyArray[i][2] &&
            courses[facultyArray[i][0]][0] === 2
          ) {
            let p = 0;
            console.log("Allocation of lab", facultyArray[i][0]);
            while (p < 1) {
              let temp = randompicker(AvailbleTimings[s]);
              if (!nonlabtimings.includes(temp)) {
                let z = 0;
                while (z < 2) {
                  let newArray2 = [];
                  let k = [];
                  k.push(temp);
                  //k.push(parseFloat((temp + 0.1).toFixed(1)));
                  newArray2["timings"] = k;
                  newArray2["subject"] = facultyArray[i][0];
                  newArray2["subjectcode"] = courses[facultyArray[i][0]][2];
                  newArray2["section"] = s;
                  newArray2["Branch"] = Branch;
                  newArray2["Year"] = Year;

                  console.log("Allocation of lab done ", facultyArray[i][0]);

                  tempfactimings[facultyName].push(newArray2);
                  console.log("newArray2 is", [...newArray2]);
                  console.log("tempfactimings is", tempfactimings);
                  let newArray = [];
                  newArray.push(temp);
                  newArray.push(facultyArray[i][0]);
                  newArray.push(facultyName);
                  newArray.push(courses[facultyArray[i][0]][2]);
                  sectiontimings[s].push(newArray);
                  temp = parseFloat((temp + 0.1).toFixed(1));
                  z = z + 1;
                }
                console.log("temp is ", temp);
                AvailbleTimings[s] = AvailbleTimings[s].filter(
                  (el) => el !== parseFloat((temp - 0.1).toFixed(1))
                );

                console.log(
                  "availbletimings after second lab rmoved is ",
                  AvailbleTimings[s]
                );
                p = p + 1;
              }
            }
          }
        }
      }
    }
    //for classes
    for (const s of sections) {
      console.log("Entered into sections(classes)");
      for (const [facultyName, facultyArray] of Object.entries(faculty)) {
        console.log("Entered into faculty(classes)");
        for (let i = 0; i < facultyArray.length; i++) {
          console.log("facultyArray[i][1] === s", facultyArray[i][1]);
          console.log("sections", s);

          if (
            facultyArray[i][1] === s &&
            !facultyArray[i][2] &&
            courses[facultyArray[i][0]][0] === 1
          ) {
            if (
              courses[facultyArray[i][0]][1] === 4 ||
              courses[facultyArray[i][0]][1] === 3
            ) {
              let k = 0;
              while (k < courses[facultyArray[i][0]][1]) {
                let temp = randompicker(AvailbleTimings[s]);
                let tempfacultyArray = facultytimings[facultyName].map((ele) =>
                  ele["subject"] === facultyArray[i][0]
                    ? Math.floor(ele["timings"][0])
                    : undefined
                );

                if (!tempfacultyArray.includes(Math.floor(temp))) {
                  let newArray2 = [];
                  let p = [];
                  p.push(temp);
                  newArray2["timings"] = p;
                  newArray2["subject"] = facultyArray[i][0];
                  newArray2["subjectcode"] = courses[facultyArray[i][0]][2];
                  newArray2["section"] = s;
                  newArray2["Branch"] = Branch;
                  newArray2["Year"] = Year;

                  tempfactimings[facultyName].push(newArray2);
                  console.log("newArray2 is", [...newArray2]);
                  console.log("tempfactimings is", tempfactimings);
                  k = k + 1;

                  let newArray = [];
                  newArray.push(temp);
                  newArray.push(facultyArray[i][0]);
                  newArray.push(facultyName);
                  newArray.push(courses[facultyArray[i][0]][2]);
                  sectiontimings[s].push(newArray);
                } else {
                  AvailbleTimings[s].push(temp);
                }
              }
            }
            if (courses[facultyArray[i][0]][1] === 1) {
              let temp = randompicker(AvailbleTimings[s]);

              let newArray2 = [];
              let p = [];
              p.push(temp);
              newArray2["timings"] = p;
              newArray2["subject"] = facultyArray[i][0];
              newArray2["subjectcode"] = courses[facultyArray[i][0]][2];
              newArray2["section"] = s;
              newArray2["Branch"] = Branch;
              newArray2["Year"] = Year;

              tempfactimings[facultyName].push(newArray2);
              console.log("newArray2 is", [...newArray2]);
              console.log("tempfactimings is", tempfactimings);
              let newArray = [];
              newArray.push(temp);
              newArray.push(facultyArray[i][0]);
              newArray.push(facultyName);
              newArray.push(courses[facultyArray[i][0]][2]);
              sectiontimings[s].push(newArray);
            }
          }
        }
      }
    }

    console.log(facultytimings);
    console.log(sectiontimings);
    console.log("Selected Option is", selectedOption["branch"]);
    if (selectedOption["branch"] === "BSH") {
      setCollegeTimings((prevtimings) => {
        const temporary = { ...prevtimings };
        temporary["BSH"] = sectiontimings;
        return temporary;
      });
      setCollegeSubjects((prevSubjects) => {
        const tempsub = prevSubjects;
        tempsub["BSH"] = courses;
        return tempsub;
      });
    } else {
      setCollegeTimings((prevTimings) => {
        const TempTimings = { ...prevTimings };
        TempTimings[Branch][Year] = sectiontimings;
        return TempTimings;
      });

      setCollegeSubjects((prevSubjects) => {
        const tempSubjects = prevSubjects;
        tempSubjects[Branch][Year] = courses;
        return tempSubjects;
      });
      setfacultytimings((prevvalues) => {
        prevvalues = { ...tempfactimings };
        return prevvalues;
      });
    }

    setsectiontimings({});
    setsubjects({});
    if (selectedOption["branch"] === "BSH") {
      setcount(0);
      setsections([]);
      setisfacultyalloted((el) => !el);
      setissectionalloted((el) => !el);
      setfacultyarraytable([]);
      setsubjects({});
      settableofsubjects([]);
      setissubjectsallocated((el) => !el);
      setdisplayingtimetable((el) => !el);
    } else {
      setdata((el) => !el);
      setBranch("");
      setYear("");
      setcount(0);
      setsections([]);
      setisfacultyalloted((el) => !el);
      setissectionalloted((el) => !el);
      setfacultyarraytable([]);
      setsubjects({});
      settableofsubjects([]);
      setissubjectsallocated((el) => !el);
      setdisplayingtimetable((el) => !el);
      // setiselectivetabledisplayed((el) => !el);
      setissetbuttonClicked(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={(e) => {
          handleAllocation(e);
        }}
      >
        Allocate
      </button>
    </div>
  );
}
export default Algorithm;
