import {
  GlobalServicesModelInterface,
  OnlineServicesModelInterface,
} from "../interface/services";

const globalServices: GlobalServicesModelInterface[] = [
  {
    title: "serviceMobileAppDeveloperText",
    content: "",
    animatedIcon: "./assets/json/developer.json",
    techLogos: [
      "./assets/svg/flutter.svg",
      "./assets/svg/firebase.svg",
      "./assets/svg/mongodb.svg",
      "./assets/svg/react.svg",
      "./assets/svg/nodejs2.svg",
    ],
  },
  {
    title: "serviceDataScientistText",
    content: "",
    animatedIcon: "./assets/json/polygon.json",
    techLogos: ["./assets/svg/python.svg", "./assets/svg/jupyter.svg"],
  },
  {
    title: "serviceDiscussWithMeText",
    content: "",
    animatedIcon: "./assets/json/consultation.json",
  },
];

const onlineServices: OnlineServicesModelInterface[] = [
  {
    title: "fiverrIntegateFirebaseOnFlutterApp",
    content: "",
    bgImage:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/253029406/original/03124d5f60fd24e585ca4e2658d688d02d1ae4ad/integate-firebase-on-flutter-app.png",
    previewAndCheckout: "https://www.fiverr.com/share/Z6N5d8",
  },
  {
    title: "fiverrConvertUIToFlutterCode",
    content: "",
    bgImage:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/253022824/original/4e9aeeed3bc1a46737e2cb7d0d7c1f534e83022b/convert-adobe-xd-or-figma-ui-to-flutter-code.jpg",
    previewAndCheckout: "https://www.fiverr.com/share/3v2RVm",
  },
  {
    title: "fiverrDevelopFlutterAppWithMongoDBAndFirebase",
    content: "",
    bgImage:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/252883134/original/f45c109765a07a1e48643ee97fddd9246e6c5fd7/be-your-flutter-developer-and-build-your-flutter-app-with-firebase-or-mongodb.jpg",
    previewAndCheckout: "https://www.fiverr.com/share/Q09v6p",
  },
];
export { globalServices, onlineServices };
