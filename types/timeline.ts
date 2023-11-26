export interface TimeLine {
    title: string;
    text?: string | null;
    date?: string | null;
    tag: string ;
    link?: Link | null;
    image: string;
  }
  
  export interface Link {
    url: string;
    text: string;
  }
  


  