interface opts {
  sliderList: slider[];
  container: HTMLElement;
  title?: HTMLElement;
  content?: HTMLElement;
  link?: HTMLElement;
}

interface slider {
  title: string;
  content: string;
  link?: string;
  imgLink: string;
}

declare const opts: opts;
declare const slider: slider;
