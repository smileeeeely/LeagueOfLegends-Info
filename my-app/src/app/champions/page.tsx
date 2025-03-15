import { Champion, ChampionName } from "@/types/champion";
import {
  BASE_URL,
  fetchChampions,
  fetchLatestVersion,
} from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

const Champions = async () => {
  const res: Promise<Champion[]> = await fetchChampions();
  const champions: [ChampionName, Champion][] = Object.entries(res);
  const version = await fetchLatestVersion();
  return (
    <div>
      {champions.map((champion) => {
        return (
          <div key={champion[1].key} className="grid">
            <Link href={`/champions/${champion[1].id}`}>
              <div className="w-30 border border-white-500">
                <Image
                  src={`${BASE_URL}/cdn/${version}/img/champion/${champion[1].image.full}`}
                  alt="이미지"
                  width="100"
                  height="100"
                  priority={true}
                />
                <div>{champion[1].name}</div>
                <div>{champion[1].title}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Champions;
