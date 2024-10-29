import Header from "./Header";
import * as XLSX from "xlsx";

function FacultyTimeTable({ facultytimings }) {
  const weeks1 = ["MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  const Suffix1 = [".1", ".2", ".3", ".4", ".5", ".6", ".7", ".8", ".9"];
  const correspondings1 = {
    MON: "1",
    TUE: "2",
    WED: "3",
    THUR: "4",
    FRI: "5",
    SAT: "6",
  };
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new(); // Create a new workbook

    Object.entries(facultytimings).forEach(([facultyName, facultyData]) => {
      const ws = XLSX.utils.aoa_to_sheet([]); // Create a new worksheet

      // Collect section data
      const sectionDataArray = [];
      const tableElement = document.getElementById(`firsttable-${facultyName}`);
      if (!tableElement) {
        console.error(
          `Main table element not found for section: ${facultyName}`
        );
        return; // Skip processing this section
      }
      const tableRows = tableElement.querySelectorAll("tr");
      tableRows.forEach((row) => {
        const rowData = [];
        row.querySelectorAll("th, td").forEach((cell) => {
          rowData.push(cell.textContent);
        });
        sectionDataArray.push(rowData);
      });

      // Collect lower table data
      const lowerTableDataArray = [];
      const lowerTableElement = document.getElementById(
        `secondtable-${facultyName}`
      );
      if (lowerTableElement) {
        const lowerTableRows = lowerTableElement.querySelectorAll("tr");
        lowerTableRows.forEach((row) => {
          const rowData = [];
          row.querySelectorAll("th, td").forEach((cell) => {
            rowData.push(cell.textContent);
          });
          lowerTableDataArray.push(rowData);
        });
      }

      // Combine section data and lower table data
      const combinedData = [...sectionDataArray, ...lowerTableDataArray];
      console.log("combined data", combinedData);
      // Add combined data to the worksheet
      XLSX.utils.sheet_add_aoa(ws, combinedData, { origin: "A1" });

      // Append the worksheet to the workbook
      XLSX.utils.book_append_sheet(wb, ws, facultyName);
    });

    // Write the workbook to a file
    XLSX.writeFile(wb, "faculty_timetable.xlsx");
  };

  if (!facultytimings || Object.keys(facultytimings).length === 0) {
    return (
      <>
        <Header />
        <p>No data available</p>
      </>
    );
  }

  return (
    <>
      <Header />
      <div id="facultytimetable">
        {Object.entries(facultytimings).map(
          ([facultyName, facultyData], index) => (
            <section key={index}>
              <h3>CLASS TIME TABLE</h3>
              <br />
              <label>Department: BSH</label>
              <br />
              <label>Academic Year: 2023-24</label>
              <br />
              <label>FacultyName: {facultyName}</label>
              <table id={`firsttable-${facultyName}`} key={index} border="1">
                <thead>
                  <tr>
                    <th>Timing</th>
                    <th>9:00 AM to 10:00 AM</th>
                    <th>10:00 AM to 11:00 AM</th>
                    <th>11:00 AM to 11:10 AM</th>
                    <th>11:10 AM to 12:10 PM</th>
                    <th>12:10 PM to 1:10 PM</th>
                    <th>1:10 PM to 2:00 PM</th>
                    <th>2:00 PM to 3:00 PM</th>
                    <th>3:00 PM to 4:00 PM</th>
                    <th>4:00 PM to 5:00 PM</th>
                  </tr>
                </thead>
                <tbody>
                  {weeks1.map((day) => (
                    <tr key={day}>
                      <td>{day}</td>
                      {Suffix1.map((suffix) => {
                        const suffixValue = correspondings1[day] + suffix;
                        if (suffixValue.endsWith(".3")) {
                          return (
                            <td key={suffix}>
                              <p>Break</p>
                            </td>
                          );
                        } else if (suffixValue.endsWith(".6")) {
                          return (
                            <td key={suffix}>
                              <p>Lunch</p>
                            </td>
                          );
                        } else {
                          const filteredData = facultyData.filter(
                            (element) =>
                              suffixValue === element["timings"].toString()
                          );
                          return (
                            <td key={suffix}>
                              {filteredData.length > 0
                                ? `${filteredData[0]["subjectcode"]}/${filteredData[0]["section"]}/${filteredData[0]["Branch"]}/${filteredData[0]["Year"]} `
                                : null}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>

              <table
                id={`secondtable-${facultyName}`}
                key={`${index}-subjects`}
              >
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Subject Code</th>
                    <th>Subject Name</th>
                    <th>Branch</th>
                    <th>Year</th>
                    <th>Section</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ...new Set(facultyData.map((item) => item.subjectcode)),
                  ].map((subjectCode, idx) => {
                    const subjectData = facultyData.find(
                      (item) => item.subjectcode === subjectCode
                    );
                    return (
                      <tr key={idx}>
                        <td>*</td>
                        <td>{subjectData.subjectcode}</td>
                        <td>{subjectData.subject}</td>
                        <td>{subjectData.Branch}</td>
                        <td>{subjectData.Year}</td>
                        <td>{subjectData.section}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          )
        )}
      </div>
      <button onClick={exportToExcel}>Export to Excel</button>
    </>
  );
}

export default FacultyTimeTable;
