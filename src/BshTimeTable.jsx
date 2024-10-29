import Header from "./Header";
import InfoTable from "./InfoTable";
function BshTimeTable({
  CollegeTimings,
  setCollegeTimings,
  LowerTableData,
  setLowerTableData,
  selectedOption,
  setselectedOption,
}) {
  return (
    <div>
      <InfoTable
        data={CollegeTimings["BSH"]}
        LowerTableData={LowerTableData}
        setLowerTableData={setLowerTableData}
        selectedOption={selectedOption}
        setselectedOption={setselectedOption}
      />
    </div>
  );
}

export default BshTimeTable;
