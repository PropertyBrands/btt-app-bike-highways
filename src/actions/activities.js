const url = "https://www.strava.com/api/v3/athlete/activities";

export const REQUEST_ACTIVITIES = 'REQUEST_ACTIVITIES';
const requestActivities = () => {
  return {
    type: REQUEST_ACTIVITIES,
  }
};

export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES';
const receiveActivities = (activities) => {
  return {
    type: RECEIVE_ACTIVITIES,
    activities,
  }
};

export const getActivities = () => {
  return (dispatch) => {
    dispatch(requestActivities());
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${process.env.STRAVA_ACCESS_TOKEN}`);
    return fetch(url, { headers })
      .then((response) => response.json())
      .then((json) => {
        dispatch(receiveActivities(json))
      });
  }
}