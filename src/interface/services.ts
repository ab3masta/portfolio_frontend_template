interface GlobalServicesModelInterface {
  title: string;
  content: string;
  animatedIcon: string;
  techLogos?: string[];
}

interface OnlineServicesModelInterface {
  title: string;
  content: string;
  bgImage: string;
  previewAndCheckout: string;
}

export type { GlobalServicesModelInterface, OnlineServicesModelInterface };
