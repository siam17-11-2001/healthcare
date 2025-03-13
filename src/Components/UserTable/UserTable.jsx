import useAxiosSecure from "../../Hooks/useAxiosSecure";

const UserTable = ({ user, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { email, name, role, image, status } = user || {};
  console.log(email, name, role, image, status);

  const handleUpdate = async (selectedRole) => {
    if (role === selectedRole) return;
    const { data } = await axiosSecure.patch(`/role/${email}`, {
      role: selectedRole,
    });
    console.log(data);
    refetch();
  };
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td className="font-bold">{role}</td>
      <th className="w-[220px]">
        <select
          onChange={(event) => handleUpdate(event.target.value)}
          defaultValue={role}
          className="select select-accent w-full"
        >
          <option disabled>Update Role</option>
          <option value="admin">admin</option>
          <option value="seller">seller</option>
          <option value="user">user</option>
        </select>
      </th>
    </tr>
  );
};

export default UserTable;
