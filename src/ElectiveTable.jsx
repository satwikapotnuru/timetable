function ElectiveTable({ electiveTableData }) {
  console.log("elective table data in electivetable is", electiveTableData);
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ElectiveName</th>
          <th>ElectiveCode</th>
          <th>ElectiveDuration</th>
          <th>ElectiveOccurences</th>
          <th>ElectiveBranch</th>
          <th>ElectiveYear</th>
        </tr>
      </thead>
      <tbody>
        {electiveTableData.map((ele) => (
          <tr>
            <td>{ele[0]}</td>
            <td>{ele[1]}</td>
            <td>{ele[2]}</td>
            <td>{ele[3]}</td>
            <td>{ele[4]}</td>
            <td>{ele[5]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ElectiveTable;
