import React from "react";
import "./TitleCard.css";

const ItemCard = ({ item }) => {
  return (
    <div className="slider-item">
      <div className="title-card-container ltr-0">
        <div id={`title-card-${item.id}`} className="title-card">
          <div
            className="ptrack-content"
            data-ui-tracking-context={JSON.stringify(item.trackingContext)}
          >
            <a
              href={item.link}
              role="link"
              aria-label={item.title}
              tabIndex="0"
              className="slider-refocus"
            >
              <div className="boxart-container boxart-rounded boxart-size-16x9">
                <img
                  className="boxart-image boxart-image-in-padded-container"
                  src={item.image}
                  alt={item.title}
                />
                <div className="fallback-text-container" aria-hidden="true">
                  <p className="fallback-text">{item.title}</p>
                </div>
              </div>
            </a>
          </div>
          <div className="bob-container"></div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
