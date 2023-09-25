import Heading from "../heading";
import "./index.css";
//import Person from "./person.svg";

export default function Contacts({ name, title, contactImage, response_rate, response_time, phone, info }) {
  return (
    <div className="contact">
      <div className="contact__header">
        <img className="contact__picture" src={contactImage} alt={name} />
        <div className="contact__title">
          <Heading>{title}</Heading>
          <div className="contact__info">
            <span className="title__sub-value">{phone} рейтинг</span>
            <span className="title__sub-value">{response_time} рейтинг</span>
            <span className="title__sub-value">{response_rate} рейтинг</span>
          </div>
        </div>
      </div>
      <div className="contact__description">{info}</div>
    </div>
  );
}
