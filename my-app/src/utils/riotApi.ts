import { Champion } from "@/types/champion";
import { useQuery } from "@tanstack/react-query";

export const useRotation = () => {
  return useQuery<Champion[]>({
    queryKey: ["rotation"],
    queryFn: getChampionRotation,
  });
};

export const getChampionRotation = async () => {
  const res = await fetch("/api/rotation");
  const data: Champion[] = await res.json();

  return data;
};
