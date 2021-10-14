export interface Book {
  _id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
}

export interface ResponseBook {
  data: Book[];
}
