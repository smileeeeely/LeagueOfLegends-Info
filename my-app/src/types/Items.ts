import { Image } from "@/types/types";

export interface Item {
  name: string;
  plaintext: string;
  image: Image;
}

export type ItemKey = string;
