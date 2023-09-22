import "./index.css";

export default function Title({ src, name }) {
  return <img src={src} alt={name} className="photo" />;
}
