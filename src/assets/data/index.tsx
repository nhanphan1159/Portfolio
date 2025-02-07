import MenuAbout from "@src/assets/menuAbout.svg?react";
import MenuContact from "@src/assets/menuContact.svg?react";
import MenuExperience from "@src/assets/menuExp.svg?react";
import MenuProject from "@src/assets/menuProject.svg?react";
import MenuSkill from "@src/assets/menuSkill.svg?react";

export const menu = [
  {
    icon: <MenuAbout />,
    label: "About",
    url: "/",
  },
  {
    icon: <MenuExperience />,
    label: "Experience",
    url: "/experience",
  },
  {
    icon: <MenuProject />,
    label: "Project",
    url: "/project",
  },
  {
    icon: <MenuSkill />,
    label: "Skill",
    url: "/skill",
  },
  {
    icon: <MenuContact />,
    label: "Contact",
    url: "/contact",
  },
];
