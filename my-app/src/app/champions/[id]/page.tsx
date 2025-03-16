import { ChampionDetail } from "@/types/championDetail";
import {
  BASE_URL,
  fetchChampionDetail,
  fetchLatestVersion,
} from "@/utils/serverApi";
import Head from "next/head";
import Image from "next/image";

export type ParamsId = string;
const ChampionDetailPage = async ({ params }: { params: { id: string } }) => {
  const championName: ParamsId = params.id.toString();
  const championData = await fetchChampionDetail({
    name: championName,
  });

  const version = await fetchLatestVersion();

  return (
    <div>
      <Head>
        <title>{championData.name}</title>
        <meta name="description" content={championData.lore} />
      </Head>
      <Image
        src={`${BASE_URL}/cdn/${version}/img/champion/${championData.image.full}`}
        alt="이미지"
        width="100"
        height="100"
        priority={true}
      />
      <p>{championData.lore}</p>
      <h3>스탯</h3>
      <li>공격력: {championData.info.attack}</li>
      <li>방어력: {championData.info.defense}</li>
      <li>마법력: {championData.info.magic}</li>
      <li>난이도: {championData.info.difficulty}</li>
    </div>
  );
};

export default ChampionDetailPage;
