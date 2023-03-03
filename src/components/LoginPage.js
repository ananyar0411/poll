import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";
import "../../src/index.css";

const LoginPage = ({ userValues, dispatch, authedUser }) => {
  const navigate = useNavigate();

  const handleOnChangeUser = (e) => {
    e.preventDefault();
    let username = e.target.value;
    dispatch(setAuthedUser(username));
    navigate("/");
  };

  return (
    <div>
      <h2 className="login-page">Login Page</h2>
      <select className="select-user" onChange={handleOnChangeUser} value={authedUser}>
        {userValues.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => ({
  userValues: Object.values(users),
  authedUser: authedUser,
});

export default connect(mapStateToProps)(LoginPage);
