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
                  src={`${BASE_URL}/cdn/${version}/img/champion/${champion.image.full}`}
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
