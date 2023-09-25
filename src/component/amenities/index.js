import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import poolIcon from "./pool.svg";
import gymIcon from "./gym.svg";
import breakfastIcon from "./breakfast.svg";
import wifiIcon from "./wifi.svg";
import parkingIcon from "./parking.svg";
import petsIcon from "./pets.svg";
import shuttleIcon from "./shuttle.svg";
import consiergeIcon from "./consierge.svg";
import doorIcon from "./door.svg";
import childIcon from "./child.svg";

export default function Amenities({ title, amenities }) {
  return (
    <Box shadow className="amenities__block">
      <Heading border>{title}</Heading>
      <List {...amenities} />
    </Box>
  );
}

function List({
  hasPool = false,
  hasGym = false,
  hasFreeBreakfast = false,
  hasFreeWiFi = false,
  hasParking = false,
  hasPetsAllowed = false,
  hasAirportShuttle = false,
  hasConciergeService = false,
  hasRoomService = false,
  hasChildFriendly = false,
}) {
  return (
    <ul className="amenities__list">
      {hasPool && (
        <ListItem imageSrc={poolIcon}>
          <span>Басейн</span>
        </ListItem>
      )}
      {hasGym && (
        <ListItem imageSrc={gymIcon}>
          <span>Спортивний зал</span>
        </ListItem>
      )}
      {hasFreeBreakfast && (
        <ListItem imageSrc={breakfastIcon}>
          <span>Безкоштовний Сніданок</span>
        </ListItem>
      )}
      {hasFreeWiFi && (
        <ListItem imageSrc={wifiIcon}>
          <span>Безкоштовний Wi-Fi</span>
        </ListItem>
      )}
      {hasParking && (
        <ListItem imageSrc={parkingIcon}>
          <span>Безкоштовний вуличний паркінг</span>
        </ListItem>
      )}
      {hasPetsAllowed && (
        <ListItem imageSrc={petsIcon}>
          <span>Дозволено розміщеня з домашніми тваринами</span>
        </ListItem>
      )}
      {hasAirportShuttle && (
        <ListItem imageSrc={shuttleIcon}>
          <span>Трансфер до/з аеропорту</span>
        </ListItem>
      )}
      {hasConciergeService && (
        <ListItem imageSrc={consiergeIcon}>
          <span>Консьєрж-сервіс</span>
        </ListItem>
      )}
      {hasRoomService && (
        <ListItem imageSrc={doorIcon}>
          <span>Обслуговування номерів</span>
        </ListItem>
      )}
      {hasChildFriendly && (
        <ListItem imageSrc={childIcon}>
          <span>Підходить для дітей</span>
        </ListItem>
      )}
    </ul>
  );
}
