import React, {Fragment} from "react";
import PropTypes from "prop-types";

const FavoriteButtonContent = ({isFavorite, buttonProperty}) => {
  const {styleClass, width, height} = buttonProperty;
  return (
    <Fragment>
      <svg className={`${styleClass}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{isFavorite ? `In` : `To`} bookmarks</span>
    </Fragment>
  );
};

FavoriteButtonContent.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  buttonProperty: PropTypes.exact({
    styleClass: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteButtonContent;
