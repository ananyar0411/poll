import { connect } from "react-redux";
import "../../src/index.css"

const Leaderboard = ({ users }) => {
  let data = [];
	for (const user in users) {
		data.push({
			name: users[user].name,
			answers: Object.keys(users[user].answers).length,
			questions: users[user].questions.length,
      totalQuestions: users[user].questions.length + Object.keys(users[user].answers).length
		});
	}
	data.sort((a, b) => b.totalQuestions - a.totalQuestions);
  console.log("data", data);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => {
            return (
              <tr key={d.name}>
                <td>{d.name}</td>
                <td>{d.answers}</td>
                <td>{d.questions}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(Leaderboard);
