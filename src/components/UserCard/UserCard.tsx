import { User } from "../../types/types";
import Card from "../../ui/CommonCard/CommonCard";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <Card renderHeader={() => user.name} renderBody={() => user.phone} />
);

export default UserCard;
