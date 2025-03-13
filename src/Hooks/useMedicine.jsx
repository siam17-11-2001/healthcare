import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMedicine = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: medicine = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["medicine"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allMedicine");
      return res.data;
    },
  });
  return [medicine, loading, refetch];
};

export default useMedicine;
