import React, { useEffect, useRef } from "react";
import "./HomePage.css";
import Header from "./Header";

function HomePage({ setselectedOption, selectedOption, handleOptionChange }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    const sections = document.querySelectorAll(".hidden");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="HomePage">
      <Header
        selectedOption={selectedOption}
        setselectedOption={setselectedOption}
      />
      <div className="content">
        <div className="timetable-section hidden">
          <h2>Time Table</h2>
          <p>
            Lecture time-tabling preparation has always been known as a typical
            scheduling problem that is time-consuming, energy-sapping, and often
            leading to general apathy and waste of resources. Planning the
            timetable every session or semester is among the most complex and
            error-prone tasks carried out in higher institutions of learning.
            Therefore, the need to adopt an electronic system as opposed to the
            manual process cannot be over-emphasized. Several other
            administrative sectors of most institutions have been automated, but
            lecture time-tabling is still done manually because of its inherent
            problems. Planning a lecture timetable demands enormous attention
            and effort from any institution because of its constraint
            satisfaction problem. In many institutions, the operation of a
            Manual Time-Tabling System (MTTS), managed centrally, poses
            challenges in achieving flawless lecture scheduling. This manual
            approach often complicates the task of achieving flawless lecture
            scheduling. This study developed an electronic lecture timetable
            scheduler (ELTS) using Constraint Satisfaction algorithm to provide
            convenience in fixing classes and a reduction in the risk of
            omission and clashes of courses and lecturers. A questionnaire was
            also prepared and administered to sample the opinions of staff,
            students, and committee members involved in the manual process. The
            result from the analysis corroborates the fact that the new ELTS
            will be the best method in tackling the lapses experienced by the
            old system.
          </p>
          {/* Table data can be added here if necessary */}
        </div>
        <div className="more-section hidden">
          <h2>Problems with Manual Timetable Generation</h2>
          <p>
            When tackling the manual generation of a timetable, numerous
            challenges emerge, each adding layers of complexity to the process.
            Firstly, there's the intricate task of aligning course offerings,
            involving meticulous attention to details such as course names,
            codes, and departmental allocations. Coordinating faculty
            availability presents another formidable obstacle, necessitating the
            harmonization of their schedules with teaching commitments, research
            responsibilities, and other institutional duties.
          </p>
          <p>
            Moreover, the endeavor to secure suitable room allocations for
            classes is fraught with challenges, requiring considerations of room
            capacity, facilities, and potential scheduling conflicts.
            Additionally, accommodating student preferences and constraints,
            such as scheduling conflicts or extracurricular activities, adds
            another dimension of complexity to the task. Navigating prerequisite
            dependencies between courses further complicates matters, demanding
            careful sequencing to ensure students fulfill necessary
            requirements.
          </p>
          <p>
            Furthermore, determining class durations, breaks, and recess periods
            adds to the intricacy of the timetable generation process. Balancing
            faculty preferences and institutional policies alongside optimizing
            objectives, such as minimizing conflicts and maximizing resource
            utilization, presents yet another layer of complexity. Lastly,
            incorporating adjustments based on stakeholder feedback remains
            integral, requiring flexibility and adaptability throughout the
            timetable creation process.
          </p>
          <p>
            In summary, manual timetable generation entails a myriad of
            challenges, each demanding thoughtful consideration and strategic
            resolution to navigate effectively.
          </p>
        </div>
        <div className="more-section hidden">
          <h2>More Section 2</h2>
          <p>More content for section 2...</p>
        </div>
        <div className="more-section hidden">
          <h2>More Section 3</h2>
          <p>More content for section 3...</p>
        </div>
        <div className="more-section hidden">
          <h2>More Section 4</h2>
          <p>More content for section 4...</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
