import { FETCH_CHAMPION_IMG_URL } from "@/_constants/serverApiConstants";
import { Champion } from "@/types/champion";
import { fetchChampions } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "리그 오브 레전드 정보 앱",
  description: "Riot Games API를 활용하여 챔피언 정보를 제공합니다",
};

const Champions = async () => {
  const res: Champion[] = await fetchChampions();
  const champions: Champion[] = res;
  const imgUrl = await FETCH_CHAMPION_IMG_URL();

  return (
    <div className="container mx-auto mt-10">
      <div className="h-10" />
      <h1 className="text-2xl font-bold mb-4">챔피언 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {champions.map((champion) => {
          return (
            <Link
              key={champion.key}
              href={`/champions/${champion.id}`}
              className="border rounded p-4 hover:shadow-lg"
            >
              <div>
                <Image
                  src={`${imgUrl}${champion.image.full}`}
                  alt="이미지"
                  width="100"
                  height="100"
                  priority={true}
                  className="mx-auto"
                />
                <h2 className="mt-2 text-xl font-semibold">{champion.name}</h2>
                <p className="text-gray-500">{champion.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Champions;
