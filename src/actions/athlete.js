const url = "https://www.strava.com/api/v3/athlete";

export const REQUEST_ATHLETE = 'REQUEST_ATHLETE';
const requestAthlete = () => {
  return {
    type: REQUEST_ATHLETE,
  }
};

export const RECEIVE_ATHLETE = 'RECEIVE_ATHLETE';
const receiveAthlete = (athlete) => {
  return {
    type: RECEIVE_ATHLETE,
    athlete,
  }
};

export const getAthlete = () => {
 return (dispatch) => {
   dispatch(requestAthlete());
   const headers = new Headers();
   headers.append("Content-Type", "application/json");
   headers.append("Authorization", `Bearer ${process.env.STRAVA_ACCESS_TOKEN}`);
   return fetch(url, { headers })
     .then((response) => response.json())
     .then((json) => {
       dispatch(receiveAthlete(json))
     });
  }
};