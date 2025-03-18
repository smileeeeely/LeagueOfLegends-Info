import { Image, Info } from "@/types/types";

export interface Champion {
  id: string;
  version: string;
  key: string;
  name: string;
  title: string;
  info: Info;
  image: Image;
}
