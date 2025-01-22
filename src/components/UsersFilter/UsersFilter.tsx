import { User } from "../../types/types";
import CommonFilter from "../CommonFilter/CommonFilter";

interface Props {
  users: User[];
}
// Users
const UsersFilter = ({ users }: Props) => {
  const userFilters = {
    all: () => true,
    hasPhone: (user: User) => !!user.phone,
    hasWebsite: (user: User) => !!user.website,
  };

  return (
    <CommonFilter<User>
      data={users}
      filters={userFilters}
      renderItem={(user: User) => <li key={user.id}>{user.name}</li>}
    />
  );
};

export default UsersFilter;
