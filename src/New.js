const subjects = {
  IOT: [1, 4],
  CD: [1, 4],
  SE: [1, 4],
  OE: [1, 4],
  PEL: [2, 1],
  CTL: [2, 1],
  MPL: [2, 1],
  ECCL: [2, 1],
  SS: [1, 1],
  DSL: [2, 1],
  ES: [1, 1],
};

const sections = ["A", "B", "C"];
const Timings = [
  1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 3.1,
  3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 5.1, 5.2,
  5.3, 5.4, 5.5, 5.6, 5.7, 6.1, 6.2, 6.3, 6.4,
];
const nonlabtimings = [1.4, 1.7, 2.4, 2.7, 3.4, 3.7, 4.4, 4.7, 5.4, 5.7, 6.4];
let dupt = Timings;
let faculty = {
  faculty1: [
    ["IOT", "A"],
    ["CD", "B"],
    ["SE", "C"],
  ],
  faculty2: [
    ["SS", "A"],
    ["DSL", "B"],
    ["SS", "B"],
  ],
  faculty3: [
    ["CD", "A"],
    ["SE", "B"],
  ],
};
let facultytimings = { faculty1: [], faculty2: [], faculty3: [] };
let sectiontimings = { A: [], B: [], C: [] };

function randompicker(inputArray) {
  // Check if the array is not empty
  if (inputArray.length === 0) {
    return null;
  }

  // Pick a random number from the array
  const randomIndex = Math.floor(Math.random() * inputArray.length);
  const randomNumber = inputArray[randomIndex];
  inputArray.splice(randomIndex, 1);
  // Shuffle the array
  for (let i = inputArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
  }

  // Remove the picked number from the array

  // Return the picked random number
  return randomNumber;
}

for (const s of sections) {
  for (const [facultyName, facultyArray] of Object.entries(faculty)) {
    for (let i = 0; i < facultyArray.length; i++) {
      if (facultyArray[i][1] === s && subjects[facultyArray[i][0]][0] == 2) {
        let p = 0;
        while (p < 1) {
          let temp = randompicker(dupt);
          if (!nonlabtimings.includes(temp)) {
            let newArray2 = [];
            newArray2.push(temp);
            newArray2.push(temp + 0.1);
            newArray2.push(facultyArray[i][0]);
            facultytimings[facultyName].push(newArray2);

            let newArray = [];
            newArray.push(temp);
            newArray.push(facultyArray[i][0]);
            sectiontimings[s].push(newArray);
            dupt = dupt.filter((el) => el != temp + 0.1);
            p = p + 1;
          }
        }
      }
    }
  }
}

//for classes not labs

for (const s of sections) {
  for (const [facultyName, facultyArray] of Object.entries(faculty)) {
    for (let i = 0; i < facultyArray.length; i++) {
      if (facultyArray[i][1] === s && subjects[facultyArray[i][0]][0] == 1) {
        if (subjects[facultyArray[i][0]][1] == 4) {
          let k = 0;
          while (k < 4) {
            let temp = randompicker(dupt);

            // dayArray = dupt.map((ele) => Math.floor(ele));
            tempfacultyArray = facultytimings[facultyName].map((ele) =>
              ele[1] === facultyArray[i][0] ? Math.floor(ele[0]) : undefined
            );
            // console.log(
            //   "k:",
            //   k,
            //   "temp:",
            //   temp,
            //   "tempfacultyArray:",
            //   tempfacultyArray,
            //   "facultyName:",
            //   facultyName
            // );
            if (!tempfacultyArray.includes(Math.floor(temp))) {
              let newArray2 = [];
              newArray2.push(temp);
              newArray2.push(facultyArray[i][0]);
              facultytimings[facultyName].push(newArray2);
              k = k + 1;
              let newArray = [];
              newArray.push(temp);
              newArray.push(facultyArray[i][0]);
              sectiontimings[s].push(newArray);
            } else {
              dupt.push(temp);
            }
          }
        }
        if (subjects[facultyArray[i][0]][1] == 1) {
          let temp = randompicker(dupt);
          let newArray2 = [];
          newArray2.push(temp);
          newArray2.push(facultyArray[i][0]);
          facultytimings[facultyName].push(newArray2);
          let newArray = [];
          newArray.push(temp);
          newArray.push(facultyArray[i][0]);
          sectiontimings[s].push(newArray);
        }
      }
    }
  }
}

console.log(facultytimings);
console.log(sectiontimings);
