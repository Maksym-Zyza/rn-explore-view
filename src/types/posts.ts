export type Post = {
  photo: string;
  title: string;
  place: string;
  coords?: { latitude: number; longitude: number };
};

export type PostKey = "photo" | "title" | "place";
