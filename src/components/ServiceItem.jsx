import React from 'react';
import PropTypes from 'prop-types';

function ServiceItem({ img, title, description }) {
  return (
    <div className='service-card'>
      <img src={img} alt="service icon" />
      <h1>{title}</h1>
      <h1>{description}</h1>
    </div>
  );
}

ServiceItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceItem;
