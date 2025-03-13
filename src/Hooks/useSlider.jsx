import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import Loading from "../Components/Loading/Loading";
const useSlider = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: slider = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["slider"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/slider/add");
      return data;
    },
  });
  return [slider, refetch];
};

export default useSlider;
