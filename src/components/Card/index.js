import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ imageSrc }) => {
  return (
    <div className="card">
      <picture className="thumbnail">
        <img src={imageSrc} alt="" />
      </picture>
    </div>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string,
};

Card.defaultProps = {
  imageSrc: '',
};

export default Card;
