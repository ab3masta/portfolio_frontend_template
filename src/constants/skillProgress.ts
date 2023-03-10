import SkillProgressDataInterface from "../interface/skillProgress";

const skillProgress: SkillProgressDataInterface[] = [
  {
    key: 1,
    name: "Data Engineering",
    progress: 50,
  },
  {
    key: 2,
    name: "Data analysis",
    progress: 40,
  },
  {
    key: 3,
    name: "Machine learning engineering",
    progress: 30,
  },
  {
    key: 4,
    name: "Mobile application development",
    logos: [
      "./assets/svg/flutter.svg",
      "./assets/svg/firebase.svg",
      "./assets/svg/mongodb.svg",
    ],
    progress: 80,
  },
  {
    key: 5,
    name: "MERN Stack",
    logos: [
      "./assets/svg/mongodb.svg",
      "./assets/svg/react.svg",
      "./assets/svg/nodejs2.svg",
    ],
    progress: 40,
  },
  {
    key: 6,
    name: "Python",
    logos: ["./assets/svg/python.svg"],
    progress: 70,
  },
];

export default skillProgress;
