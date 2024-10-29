import React from "react";
import "./AboutPage.css"; // Import CSS file for styling
import Header from "./Header";
function AboutPage() {
  return (
    <div className="about-container">
      <Header />
      <h1 className="about-heading">About Us</h1>
      <div className="about-content">
        <p>
          Lecture time-tabling preparation has always been known as a typical
          scheduling problem that is time consuming, energy sapping and often
          leading to general apathy and waste of resources.
        </p>
        <p>
          Planning time-table every session or semester is among the most
          complex and error-prone task carried out in higher institutions of
          learning. Therefore, the need to adopt an electronic system as opposed
          to the manual process cannot be over-emphasized.
        </p>
        <p>
          Several other administrative sectors of most institutions have been
          automated, but lecture time-tabling is still done manually because of
          its inherent problems. Planning lecture time-table demands enormous
          attention and effort from any institution because of its constraint
          satisfaction problem. In many institutions, the operation of a Manual
          Time Tabling System (MTTS), managed centrally, poses challenges in
          achieving flawless lecture scheduling. This manual approach often
          complicates the task of achieving flawless lecture scheduling.
        </p>
        <p>
          This study developed an electronic lecture time-table scheduler (ELTS)
          using Constraint Satisfaction algorithm to provide convenience in
          fixing classes and reduction in the risk of omission and clashes of
          courses and lecturers. Questionnaire was also prepared and
          administered to sample the opinions of staff, students and committee
          members involved in the manual process. The result from the analysis
          corroborates the fact that the new ELTS will be the best method in
          tackling the lapses experienced by the old system.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
