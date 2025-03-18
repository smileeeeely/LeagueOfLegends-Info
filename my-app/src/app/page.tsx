import Image from "next/image";
import Link from "next/link";
import championListImg from "@images/images/championList.png";
import itemsImg from "@images/images/items.png";
import rotationImg from "@images/images/rotation.png";

const Home = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="h-10" />
      <div className="text-center">
        <h1 className="text-3xl font-bold">리그 오브 레전드 정보 앱</h1>
        <p className="mt-4 text-gray-500">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다
        </p>
        <div className="mt-[40px] flex flex-col justify-center gap-10">
          <div className="flex flex-col justify-center gap-10">
            <Link
              href="/champions"
              className="flex flex-col justify-center items-center gap-5 text-amber-400"
            >
              <Image
                src={championListImg}
                alt="championListImage"
                width={400}
                height={400}
                className="mx-auto w-auto h-auto"
                priority
              />
              챔피언 목록 보기
            </Link>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <Link
              href="/champions"
              className="flex flex-col justify-center items-center gap-5 text-amber-400"
            >
              <Image
                src={itemsImg}
                alt="championListImage"
                width={400}
                height={400}
                className="mx-auto w-auto h-auto"
                priority
              />
              금주 로테이션 확인
            </Link>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <Link
              href="/champions"
              className="flex flex-col justify-center items-center gap-5 text-amber-400"
            >
              <Image
                src={rotationImg}
                alt="championListImage"
                width={400}
                height={400}
                className="mx-auto w-auto h-auto"
                priority
              />
              아이템 목록 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
