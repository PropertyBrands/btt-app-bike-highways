import React from 'react'
import PropTypes from 'prop-types'

const Activity = ({ title }) => (
  <li>
    <h4>{title}</h4>
  </li>
);

Activity.propTypes = {
  title: PropTypes.string.isRequired
};

export default Activity;