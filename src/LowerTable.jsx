function LowerTable({
  Branch,
  Year,
  LowerTableData,
  section,
  selectedOption,
  setselectedOption,
}) {
  // Check if LowerTableData and its nested levels are defined
  console.log("LowerTableData in LowerTable", LowerTableData);
  if (selectedOption["branch"] !== "BSH") {
    if (
      !LowerTableData ||
      !LowerTableData[Branch] ||
      !LowerTableData[Branch][Year] ||
      !LowerTableData[Branch][Year][section]
    ) {
      return <div>No data available</div>;
    }
  }
  if (selectedOption["branch"] === "BSH") {
    if (
      !LowerTableData ||
      !LowerTableData["BSH"] ||
      !LowerTableData["BSH"][section]
    ) {
      return <div>No data available</div>;
    }
  }

  return (
    <table id={`lowertable-${section}`} border="1">
      <thead>
        <tr>
          <th>S.NO</th>
          <th>Course Code</th>
          <th>Course Title</th>
          <th>Faculty</th>
        </tr>
      </thead>
      <tbody>
        {console.log(
          "The selectedOption[branch] in lower table is ",
          selectedOption["branch"]
        )}
        {selectedOption["branch"] === "BSH" &&
          Object.entries(LowerTableData["BSH"][section]).map(
            ([courseTitle, faculty], index) => (
              <tr key={courseTitle}>
                <td>{index + 1}</td>
                <td>{faculty[1]}</td>
                <td>{courseTitle}</td>
                <td>{faculty[0]}</td>
              </tr>
            )
          )}
        {selectedOption["branch"] !== "BSH" &&
          Object.entries(LowerTableData[Branch][Year][section]).map(
            ([courseTitle, faculty], index) => (
              <tr key={courseTitle}>
                <td>{index + 1}</td>
                <td>{faculty[1]}</td>
                <td>{courseTitle}</td>
                <td>{faculty[0]}</td>
              </tr>
            )
          )}
      </tbody>
    </table>
  );
}

export default LowerTable;
