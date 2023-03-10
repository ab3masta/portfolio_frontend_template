export default interface ProjectsData {
  title: string;
  content: string;
  bgImage: string;
  completed: number;
  projectKey: string;
  projectName: string;
  screenshots?: string[];
  frameworkLogoUsed?: string[];
  features?: string[];
  viewProjectLink?: string;
  sourceCodeLink?: string;
  playStoreLink?: string;
  appleStoreLink?: string;
  amazonStoreLink?: string;
}
