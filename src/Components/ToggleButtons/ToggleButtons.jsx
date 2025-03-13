import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ToggleButtons = ({ item, refetch }) => {
  const { _id, status } = item;
  const axiosSecure = useAxiosSecure();
  const handleUpdate = async (newStatus) => {
    if (status === newStatus) return;
    const { data } = await axiosSecure.patch(`/updateStatus/${_id}`, {
      status: newStatus,
    });
    console.log(data);
    refetch();
  };
  return (
    <div>
      <th className="w-[220px]">
        <select
          onChange={(event) => handleUpdate(event.target.value)}
          defaultValue={status}
          className="select select-accent w-full"
        >
          <option disabled>Update Role</option>
          <option value="pending">pending</option>
          <option value="add">add</option>
          <option value="remove">remove</option>
        </select>
      </th>
    </div>
  );
};

export default ToggleButtons;
