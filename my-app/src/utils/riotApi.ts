import { useQuery } from "@tanstack/react-query";

//? TQ HOW???
// export const useRotation = () => {
//   return useQuery({
//     queryKey: ["rotation"],
//     queryFn: async () => {
//       getChampionRotation;
//     },
//   });
// };

export const getChampionRotation = async () => {
  const res = await fetch("http://localhost:3000/api/rotation");
  const data = await res.json();

  return data;
};
