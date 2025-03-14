import { Champion, ChampionName } from "@/types/Champion";
import { fetchChampions, fetchLatestVersion } from "@/utils/serverApi";
import Image from "next/image";

const Champions = async () => {
  const res: Promise<Champion[]> = await fetchChampions();
  const champions: [ChampionName, Champion][] = Object.entries(res);
  const version = await fetchLatestVersion();
  console.log("champions", champions[0]);
  return (
    <div>
      {champions.map((champion) => {
        return (
          <div key={champion[1].key} className="grid">
            <div className="w-30 border border-white-500">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion[1].image.full}`}
                alt="이미지"
                width="100"
                height="100"
                priority={true}
              />
              <div>{champion[1].name}</div>
              <div>{champion[1].title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Champions;
