import html from '../assets/svg/skills/html.svg';
import java from '../assets/svg/skills/java.svg';
import javascript from '../assets/svg/skills/javascript.svg';
import mysql from '../assets/svg/skills/mysql.svg';
import react from '../assets/svg/skills/react.svg';
import tailwind from '../assets/svg/skills/tailwind.svg';
import springboot from '../assets/svg/skills/springboot.svg';
import CSS from '../assets/svg/skills/css.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'tailwind':
      return tailwind;
    case 'mysql':
      return mysql;
    case 'java':
      return java;
    case 'springboot':
      return springboot;
    case 'css':
      return CSS;
    default:
      return null; // safely handle unknown skills
  }
};
