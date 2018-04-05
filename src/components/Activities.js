import React from 'react'
import { connect } from 'react-redux';
import {Activity} from './Activity';
import {getActivities} from "../actions/activities";
import {LoadingGraphic} from "./LoadingGraphic";

class Activities extends React.Component {
  componentDidMount = () => {
    this.props.getActivities()
  };

  render = () => {
    if(Object.keys(this.props.activities.items).length) {
      return (
        <div className="activities-list">
          <ul>
            {Object.keys(this.props.activities.items).map((item, index) =>
              <Activity key={index} title={this.props.activities.items[item].name} />
            )}
          </ul>
        </div>
      );
    }
    return <LoadingGraphic />
  };
}

export default connect(
  (state) => ({ activities: state.activities }),
  { getActivities }
)(Activities);