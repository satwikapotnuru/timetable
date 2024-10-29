import App from "./App";
import Header from "./Header";
function Bsh({
  CollegeTimings,
  setCollegeTimings,
  facultytimings,
  setfacultytimings,
  CollegeSubjects,
  setCollegeSubjects,
  selectedOption,
  setselectedOption,
  LowerTableData,
  setLowerTableData,
  randompicker,
}) {
  return (
    <div>
      <Header />
      <App
        CollegeTimings={CollegeTimings}
        setCollegeTimings={setCollegeTimings}
        facultytimings={facultytimings}
        setfacultytimings={setfacultytimings}
        CollegeSubjects={CollegeSubjects}
        setCollegeSubjects={setCollegeSubjects}
        selectedOption={selectedOption}
        setselectedOption={setselectedOption}
        LowerTableData={LowerTableData}
        setLowerTableData={setLowerTableData}
        randompicker={randompicker}
        Year="BSH"
      />
    </div>
  );
}

export default Bsh;
