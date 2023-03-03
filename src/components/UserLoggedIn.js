import { connect } from "react-redux";
import "../../src/index.css"

const UserLoggedIn = ({ authedUser }) => {
  return (
    <div>
      <h1 className="user-logged-in">Polls for: @{authedUser}</h1>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser,
});

export default connect(mapStateToProps)(UserLoggedIn);
