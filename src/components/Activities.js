import React from "react";
import PropTypes from 'prop-types';
import Activity from './Activity';

/**
 * Get a list of activities
 * @todo: get data from a webservice.
 */
const getActivities = () => ([
  {
    title: 'Activity 1',
  },
  {
    title: 'Activity 2',
  },
]);

export const Activities = props =>  {
  return (
    <div className="activities-list">
      <ul>
        {getActivities().map((item, index) =>
          <Activity key={index} title={item.title} />
        )}
      </ul>
    </div>
  );
};

Activities.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object)
};