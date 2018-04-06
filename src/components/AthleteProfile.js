import React from 'react'
import { connect } from 'react-redux';
import {getAthlete} from "../actions/athlete";
import {LoadingGraphic} from "./LoadingGraphic";

const Profile = (props) => {
  return (<div>
    <h4>{ props.profile.username }</h4>
    <div>
      <span>{props.profile.city},&nbsp;</span>
      <span>{props.profile.state}</span>
    </div>
  </div>)
};

class AthleteProfile extends React.Component {
  constructor (props) {
    super(props);
    props.getAthlete()
  };

  hasProfile = () => {
    return !!this.props.athlete.profile
  };

  render = () => {
    if(this.hasProfile()) {
      return <Profile profile={this.props.athlete.profile} />
    }
    return <LoadingGraphic />
  };
}

export default connect(
  (state) => ({ athlete: state.athlete }),
  { getAthlete }
)(AthleteProfile);