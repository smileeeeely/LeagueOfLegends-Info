import { Champion } from "@/types/champion";
import { fetchChampions } from "@/utils/serverApi";
import { NextResponse } from "next/server";

export const GET = async () => {
  const FETCH_URL =
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";
  try {
    const res = await fetch(FETCH_URL, {
      headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY!,
      },
    });
    if (!res) {
      return NextResponse.json({
        message: "로테이션 챔피언 정보를 찾을 수 없습니다",
      });
    }

    const rotationData = await res.json();
    const championsData: Champion[] = await fetchChampions();
    const filteredRotationData: Champion[] = championsData.filter((champion) =>
      rotationData.freeChampionIds.includes(parseInt(champion.key))
    );
    return NextResponse.json(filteredRotationData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: JSON.stringify(error) });
  }
};
