import { IconType } from "react-icons/lib";

export default interface ProjectsModelInterface {
  key: number;
  name: string;
  icon?: IconType;
  listItems: { name: string; content?: string; icon?: IconType }[];
}
