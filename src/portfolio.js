/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Metehan Alper Elmas",
  description:
    "Passionate developer focused on scalable, reliable, and user-centered software solutions.",
  og: {
    title: "Metehan Alper Elmas Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Metehan Alper Elmas",
  logo_name: "Metehan Alper Elmas",
  nickname: "metehanalperelmas",
  subTitle:
    "Passionate developer focused on scalable, reliable, and user-centered software solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/metehanalperelmas/masterPortfolio",
  githubProfile: "https://github.com/metehanalperelmas",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/metehanalperelmas",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/metehanalper/"

  {
    name: "Github",
    link: "https://github.com/metehanalperelmas",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/metehan-alper-elmas/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:elmasmetehanalper@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/metehanalper/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

// const skills = {
//   data: [
//     {
//       title: "Data Science & AI",
//       fileName: "DataScienceImg",
//       skills: [
//         "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
//         "⚡ Experience of working with Computer Vision and NLP projects",
//         "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
//       ],
//       softwareSkills: [
//         {
//           skillName: "Tensorflow",
//           fontAwesomeClassname: "logos-tensorflow",
//           style: {
//             backgroundColor: "transparent",
//           },
//         },
//         {
//           skillName: "Keras",
//           fontAwesomeClassname: "simple-icons:keras",
//           style: {
//             backgroundColor: "white",
//             color: "#D00000",
//           },
//         },
//         {
//           skillName: "PyTorch",
//           fontAwesomeClassname: "logos-pytorch",
//           style: {
//             backgroundColor: "transparent",
//           },
//         },
//         {
//           skillName: "Python",
//           fontAwesomeClassname: "ion-logo-python",
//           style: {
//             backgroundColor: "transparent",
//             color: "#3776AB",
//           },
//         },
//         {
//           skillName: "Deeplearning",
//           imageSrc: "deeplearning_ai_logo.png",
//         },
//       ],
//     },
//     {
//       title: "Full Stack Development",
//       fileName: "FullStackImg",
//       skills: [
//         "⚡ Building responsive website front end using React-Redux",
//         "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
//         "⚡ Creating application backend in Node, Express & Flask",
//       ],
//       softwareSkills: [
//         {
//           skillName: "HTML5",
//           fontAwesomeClassname: "simple-icons:html5",
//           style: {
//             color: "#E34F26",
//           },
//         },
//         {
//           skillName: "CSS3",
//           fontAwesomeClassname: "fa-css3",
//           style: {
//             color: "#1572B6",
//           },
//         },
//         {
//           skillName: "Sass",
//           fontAwesomeClassname: "simple-icons:sass",
//           style: {
//             color: "#CC6699",
//           },
//         },
//         {
//           skillName: "JavaScript",
//           fontAwesomeClassname: "simple-icons:javascript",
//           style: {
//             backgroundColor: "#000000",
//             color: "#F7DF1E",
//           },
//         },
//         {
//           skillName: "ReactJS",
//           fontAwesomeClassname: "simple-icons:react",
//           style: {
//             color: "#61DAFB",
//           },
//         },
//         {
//           skillName: "NodeJS",
//           fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
//           style: {
//             color: "#339933",
//           },
//         },
//         {
//           skillName: "NPM",
//           fontAwesomeClassname: "simple-icons:npm",
//           style: {
//             color: "#CB3837",
//           },
//         },
//         {
//           skillName: "Yarn",
//           fontAwesomeClassname: "simple-icons:yarn",
//           style: {
//             color: "#2C8EBB",
//           },
//         },
//         {
//           skillName: "Gatsby",
//           fontAwesomeClassname: "simple-icons:gatsby",
//           style: {
//             color: "#663399",
//           },
//         },
//         {
//           skillName: "Flutter",
//           fontAwesomeClassname: "simple-icons:flutter",
//           style: {
//             color: "#02569B",
//           },
//         },
//       ],
//     },
//     {
//       title: "Cloud Infra-Architecture",
//       fileName: "CloudInfraImg",
//       skills: [
//         "⚡ Experience working on multiple cloud platforms",
//         "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
//         "⚡ Deploying deep learning models on cloud to use on mobile devices",
//         "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
//       ],
//       softwareSkills: [
//         {
//           skillName: "GCP",
//           fontAwesomeClassname: "simple-icons:googlecloud",
//           style: {
//             color: "#4285F4",
//           },
//         },
//         {
//           skillName: "AWS",
//           fontAwesomeClassname: "simple-icons:amazonaws",
//           style: {
//             color: "#FF9900",
//           },
//         },
//         {
//           skillName: "Azure",
//           fontAwesomeClassname: "simple-icons:microsoftazure",
//           style: {
//             color: "#0089D6",
//           },
//         },
//         {
//           skillName: "Firebase",
//           fontAwesomeClassname: "simple-icons:firebase",
//           style: {
//             color: "#FFCA28",
//           },
//         },
//         {
//           skillName: "PostgreSQL",
//           fontAwesomeClassname: "simple-icons:postgresql",
//           style: {
//             color: "#336791",
//           },
//         },
//         {
//           skillName: "MongoDB",
//           fontAwesomeClassname: "simple-icons:mongodb",
//           style: {
//             color: "#47A248",
//           },
//         },
//         {
//           skillName: "Docker",
//           fontAwesomeClassname: "simple-icons:docker",
//           style: {
//             color: "#1488C6",
//           },
//         },
//         {
//           skillName: "Kubernetes",
//           fontAwesomeClassname: "simple-icons:kubernetes",
//           style: {
//             color: "#326CE5",
//           },
//         },
//       ],
//     },
//     {
//       title: "UI/UX Design",
//       fileName: "DesignImg",
//       skills: [
//         "⚡ Designing highly attractive user interface for mobile and web applications",
//         "⚡ Customizing logo designs and building logos from scratch",
//         "⚡ Creating the flow of application functionalities to optimize user experience",
//       ],
//       softwareSkills: [
//         {
//           skillName: "Adobe XD",
//           fontAwesomeClassname: "simple-icons:adobexd",
//           style: {
//             color: "#FF2BC2",
//           },
//         },
//         {
//           skillName: "Figma",
//           fontAwesomeClassname: "simple-icons:figma",
//           style: {
//             color: "#F24E1E",
//           },
//         },
//         {
//           skillName: "Adobe Illustrator",
//           fontAwesomeClassname: "simple-icons:adobeillustrator",
//           style: {
//             color: "#FF7C00",
//           },
//         },
//         {
//           skillName: "Inkscape",
//           fontAwesomeClassname: "simple-icons:inkscape",
//           style: {
//             color: "#000000",
//           },
//         },
//       ],
//     },
//   ],
// };

// Education Page

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing scalable web applications using ASP.NET Core, CakePHP, Laravel, and Django",
        "⚡ Building responsive frontends with HTML, CSS, JavaScript, ReactJS and Vue.js",
        "⚡ Developing mobile applications using Flutter and React Native",
        "⚡ Integrating third-party APIs (SOAP/JSON, REST) and payment systems",
        "⚡ Managing Docker-based deployments and CI/CD workflows",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: { color: "#777BB4" },
        },
        {
          skillName: "CakePHP",
          fontAwesomeClassname: "simple-icons:cakephp",
          style: { color: "#D33C43" },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: { color: "#FF2D20" },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: { color: "#239120" },
        },
        {
          skillName: "ASP.NET Core",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: { color: "#512BD4" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: { color: "#092E20" },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: { color: "#007396" },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: { color: "#7F52FF" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: { color: "#42B883" },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: { color: "#02569B" },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: { color: "#FFCA28" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: { color: "#E10098" },
        },
      ],
    },
    {
      title: "Backend & API Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Creating scalable RESTful API services using ASP.NET Core, Laravel, Django, and Node.js",
        "⚡ Integrating payment, invoicing and third-party APIs into web and mobile apps",
        "⚡ Database design, management and optimization with MySQL, PostgreSQL and MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "ASP.NET Core",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: { color: "#512BD4" },
        },
        {
          skillName: "CakePHP",
          fontAwesomeClassname: "simple-icons:cakephp",
          style: { color: "#D33C43" },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: { color: "#FF2D20" },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: { color: "#092E20" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: { color: "#339933" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: { color: "#E10098" },
        },
        {
          skillName: "SOAP/REST APIs",
          fontAwesomeClassname: "simple-icons:json",
          style: { color: "#000000" },
        },
      ],
    },
    {
      title: "Mobile Development",
      fileName: "MobileDevImg",
      skills: [
        "⚡ Developing cross-platform mobile apps with Flutter and React Native",
        "⚡ Integrating REST APIs, GraphQL and Firebase backend services into mobile applications",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: { color: "#02569B" },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: { color: "#7F52FF" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: { color: "#FFCA28" },
        },
      ],
    },
    {
      title: "DevOps & Deployment",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Managing Docker-based application deployments",
        "⚡ Setting up CI/CD pipelines for automated deployments",
        "⚡ Managing multiple environment setups and version control workflows",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

// const degrees = {
//   degrees: [
//     {
//       title: "Indian Institute of Information Technology Kurnool",
//       subtitle: "B.Tech. in Computer Engineering",
//       logo_path: "iiitk_logo.png",
//       alt_name: "IIITDM Kurnool",
//       duration: "2016 - 2020",
//       descriptions: [
//         "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
//         "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
//         "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
//       ],
//       website_link: "http://iiitk.ac.in",
//     },
//     {
//       title: "Indiana University Bloomington",
//       subtitle: "M.S. in Computer Science",
//       logo_path: "iu_logo.png",
//       alt_name: "Indiana University Bloomington",
//       duration: "2021 - 2023",
//       descriptions: [
//         "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
//         "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
//         "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
//       ],
//       website_link: "https://www.indiana.edu/",
//     },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "Dokuz Eylül University",
      subtitle: "B.Sc. in Computer Engineering",
      logo_path: "deu_logo.png",
      alt_name: "Dokuz Eylül University",
      duration: "2018 - 2024",
      descriptions: [
        "⚡ Studied core computer engineering subjects such as Data Structures, Algorithms, Database Systems, Operating Systems, Object-Oriented Programming, and Software Engineering.",
        "⚡ Completed projects on CRM and E-commerce platforms using ASP.NET Core and CakePHP.",
        "⚡ Participated in medical workflow systems, smart device data collection, and CI/CD process integrations.",
        "⚡ Awarded for consistently maintaining a high GPA and active participation in industry-based projects.",
      ],
      website_link: "https://www.deu.edu.tr/",
    },
    {
      title: "South East European University",
      subtitle: "Erasmus+ Exchange Program (Computer Engineering)",
      logo_path: "seeu_logo.png",
      alt_name: "South East European University",
      duration: "2023",
      descriptions: [
        "⚡ Focused on cross-cultural academic experience in computer engineering and software development.",
        "⚡ Enhanced skills in backend development, Docker deployments, and API integrations.",
        "⚡ Worked on multilingual software solutions with international teams during this program.",
      ],
      website_link: "https://www.seeu.edu.mk/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
// const experience = {
//   title: "Experience",
//   subtitle: "Work, Internship and Volunteership",
//   description:
//     "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
//   header_image_path: "experience.svg",
//   sections: [
//     {
//       title: "Work",
//       work: true,
//       experiences: [
//         {
//           title: "Machine Learning Engineer",
//           company: "TikTok Inc.",
//           company_url: "https://www.tiktok.com/en/",
//           logo_path: "tiktok_logo.png",
//           duration: "June 2023 - Present",
//           location: "San Jose, CA, USA",
//           description:
//             "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
//           color: "#000000",
//         },
//         {
//           title: "Associate AI Engineer",
//           company: "Legato Health Technology",
//           company_url: "https://legatohealthtech.com/",
//           logo_path: "legato_logo.png",
//           duration: "June 2020 - Aug 2021",
//           location: "Hyderabad, Telangana",
//           description:
//             "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
//           color: "#0879bf",
//         },
//         {
//           title: "Android and ML Developer",
//           company: "Muffito Incorporation",
//           company_url: "https://www.linkedin.com/company/muffito-inc/about/",
//           logo_path: "muffito_logo.png",
//           duration: "May 2018 - Oct 2018",
//           location: "Pune, Maharashtra",
//           description:
//             "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
//           color: "#9b1578",
//         },
//         {
//           title: "Android Developer",
//           company: "FreeCopy Pvt. Ltd.",
//           company_url: "https://www.linkedin.com/company/freecopy/about/",
//           logo_path: "freecopy_logo.png",
//           duration: "Nov 2017 - Dec 2017",
//           location: "Ahmedabad, Gujarat",
//           description:
//             "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
//           color: "#fc1f20",
//         },
//       ],
//     },
//     {
//       title: "Internships",
//       experiences: [
//         {
//           title: "Machine Learning Intern",
//           company: "TikTok Inc.",
//           company_url: "https://www.tiktok.com/en/",
//           logo_path: "tiktok_logo.png",
//           duration: "May 2022 - Aug 2022",
//           location: "San Francisco, USA",
//           description:
//             "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
//           color: "#000000",
//         },
//         {
//           title: "Data Science Research Intern",
//           company: "Delhivery Pvt. Ltd.",
//           company_url: "https://www.delhivery.com/",
//           logo_path: "delhivery_logo.png",
//           duration: "May 2019 - Sept 2019",
//           location: "Gurgaon, Haryana",
//           description:
//             "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
//           color: "#ee3c26",
//         },
//         {
//           title: "Data Science Intern",
//           company: "Intel Indexer LLC",
//           company_url:
//             "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
//           logo_path: "intel_logo.jpg",
//           duration: "Nov 2018 - Dec 2018",
//           location: "Work From Home",
//           description:
//             "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
//           color: "#0071C5",
//         },
//       ],
//     },
//     {
//       title: "Volunteerships",
//       experiences: [
//         {
//           title: "Google Explore ML Facilitator",
//           company: "Google",
//           company_url: "https://about.google/",
//           logo_path: "google_logo.png",
//           duration: "June 2019 - April 2020",
//           location: "Hyderabad, Telangana",
//           description:
//             "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
//           color: "#4285F4",
//         },
//         {
//           title: "Microsoft Student Partner",
//           company: "Microsoft",
//           company_url: "https://www.microsoft.com/",
//           logo_path: "microsoft_logo.png",
//           duration: "Aug 2019 - May 2020",
//           location: "Hyderabad, Telangana",
//           description:
//             "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
//           color: "#D83B01",
//         },
//         {
//           title: "Mozilla Campus Captain",
//           company: "Mozilla",
//           company_url: "https://www.mozilla.org/",
//           logo_path: "mozilla_logo.png",
//           duration: "Oct 2019 - May 2020",
//           location: "Kurnool, Andhra Pradesh",
//           description:
//             "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
//           color: "#000000",
//         },
//         {
//           title: "Developer Students Club Member",
//           company: "DSC IIITDM Kurnool",
//           company_url:
//             "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
//           logo_path: "dsc_logo.png",
//           duration: "Jan 2018 - May 2020",
//           location: "Kurnool, Andhra Pradesh",
//           description:
//             "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
//           color: "#0C9D58",
//         },
//         {
//           title: "Developer Program Member",
//           company: "Github",
//           company_url: "https://github.com/",
//           logo_path: "github_logo.png",
//           duration: "July 2019 - PRESENT",
//           location: "Work From Home",
//           description:
//             "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
//           color: "#181717",
//         },
//       ],
//     },
//   ],
// };

const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked on various scalable web and mobile applications as a Full-Stack Developer and Software Engineer. I'm passionate about creating efficient, clean-coded and user-focused solutions. Additionally, I gained valuable experience through internships in software development and network engineering, and participated in international exchange programs.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "Creaware",
          company_url: "https://www.creaware.net/",
          logo_path: "creaware_logo.jpg",
          duration: "Dec 2023 - Apr 2025",
          location: "İzmir, Türkiye",
          description:
            "Developed CRM and E-Commerce applications using CakePHP and MySQL. Managed Docker-based deployments and integrated payment and invoicing systems. Worked with international teams and expanded multilingual solutions to 5000+ new users.",
          color: "#D33C43",
        },
        {
          title: "Software Developer",
          company: "Semafor Teknoloji",
          company_url: "https://www.semaforteknoloji.com/",
          logo_path: "semafor_logo.png",
          duration: "Jan 2023 - Nov 2023",
          location: "İzmir, Türkiye",
          description:
            "Built a production workflow tracking system with ASP.NET Core and MySQL. Developed responsive frontend interfaces using HTML, CSS, JavaScript. Worked on database optimization and integrated AI-based user behavior analysis in a medical CRM application.",
          color: "#005FA8",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Network Engineer Intern",
          company: "Dokuz Eylül University",
          company_url: "https://www.deu.edu.tr/",
          logo_path: "deu_logo_small.png",
          duration: "Nov 2023 - Dec 2023",
          location: "İzmir, Türkiye",
          description:
            "Designed a scalable and secure network infrastructure for the university’s internal systems. Installed and configured various network devices such as routers, switches, and firewalls.",
          color: "#005FA8",
        },
        {
          title: "Software Developer Intern",
          company: "Semafor Teknoloji",
          company_url: "https://www.semaforteknoloji.com/",
          logo_path: "semafor_logo.png",
          duration: "Nov 2022 - Jan 2023",
          location: "İzmir, Türkiye",
          description:
            "Developed a real-time data visualization web application for wearable smart devices. Processed and stored sensor data efficiently and implemented CI/CD workflows for improved deployment processes.",
          color: "#005FA8",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Erasmus+ Exchange Community Leader",
          company: "South East European University",
          company_url: "https://www.seeu.edu.mk/",
          logo_path: "seeu_logo.png",
          duration: "Mar 2023 - Jun 2023",
          location: "Tetovo, North Macedonia",
          description:
            "Led and coordinated the Erasmus+ Exchange Student Community during the academic program. Organized intercultural events, software development workshops, and networking activities for local and international students to enhance collaboration and knowledge sharing.",
          color: "#2196F3",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have built a variety of web and mobile applications using modern development tools. My favorite experiences involve developing full-stack projects and integrating complex API systems to deliver smooth, user-friendly solutions.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Projects",
  description: "Some of my published, unpublished Projects and Work.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "sisus-osgb",
      name: "Sisus OSGB",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Sisus OSGB Company Website",
      url: "https://sisusosgb.com",
      image_path: "creaware_logo.png",
    },
    {
      id: "avvet",
      name: "EvVet",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Mobile Vet Application",
      url: "",
      image_path: "semafor_logo.png",
    },
    {
      id: "gabal",
      name: "GABAL",
      createdAt: "2023-10-12T00:00:00Z",
      description: "E-Commerce Website For GABAL",
      url: "https://www.gabal-verlag.de/",
      image_path: "creaware_logo.png",
    },
    {
      id: "hyla-tr",
      name: "HylaTR",
      createdAt: "2023-10-12T00:00:00Z",
      description: "TR Website for HYLA GERMANY",
      url: "https://www.hylatr.com/tr",
      image_path: "creaware_logo.png",
    },
    {
      id: "creaware",
      name: "CreaWare",
      createdAt: "2023-10-12T00:00:00Z",
      description: "CreawareTr Company Website",
      url: "https://www.creaware.net/",
      image_path: "creaware_logo.png",
    },
    {
      id: "asus",
      name: "Asus Mobile App",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Asus Smart Device Mobile Application",
      url: "",
      image_path: "semafor_logo.png",
    },
    {
      id: "asus2",
      name: "Asus WebApp",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Asus Smart Device Web Application",
      url: "",
      image_path: "semafor_logo.png",
    },
    {
      id: "crm",
      name: "CRM Plugin",
      createdAt: "2023-09-19T00:00:00Z",
      description: "CRM Module for Software Company",
      url: "",
      image_path: "semafor_logo.png",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me_animation.png",
    description:
      "Let’s connect! I’m open to all kinds of professional opportunities, freelance work, side projects, or casual chats. If you have something in mind, don’t hesitate to drop a message. I’ll get back to you as soon as possible.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
