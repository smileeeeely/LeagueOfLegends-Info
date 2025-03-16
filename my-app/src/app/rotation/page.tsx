"use client";

import { Champion } from "@/types/champion";
import { getChampionRotation } from "@/utils/riotApi";
import { BASE_URL } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// import { useRotation } from "@/utils/riotApi";

const Rotation = () => {
  const [rotationChampions, setRotationChampions] = useState<Champion[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Champion[] = await getChampionRotation();
      setRotationChampions(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {rotationChampions.map((champion) => {
        return (
          <div key={champion.key}>
            <Link href={`/champions/${champion.id}`}>
              <div className="w-30 border border-white-500">
                <Image
                  src={`${BASE_URL}/cdn/${champion.version}/img/champion/${champion.image.full}`}
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

export default Rotation;
