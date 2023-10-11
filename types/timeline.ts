export interface TimeLine {
    text?: string | null;
    date?: string | null;
    category?: Category | null;
    link?: Link | null;
  }
  export interface Category {
    tag: string;
    color: string;
  }
  export interface Link {
    url: string;
    text: string;
  }
  