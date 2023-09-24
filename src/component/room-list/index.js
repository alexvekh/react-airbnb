import { Fragment } from "react";
import Heading from "../heading";
import "./index.css";
import Box from "../box";

export default function RoomList({ roomTypes }) {
  return (
    <div className="room__block">
      <Heading border>Типи номерів</Heading>
      <div className="room__list">
        {roomTypes.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ type, pricePerNight: price, currency, capacity }) {
  return (
    <Box className="room">
      <div className="room__title">{type}</div>
      <div className="room__info"> Кількість гостей: {capacity} </div>
      <div class="room__price">
        {currency}
        {price}
      </div>
    </Box>
  );
}
