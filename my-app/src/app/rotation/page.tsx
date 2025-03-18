"use client";

import Image from "next/image";
import Link from "next/link";

import { useRotation } from "@/utils/riotApi";
import { BASE_URL } from "@/_constants/serverApiConstants";

const Rotation = () => {
  const { data: rotationChampions, isPending, isError } = useRotation();
  if (isPending) {
    return <div>데이터 불러오는 중...</div>;
  }

  if (isError) {
    return <div>페이지에 문제가 생겼습니다</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="h-10" />
      <h1 className="text-2xl font-bold mb-4">
        챔피언 로테이션(이번주 무료로 플레이 할 수 있어요!)
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {rotationChampions.map((champion) => {
          return (
            <Link
              href={`/champions/${champion.id}`}
              key={champion.key}
              className="border rounded p-4 hover:shadow-lg"
            >
              <div>
                <Image
                  src={`${BASE_URL}/cdn/${champion.version}/img/champion/${champion.image.full}`}
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

export default Rotation;
