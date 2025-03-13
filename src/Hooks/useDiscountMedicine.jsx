// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./useAxiosPublic";

// const useDiscountMedicine = () => {
//   const axiosPublic = useAxiosPublic();
//   const { data: discount = [] } = useQuery({
//     queryKey: ["discount"],
//     queryFn: async () => {
//       const res = await axiosPublic.get("/discountMedicine");
//       return res.data;
//     },
//   });
//   return [discount];
// };

// export default useDiscountMedicine;
