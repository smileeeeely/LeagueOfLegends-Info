import { FETCH_ITEMS_IMG_URL } from "@/_constants/serverApiConstants";
import { Item, ItemKey } from "@/types/Items";
import { fetchItems } from "@/utils/serverApi";
import Image from "next/image";

const Items = async () => {
  const items: [ItemKey, Item][] = await fetchItems();
  const imgUrl = await FETCH_ITEMS_IMG_URL();

  return (
    <div className="container mx-auto mt-10">
      <div className="h-10" />
      <h1 className="text-2xl font-bold mb-4">아이템 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map(([key, item]) => {
          return (
            <div key={key} className="border rounded p-4 hover:shadow-lg">
              <Image
                src={`${imgUrl}${item.image.full}`}
                alt="이미지"
                width="100"
                height="100"
                priority={true}
                className="mx-auto"
              />
              <h2 className="mt-2 text-xl font-semibold">
                {item.name.replace(/<[^>]+>|@\w+@/g, "")}
              </h2>
              <p className="text-gray-500">
                {item.plaintext.replace(/<[^>]+>|@\w+@/g, "")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Items;
