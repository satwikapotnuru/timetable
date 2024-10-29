import Subjectrendering from "./Subjectrendering";

function Subjects({
  subjects,
  setsubjects,
  settableofsubjects,
  issectionallotted,
  setissubjectsallocated,
}) {
  return (
    <div>
      {issectionallotted && (
        <Subjectrendering
          setsubjects={setsubjects}
          settableofsubjects={settableofsubjects}
          setissubjectsallocated={setissubjectsallocated}
        />
      )}

      {console.log(subjects)}
    </div>
  );
}

export default Subjects;
