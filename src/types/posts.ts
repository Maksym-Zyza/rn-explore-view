export type Coords = { latitude: number; longitude: number };

export type Post = {
  photo: string;
  title: string;
  place: string;
  coords?: Coords;
};

export type PostReq = {
  id: string;
  photo?: string | null;
  title: string;
  place: string;
  location?: Coords;
};

export type PostKey = "photo" | "title" | "place";
