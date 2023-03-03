export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export const userVoted = (question, authedUser) => {
  var inOptionOne = question["optionOne"]["votes"].indexOf(authedUser) > -1;
  var inOptionTwo = question["optionTwo"]["votes"].indexOf(authedUser) > -1;

  return inOptionOne || inOptionTwo;
};
