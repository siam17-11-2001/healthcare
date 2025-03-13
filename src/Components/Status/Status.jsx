import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Status = ({ item, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { status, _id } = item;

  const handleStatus = (newStatus) => {
    console.log(newStatus);
    const { data } = axiosSecure.patch(`/status/${_id}`, { status: newStatus });
    console.log(data);
    refetch();
  };

  return (
    <div>
      <select
        onChange={(e) => handleStatus(e.target.value)}
        className="select select-bordered w-full"
        defaultValue={status}
      >
        <option>pending</option>
        <option>paid</option>
      </select>
    </div>
  );
};

export default Status;
