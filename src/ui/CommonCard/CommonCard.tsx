interface CardProps {
  renderHeader: () => React.ReactNode;
  renderBody: () => React.ReactNode;
}
// Принцип Барбары Лисков (LSP — Liskov Substitution Principle)
const Card: React.FC<CardProps> = ({ renderHeader, renderBody }) => (
  <div className="card">
    <h3>{renderHeader()}</h3>
    <p>{renderBody()}</p>
  </div>
);

export default Card;
