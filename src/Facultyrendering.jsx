import { useState, useEffect } from "react";

function Facultyrendering({
  randompicker,
  electiveTimings,
  setelectiveTimings,
  isOpenElectiveEntered,
  facultyarraytable,
  setfaculty,
  subjects,
  sections,
  setfacultytimings,
  faculty,
  facultytimings,
  setdisplayingtimetable,
  displayingtimetable,
  issubjectsallocated,
  setfacultyarraytable,
  setisfacultyalloted,
  LowerTableData,
  setLowerTableData,
  Branch,
  Year,
  selectedOption,
  setselectedOption,
}) {
  const [facultyname, setfacultyname] = useState("");
  const [sub, setsub] = useState("");
  const [sec, setsec] = useState("");
  const [isnofaculty, setisnofaculty] = useState(false);
  const [error, setError] = useState("");
  const nonlabtimingss = [
    1.2, 1.5, 1.9, 2.2, 2.5, 2.9, 3.2, 3.5, 3.9, 4.2, 4.5, 4.9, 5.2, 5.5, 5.9,
    6.2, 6.5,
  ];
  let arr1 = [];

  useEffect(() => {
    console.log("After updated", faculty);
    console.log("After updated faculty timings", facultytimings);
    console.log("Faculty Array table is ", facultyarraytable);
  }, [faculty, facultytimings, facultyarraytable]);

  function handleAdd(e) {
    e.preventDefault();
    // Client-side validation
    if (!facultyname || !sub || !sec) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    let newArray = [];
    if (subjects[sub][3]) {
      newArray = [sub, sec, subjects[sub][3]];
    } else {
      newArray = [sub, sec, false];
    }
    //let newArray = [sub, sec];
    setfaculty((prevfaculty) => {
      const updatedFaculty = { ...prevfaculty };
      if (prevfaculty[facultyname]) {
        updatedFaculty[facultyname] = [...prevfaculty[facultyname], newArray];
      } else {
        updatedFaculty[facultyname] = [newArray];
      }
      return updatedFaculty;
    });
    setfacultytimings((prevtimings) => {
      const updatedtimings = { ...prevtimings };
      if (!prevtimings[facultyname]) {
        updatedtimings[facultyname] = [];
      }
      return updatedtimings;
    });
    let newArray5 = [facultyname, sub, sec];
    setfacultyarraytable((prevtable) => [...prevtable, newArray5]);

    // Update LowerTableData
    if (LowerTableData && selectedOption["branch"] !== "BSH") {
      setLowerTableData((prevdata) => {
        const updatedData = { ...prevdata };
        if (!updatedData[Branch]) {
          updatedData[Branch] = {};
        }
        if (!updatedData[Branch][Year]) {
          updatedData[Branch][Year] = {};
        }
        if (!updatedData[Branch][Year][sec]) {
          updatedData[Branch][Year][sec] = {};
        }
        updatedData[Branch][Year][sec][sub] = [facultyname, subjects[sub][2]];
        return updatedData;
      });
    } else {
      setLowerTableData((prevdata) => {
        const updatedData = { ...prevdata };
        if (!updatedData["BSH"]) {
          updatedData["BSH"] = {};
        }
        if (!updatedData["BSH"][sec]) {
          updatedData["BSH"][sec] = {};
        }
        updatedData["BSH"][sec][sub] = [facultyname, subjects[sub][2]];
        return updatedData;
      });
    }

    setisfacultyalloted(true);
    setfacultyname("");
    setsub("");
    setsec("");
  }

  function handleFinish(e) {
    setisnofaculty(!isnofaculty);
    setdisplayingtimetable(!displayingtimetable);

    if (Year === "III" || Year === "IV") {
      //for PE
      if (isOpenElectiveEntered && !electiveTimings[Year]["PE"].length) {
        let duptnonlabtimings = nonlabtimingss;

        while (arr1.length < 3) {
          let temp = randompicker(duptnonlabtimings);
          let temparr1 = arr1.map((ele) =>
            Math.floor(ele) ? Math.floor(ele) : undefined
          );
          if (!temparr1.includes(Math.floor(temp))) {
            arr1.push(temp);
          } else {
            duptnonlabtimings.push(temp);
          }
        }
        // setelectiveTimings((prevElectiveTimings) => {
        //   const updatedPE = prevElectiveTimings[Year].PE || []; // If PE is undefined, assign an empty array
        //   const updatedArr = [...updatedPE, ...arr1];
        //   return {
        //     ...prevElectiveTimings,
        //     [Year]: { PE: updatedArr },
        //   };
        // });

        console.log("arr is ", arr1);
        console.log(
          "Elective Timings[Year][PE] are ",
          electiveTimings[Year]["PE"]
        );
      }
      if (isOpenElectiveEntered && !electiveTimings[Year]["OE"].length) {
        let duptnonlabtimings = nonlabtimingss;

        let arr2 = [];
        while (arr2.length < 3) {
          let temp = randompicker(duptnonlabtimings);
          let temparr2 = arr2.map((ele) =>
            Math.floor(ele) ? Math.floor(ele) : undefined
          );
          if (
            !temparr2.includes(Math.floor(temp)) &&
            (!electiveTimings[Year] ||
              !electiveTimings[Year]["PE"] ||
              !electiveTimings[Year]["PE"].includes(temp))
          ) {
            arr2.push(temp);
          } else {
            duptnonlabtimings.push(temp);
          }
        }
        setelectiveTimings((prevElectiveTimings) => {
          const updatedOE = prevElectiveTimings[Year].OE || [];
          const updatedArray = [...updatedOE, ...arr2];
          const updatedPE = prevElectiveTimings[Year].PE || []; // If PE is undefined, assign an empty array
          const updatedArr = [...updatedPE, ...arr1];
          return {
            ...prevElectiveTimings,
            [Year]: { OE: updatedArray, PE: updatedArr },
          };
        });
        console.log("The arr is ", arr2);
        console.log(
          "electiveTimings[Year][OE] is ",
          electiveTimings[Year]["OE"]
        );
      }
    }
  }

  return (
    <>
      {!isnofaculty && (
        <form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <label htmlFor="facultyname">Faculty Name:</label>
          <input
            type="text"
            id="facultyname"
            value={facultyname}
            onChange={(e) => setfacultyname(e.target.value)}
          />
          <label htmlFor="subject">Select Subject:</label>
          <select
            name="subject"
            id="subject"
            value={sub}
            onChange={(e) => setsub(e.target.value)}
          >
            <option value="">Select Subject</option>
            {Object.keys(subjects).map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          <label htmlFor="section">Select Section:</label>
          <select
            name="section"
            id="section"
            value={sec}
            onChange={(e) => setsec(e.target.value)}
          >
            <option value="">Select Section</option>
            {sections.map((section) => (
              <option key={section} value={section}>
                {section}
              </option>
            ))}
          </select>
          <button type="button" onClick={(e) => handleAdd(e)}>
            Add
          </button>
          <button type="button" onClick={(e) => handleFinish(e)}>
            Finish
          </button>
        </form>
      )}
    </>
  );
}

export default Facultyrendering;
