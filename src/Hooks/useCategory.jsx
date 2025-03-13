import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCategory = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: category = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/allCategory");
      return data;
    },
  });
  return [category, isLoading, refetch];
};

export default useCategory;
