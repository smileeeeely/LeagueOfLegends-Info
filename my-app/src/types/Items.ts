import { Image, Stats } from "@/utils/types";

export interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  specialRecipe: string;
  image: Image;
  gold: object;
  tags: [string];
  maps: object;
  stats: Stats;
}

export type ItemName = string;
