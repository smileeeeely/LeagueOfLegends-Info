import { Item, ItemName } from "@/types/Items";
import { fetchItems, fetchLatestVersion } from "@/utils/serverApi";
import Image from "next/image";

const Items = async () => {
  const res: Promise<Item[]> = await fetchItems();
  const items: [ItemName, Item][] = Object.entries(res);
  const version = await fetchLatestVersion();

  return (
    <div className="flex flex-col">
      {items.map((item) => {
        return (
          <div key={item[0]} className="grid">
            <div className="w-20 border border-white-500">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item[1].image.full}`}
                alt="이미지"
                width="100"
                height="100"
                priority={true}
              />
              <div>{item[1].name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Items;
