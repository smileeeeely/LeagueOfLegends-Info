import { FETCH_CHAMPION_IMG_URL } from "@/_constants/serverApiConstants";
import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";

export type ParamsId = string;

export const generateMetadata = ({ params }: { params: { id: string } }) => {
  return {
    title: `${params.id} - My Riot App`,
    description: `Detail 페이지 : ${params.id}`,
  };
};

const ChampionDetailPage = async ({ params }: { params: { id: string } }) => {
  const championName: ParamsId = params.id.toString();
  const championData = await fetchChampionDetail({
    name: championName,
  });

  const imgUrl = await FETCH_CHAMPION_IMG_URL();

  return (
    <div className="container mx-auto mt-10">
      <div className="h-10" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{championData.name}</h1>
        <h2 className="text-2xl text-gray-600 mb-4">{championData.title}</h2>
        <Image
          src={`${imgUrl}${championData.image.full}`}
          alt="이미지"
          width="200"
          height="200"
          priority={true}
          className="mx-auto"
        />
        <p className="mt-4">{championData.lore}</p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">스탯</h3>
          <ul className="list-disc list-inside">
            <li>공격력: {championData.info.attack}</li>
            <li>방어력: {championData.info.defense}</li>
            <li>마법력: {championData.info.magic}</li>
            <li>난이도: {championData.info.difficulty}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChampionDetailPage;
