import { Item, ItemKey } from "@/types/Items";
import { BASE_URL, fetchItems, fetchLatestVersion } from "@/utils/serverApi";
import Image from "next/image";

const Items = async () => {
  const items: [ItemKey, Item][] = await fetchItems();
  const version = await fetchLatestVersion();

  return (
    <div className="flex flex-col">
      {items.map(([key, item]) => {
        return (
          <div key={key} className="grid">
            <div className="w-20 border border-white-500">
              <Image
                src={`${BASE_URL}/cdn/${version}/img/item/${item.image.full}`}
                alt="이미지"
                width="100"
                height="100"
                priority={true}
              />
              <div>{item.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Items;
