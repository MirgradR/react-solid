import { User } from "../../types/types";
import AdminActions from "../AdminActions/AdminActions";
import GuestActions from "../GuestActions/GuestActions";
import SubscriberActions from "../SubscriberActions/SubscriberActions";

interface Props {
  user: User;
  role: "admin" | "subscriber" | "guest";
}
// Принцип разделения интерфейса (Interface Segregation Principle, ISP)
const UserPanel = ({ user, role }: Props) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      {role === "admin" && <AdminActions />}
      {role === "subscriber" && <SubscriberActions />}
      {role === "guest" && <GuestActions />}
    </div>
  );
};

export default UserPanel;
