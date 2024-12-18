import { BiLogoReact, BiLogoTailwindCss, BiLogoGithub, BiLogoTypescript, BiLogoMongodb, BiLogoPython, BiLogoJavascript, BiLogoJava, BiLogoNodejs, BiSolidFileCss,BiSolidFileHtml, BiLogoPhp} from "react-icons/bi";
import { RiSupabaseLine,RiWordpressFill  } from "react-icons/ri";
import { SiMysql, SiGooglesheets  } from "react-icons/si";

export const frameworkIcons: { [key: string]: React.ElementType } = {
  CSS: BiSolidFileCss,
  HTML: BiSolidFileHtml,
  PHP: BiLogoPhp,
  React: BiLogoReact,
  Tailwind: BiLogoTailwindCss,
  Github: BiLogoGithub,
  Typescript: BiLogoTypescript,
  Mongodb: BiLogoMongodb,
  Python: BiLogoPython,
  JS: BiLogoJavascript,
  Java: BiLogoJava,
  Nodejs: BiLogoNodejs,
  MySQL: SiMysql,
  Supabase: RiSupabaseLine,
  Wordpress: RiWordpressFill,
  GoogleSheets: SiGooglesheets
};

