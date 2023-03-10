import ProjectsModelInterface from "../interface/projects";
import { ImMobile } from "react-icons/im";
import { MdWeb } from "react-icons/md";
import { DiIllustrator } from "react-icons/di";
import { RiFlutterFill } from "react-icons/ri";
import { GrApps } from "react-icons/gr";
import { BsFillFileCodeFill } from "react-icons/bs";
import { AiOutlineCodepenCircle } from "react-icons/ai";

const stickyProjectListData: ProjectsModelInterface[] = [
  {
    key: 1,
    name: "portfolioProjectsAiProjectsText",
    icon: DiIllustrator,
    listItems: [
      { name: "mlModelsText", icon: AiOutlineCodepenCircle },
      { name: "aiAppsText", icon: GrApps },
    ],
  },
  {
    key: 2,
    name: "portfolioProjectsMobileAppText",
    icon: ImMobile,
    listItems: [{ name: "flutterAppsText", icon: RiFlutterFill }],
  },
  {
    key: 3,
    name: "portfolioProjectsWebAppText",
    icon: MdWeb,
    listItems: [{ name: "webAppsText", icon: GrApps }],
  },
  {
    key: 4,
    name: "portfolioProjectsOthersProjectsText",
    icon: BsFillFileCodeFill,
    listItems: [],
  },
];

export default stickyProjectListData;
