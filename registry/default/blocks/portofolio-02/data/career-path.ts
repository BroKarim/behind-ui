import { CareerPath } from "../type/career-path";

export const EXPERIENCES: CareerPath[] = [
  {
    company: "TechNova Solutions",
    positions: [
      {
        id: "1a2b3c4d-1234-5678-9abc-def123456789",
        title: "Full Stack Developer",
        year: "03.2020 - 09.2022",
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Designed and implemented scalable backend APIs using Node.js and Express.\n- Built dynamic, user-friendly dashboards with React and Material-UI.\n- Enhanced system performance by refactoring legacy code.\n- Collaborated with cross-functional teams to define and meet project goals.\n- Ensured integration and seamless deployment in CI/CD pipelines.",
        skills: [
          "Node.js",
          "Express",
          "React",
          "Material-UI",
          "MongoDB",
          "Docker",
          "CI/CD",
          "Team Collaboration",
          "Problem-solving",
        ],
        expanded: true,
      },
      {
        id: "9f8e7d6c-5432-1abc-def4-567890abcdef",
        title: "Tech Lead",
        year: "09.2021 - 09.2022",
        employmentType: "Part-time",
        icon: "code",
        description:
          "- Led a team of 6 developers to deliver a SaaS platform within tight deadlines.\n- Conducted code reviews to ensure high-quality deliverables.\n- Provided mentorship and guided junior developers in problem-solving.\n- Managed project timelines and resource allocation effectively.",
        skills: [
          "Leadership",
          "Mentorship",
          "Team Management",
          "Code Review",
          "Agile",
          "Project Planning",
        ],
      },
    ],
    current: false,
  },
  {
    company: "PixelForge Studios",
    positions: [
      {
        id: "abcd1234-ef56-7890-ghij-klmnopqrstuv",
        title: "UI/UX Designer",
        year: "02.2018 - 01.2020",
        employmentType: "Contract",
        icon: "design",
        description:
          "- Designed wireframes and prototypes for web and mobile applications.\n- Conducted user research and usability testing to refine interface designs.\n- Collaborated with developers to ensure seamless implementation.\n- Developed design systems for consistency across projects.",
        skills: [
          "Figma",
          "Sketch",
          "User Research",
          "Prototyping",
          "Design Systems",
          "Usability Testing",
        ],
      },
      {
        id: "1234abcd-5678-efgh-ijkl-890mnopqrst",
        title: "Creative Consultant",
        year: "01.2019 - 12.2019",
        employmentType: "Freelance",
        icon: "design",
        description:
          "- Provided creative direction for branding projects and marketing campaigns.\n- Developed visual identities that enhanced client brand recognition.\n- Collaborated with clients to define project goals and deliverables.",
        skills: [
          "Creativity",
          "Visual Identity",
          "Client Relations",
          "Branding",
          "Marketing Design",
        ],
      },
    ],
    current: false,
  },
  {
    company: "Innov8 AI Labs",
    positions: [
      {
        id: "a1b2c3d4-e5f6-7890-ghij-klmnopqrstuv",
        title: "Machine Learning Engineer",
        year: "11.2020 - present",
        employmentType: "Full-time",
        icon: "idea",
        description:
          "- Built predictive models using TensorFlow and PyTorch.\n- Developed and deployed scalable machine learning pipelines in production.\n- Worked on NLP-based applications, including chatbots and sentiment analysis.\n- Conducted data preprocessing and feature engineering to improve accuracy.",
        skills: [
          "TensorFlow",
          "PyTorch",
          "NLP",
          "Python",
          "Data Science",
          "AI Pipelines",
          "Feature Engineering",
          "Problem-solving",
        ],
        expanded: true,
      },
      {
        id: "mnopqrst-1234-abcd-5678-efghijkl890",
        title: "Research Scientist",
        year: "11.2021 - present",
        employmentType: "Part-time",
        icon: "idea",
        description:
          "- Conducted cutting-edge research in deep learning and computer vision.\n- Published papers in renowned AI conferences and journals.\n- Collaborated with universities to explore new advancements in AI technology.",
        skills: [
          "Deep Learning",
          "Computer Vision",
          "Research",
          "Publication",
          "Collaboration",
        ],
      },
    ],
    current: true,
  },
];
