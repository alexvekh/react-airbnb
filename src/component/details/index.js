import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import guestsIcon from "./guests.svg";
import bedroomsIcon from "./bedrooms.svg";
import bedsIcon from "./beds.svg";
import bathsIcon from "./baths.svg";

export default function Details({ title, property_details }) {
  return (
    <Box shadow className="details__block">
      <Heading border>{title}</Heading>
      <List {...property_details} />
    </Box>
  );
}

function List({ guests = 0, bedrooms = 0, beds = 0, baths = 0 }) {
  return (
    <ul className="details__list">
      <ListItem imageSrc={guestsIcon}>
        <span>{guests}</span>
        <span>гості</span>
      </ListItem>
      <ListItem imageSrc={bedroomsIcon}>
        <span>{bedrooms}</span>
        <span>сальня</span>
      </ListItem>
      <ListItem imageSrc={bedsIcon}>
        <span>{beds}</span>
        <span>ліжко</span>
      </ListItem>
      <ListItem imageSrc={bathsIcon}>
        <span>{baths}</span>
        <span>ванна кімната</span>
      </ListItem>
    </ul>
  );
}
