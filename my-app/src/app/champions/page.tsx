import { Champion } from "@/types/champion";
import {
  BASE_URL,
  fetchChampions,
  fetchLatestVersion,
} from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

const Champions = async () => {
  const res: Champion[] = await fetchChampions();
  const champions: Champion[] = res;
  const version = await fetchLatestVersion();

  return (
    <div>
      {champions.map((champion) => {
        return (
          <div key={champion.key} className="grid">
            <Link href={`/champions/${champion.id}`}>
              <div className="w-30 border border-white-500">
                <Image
                  src={`${BASE_URL}/cdn/${version}/img/champion/${champion.image.full}`}
                  alt="이미지"
                  width="100"
                  height="100"
                  priority={true}
                />
                <div>{champion.name}</div>
                <div>{champion.title}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Champions;
