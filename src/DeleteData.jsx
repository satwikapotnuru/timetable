import React, { useState } from "react";
import Header from "./Header";

const DeleteData = ({
  isOpenElectiveEntered,
  setisOpenElectiveEntered,
  setCollegeTimings,
  setCollegeSubjects,
  setLowerTableData,
  setfacultytimings,
  setelectiveTimings,
}) => {
  const [isDataDeleted, setIsDataDeleted] = useState(false);

  const handleDeleteData = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all data?"
    );
    if (confirmDelete) {
      localStorage.setItem("CollegeTimings", {
        BSH: {},
        CSE: { II: {}, III: {}, IV: {} },
        ECE: { II: {}, III: {}, IV: {} },
        IT: { II: {}, III: {}, IV: {} },
        EEE: { II: {}, III: {}, IV: {} },
        MECH: { II: {}, III: {}, IV: {} },
        CIVIL: { II: {}, III: {}, IV: {} },
      });
      setCollegeTimings({
        BSH: {},
        CSE: { II: {}, III: {}, IV: {} },
        ECE: { II: {}, III: {}, IV: {} },
        IT: { II: {}, III: {}, IV: {} },
        EEE: { II: {}, III: {}, IV: {} },
        MECH: { II: {}, III: {}, IV: {} },
        CIVIL: { II: {}, III: {}, IV: {} },
      });

      localStorage.setItem("CollegeSubjects", {
        BSH: {},
        CSE: { II: {}, III: {}, IV: {} },
        ECE: { II: {}, III: {}, IV: {} },
        IT: { II: {}, III: {}, IV: {} },
        EEE: { II: {}, III: {}, IV: {} },
        MECH: { II: {}, III: {}, IV: {} },
        CIVIL: { II: {}, III: {}, IV: {} },
      });
      setCollegeSubjects({
        BSH: {},
        CSE: { II: {}, III: {}, IV: {} },
        ECE: { II: {}, III: {}, IV: {} },
        IT: { II: {}, III: {}, IV: {} },
        EEE: { II: {}, III: {}, IV: {} },
        MECH: { II: {}, III: {}, IV: {} },
        CIVIL: { II: {}, III: {}, IV: {} },
      });
      localStorage.setItem("LowerTableData", {
        BSH: {},
        CSE: { II: {}, III: {}, IV: {} },
        ECE: { II: {}, III: {}, IV: {} },
        IT: { II: {}, III: {}, IV: {} },
        EEE: { II: {}, III: {}, IV: {} },
        MECH: { II: {}, III: {}, IV: {} },
        CIVIL: { II: {}, III: {}, IV: {} },
      });
      setLowerTableData({
        BSH: {},
        CSE: { II: {}, III: {}, IV: {} },
        ECE: { II: {}, III: {}, IV: {} },
        IT: { II: {}, III: {}, IV: {} },
        EEE: { II: {}, III: {}, IV: {} },
        MECH: { II: {}, III: {}, IV: {} },
        CIVIL: { II: {}, III: {}, IV: {} },
      });

      localStorage.setItem("facultytimings", {});
      setfacultytimings({});
      localStorage.setItem("electiveTimings", {
        III: { OE: [], PE: [] },
        IV: { OE: [], PE: [] },
      });
      setelectiveTimings({
        III: { OE: [], PE: [] },
        IV: { OE: [], PE: [] },
      });
      localStorage.setItem("isOpenElectiveEntered", false);
      setisOpenElectiveEntered(false);
      setIsDataDeleted(true);
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      <p style={styles.text}>Do you want to delete all data?</p>
      <button style={styles.button} onClick={handleDeleteData}>
        Delete
      </button>
      {isDataDeleted && (
        <p style={styles.successMessage}>Data has been deleted successfully.</p>
      )}
    </div>
  );
};

export default DeleteData;

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    textAlign: "center",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginRight: "10px",
    transition: "background-color 0.3s ease",
  },
  // Corrected to apply hover styles
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  successMessage: {
    color: "green",
    marginTop: "10px",
  },
};
