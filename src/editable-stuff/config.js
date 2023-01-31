// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Damian",
  middleName: "",
  lastName: "Sola Zambrano",
  message: "Desarrollador fullStack, apacionado por el desarrollo y la tecnologia",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/damianSola",
    },
  
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/damian_sola/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/damiansola/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/solazdamian",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "Sobre mi",
  imageLink: require("./profile-pic.png"),
  imageSize: 375,
  message:
    "Mi nombre es Damian Sola Zambrano, me gradué en el instituto Henry de deasarrollador FullStack. Ahí adquirí habildidades como adaptabilidad, trabajo en equipo, resolución de problemas e inteligencia emocional. Ademas soy paciente, extrovertido y autodidacta ",
  resume: "file:///C:/Users/damia/Downloads/cvDamian.pdf",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "damianSola", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("./profile-pic.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("./profile-pic.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "SQL", value: 75 },
    { name: "NoSQL", value: 65 },
    { name: "Sequelize", value: 65 },
    { name: "Mongoose", value: 50 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "express", value: 70 },
  ],
  softSkills: [
    { name: "Inteligencia emocional", value: 80 },
    { name: "Colaboracion", value: 90 },
    { name: "Positivismo", value: 75 },
    { name: "Adaptabilidad", value: 85 },
    { name: "Resolucion de problemas", value: 75 },
    { name: "Empatia", value: 90 },
    { name: "Organizacion", value: 70 },
    { name: "Creatividad", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Actualmente estoy trabajando en un proyecto personal mientras busco trabajo en remoto como front-end o back-end.",
  email: "damiansola99@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
