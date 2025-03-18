import { Champion } from "@/types/champion";
import { fetchChampions } from "@/utils/serverApi";
import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
  const res = await fetch(
    "https://br1.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY!,
      },
    }
  );
  const rotationData = await res.json();
  const championsData: Champion[] = await fetchChampions();
  const filteredRotationData: Champion[] = championsData.filter((champion) =>
    rotationData.freeChampionIds.includes(parseInt(champion.key))
  );
  return NextResponse.json(filteredRotationData);
};
