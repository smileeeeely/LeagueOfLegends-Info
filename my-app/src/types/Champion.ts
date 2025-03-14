import { Image, Info, Stats } from "@/utils/types";

export interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: Info;
  image: Image;
  tags: [string];
  partype: string;
  stats: Stats;
}

export type ChampionName = string;
