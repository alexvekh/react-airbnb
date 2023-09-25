import { Fragment } from "react";
import Heading from "../heading";
import "./index.css";
import Box from "../box";

export default function Reviews({ guestReviews }) {
  return (
    <div className="reviews__block">
      <Heading>Відгуки клієнтів</Heading>
      <div className="reviews__list">
        {guestReviews.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review">
      <div className="review__header">
        <span className="review__title">{guestName}</span>
        <span className="review__rating"> Рейтинг: {rating} </span>
      </div>
      <div class="review__description"> {review} </div>
    </Box>
  );
}
