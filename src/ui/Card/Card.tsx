import { User } from "../../types/types";

interface Props {
  data: User;
}
// Принцип Барбары Лисков (LSP — Liskov Substitution Principle)
// Базовый компонент карточки
const Card = ({ data }: Props) => (
  <div className="card">
    <h3>{data.name}</h3>
    <p>{data.phone}</p>
  </div>
);

export default Card;
