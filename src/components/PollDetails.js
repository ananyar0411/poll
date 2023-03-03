import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Question from "./Question";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollDetails = ({ id, questionValues }) => {
  console.log("questionValues:", questionValues);
  console.log("id:", id);

  let question = questionValues.filter((q) => q.id === id)[0];

  console.log("question:", question);

  return (
    <div>
      <h4>Question Details</h4>
      <Question question={question}></Question>
    </div>
  );
};

const mapStateToProps = ({ questions }, props) => {
  const id = props.router.params.questionId;

  return {
    questionValues: Object.values(questions),
    id,
  };
};

export default withRouter(connect(mapStateToProps)(PollDetails));
