"use server";
import {
  FETCH_CHAMPION_DETAIL_URL,
  FETCH_CHAMPIONS_URL,
  FETCH_ITEMS_URL,
} from "@/_constants/serverApiConstants";
import { ParamsId } from "@/app/champions/[id]/page";
import { Champion } from "@/types/champion";
import { ChampionDetail } from "@/types/championDetail";
import { Item, ItemKey } from "@/types/Items";

// 아이템 목록을 가져오는 함수
export const fetchItems = async (): Promise<[ItemKey, Item][]> => {
  const url = await FETCH_ITEMS_URL();
  const res = await fetch(url, { cache: "force-cache" });
  const { data } = await res.json();
  const dataWithKey = Object.entries(data);

  return dataWithKey as [ItemKey, Item][];
};

// 챔피언 목록을 가져오는 함수
export const fetchChampions = async (): Promise<Champion[]> => {
  const url = await FETCH_CHAMPIONS_URL();
  const res = await fetch(url, { next: { revalidate: 86400 } });
  const { data } = await res.json();
  return Object.values(data);
};

// 디테일 페이지의 챔피언 정보를 가져오는 함수
export const fetchChampionDetail = async ({ name }: { name: ParamsId }) => {
  const url = await FETCH_CHAMPION_DETAIL_URL(name);
  const res = await fetch(url);
  const { data } = await res.json();
  return data[name] as ChampionDetail;
};
