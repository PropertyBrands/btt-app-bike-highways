import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'

const Profile = ({ count, increase, decrease }) => {
  return (
    <div>
      Current count: { count }
      Some state changes:
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
    </div>
  )
};

export default connect(
  state => ({ count: state.count }),
  { increase, decrease }
)(Profile)