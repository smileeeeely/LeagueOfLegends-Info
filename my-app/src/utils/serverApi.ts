const LANGUAGE_KOR = "ko_KR";

type VersionData = string;

export const fetchLatestVersion = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const data: VersionData[] = await res.json();
  return data[0];
};

export const fetchItems = async () => {
  const version = await fetchLatestVersion();
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/${LANGUAGE_KOR}/item.json`,
    { cache: "force-cache" }
  );
  const { data } = await res.json();
  return data;
};

export const fetchChampions = async () => {
  const version = await fetchLatestVersion();
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/${LANGUAGE_KOR}/champion.json`,
    { next: { revalidate: 86400 } }
  );
  const { data } = await res.json();
  return data;
};
