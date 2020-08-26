import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";

/** Carousel
 * 
 * Props:
 * - cardData: [{src, caption}, {...}, ...]
 * - title
 * 
 * State:
 * - cardIdx CR: describe the initial state
 * 
 * App => Carousel => Card
 */
function Carousel(props) {
  const [cardIdx, setCardIdx] = useState(0); //creating a state for card index, starting at 0
  const card = props.cardData[cardIdx]; //get the card matching the state index
  const total = props.cardData.length;
  // const goForward = () => setCardIdx(cardIdx === total - 1 ? 1 : cardIdx + 1); //goForward() increments the cardIdx state by 1
  // const goBack = () => setCardIdx(cardIdx === 0 ? total - 1 : cardIdx - 1); //goForward() increments the cardIdx state by 1
  const goForward = () => setCardIdx(cardIdx + 1); //revised approach to remove arrows
  const goBack = () => setCardIdx(cardIdx - 1);

  //CR: less in the return, the better. Alternative would be to use CSS - create
  //put the condition outside the return, and then include variable within the className
  //if you did go with && route, create a variable and input with the condition
  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        {cardIdx > 0 && <i
          className="fas fa-chevron-circle-left fa-2x"
          onClick={goBack}
          data-testid="left-arrow"
        />}
        <Card
          caption={card.caption}
          src={card.src} //this is the image
          currNum={cardIdx + 1}
          totalNum={total}
        />
        {cardIdx < total-1 && <i
          className="fas fa-chevron-circle-right fa-2x"
          onClick={goForward}
          data-testid="right-arrow"
        />}
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash"
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash"
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash"
    }
  ],
  title: "Shells from far away beaches."
};

export default Carousel;
