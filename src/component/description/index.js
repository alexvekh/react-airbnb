import Heading from "../heading";
import "./index.css";

export default function Description({ title, children }) {
  return (
    <div className="description__block">
      <Heading>{title}</Heading>
      <div className="description__text">{children}</div>
    </div>
  );
}
