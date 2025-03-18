import { ParamsId } from "@/app/champions/[id]/page";

export const LANGUAGE_KOR = "ko_KR";
export const BASE_URL = "https://ddragon.leagueoflegends.com";

export type VersionData = string;

// 최신 버전을 가져오는 함수
export const fetchLatestVersion = async () => {
  const res = await fetch(`${BASE_URL}/api/versions.json`);
  const data: VersionData[] = await res.json();
  return data[0];
};

// 아이템 정보를 받아오기 위한 url을 반환하는 함수
export const FETCH_ITEMS_URL = async (): Promise<string> => {
  const version = await fetchLatestVersion();
  return `${BASE_URL}/cdn/${version}/data/${LANGUAGE_KOR}/item.json`;
};

// 챔피언 정보를 받아오기 위한 url을 반환하는 함수
export const FETCH_CHAMPIONS_URL = async (): Promise<string> => {
  const version = await fetchLatestVersion();
  return `${BASE_URL}/cdn/${version}/data/${LANGUAGE_KOR}/champion.json`;
};

// 챔피언 디테일 정보를 받아오기 위한 url을 반환하는 함수
export const FETCH_CHAMPION_DETAIL_URL = async (
  name: ParamsId
): Promise<string> => {
  const version = await fetchLatestVersion();
  return `${BASE_URL}/cdn/${version}/data/${LANGUAGE_KOR}/champion/${name}.json`;
};

// 챔피언 이미지를 받아오기 위한 url을 반환하는 함수
export const FETCH_CHAMPION_IMG_URL = async () => {
  const version = await fetchLatestVersion();
  return `${BASE_URL}/cdn/${version}/img/champion/`;
};

// 아이템 이미지를 받아오기 위한 url을 반환하는 함수
export const FETCH_ITEMS_IMG_URL = async () => {
  const version = await fetchLatestVersion();
  return `${BASE_URL}/cdn/${version}/img/item/`;
};
