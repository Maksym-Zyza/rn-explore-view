export type Post = {
  photo: string;
  title: string;
  place: string;
  coords?: string;
};

export type PostKey = "photo" | "title" | "place";
