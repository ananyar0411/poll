import { connect } from "react-redux";
import { userVoted } from "../utils/helper";
import { handleSaveQuestionAnswer } from "../actions/shared";
import "../../src/index.css"


const Question = ({ dispatch, question, usersValues, authedUser }) => {
  let questionAuthor = question.author;
  console.log(questionAuthor);

  let user = usersValues.filter((u) => {
    return u.id === questionAuthor;
  });

  let canVote = !userVoted(question, authedUser);

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(handleSaveQuestionAnswer(authedUser, question.id, e.target.value));
  };

  return (
    <div className="question-details">
      <div>
        <p className="poll-by">{"Poll by: @" + questionAuthor}</p>
        <br></br>
        <img
          src={user.avatarURL}
          alt={`Avatar of ${questionAuthor}`}
          className="avater-displayed"
        />
      </div>
      <br></br>
      <div className="question-displayed">
        <div>
          <div className="question">Would you rather?</div>
          <div>
            <div>
              <p className="options-for-questions">{question.optionOne.text}</p>
              <ul className="voted-by"> Voted By:
                {question.optionOne.votes.map((v) => {
                  return <li key={v}>@{v}</li>;
                })}
              </ul>
          <span>OR</span>
          <p className="options-for-questions">{question.optionTwo.text}</p>
          <ul className="voted-by"> Voted By:
            {question.optionTwo.votes.map((v) => {
              return <li key={v}>@{v}</li>;
            })}
          </ul>
        </div>
      </div>
      <div>
        {canVote ? (
          <div>
            <button className="options"onClick={handleOnClick} value="optionOne">
              Option 1
            </button>
            <button className="options" onClick={handleOnClick} value="optionTwo">
              Option 2
            </button>
          </div>) : (<div>Already Voted!</div>)}
          </div>
        </div>
      </div>
    </div>
  ) 
};

const mapStateToProps = ({ users, authedUser }) => {
  return {
    usersValues: Object.values(users),
    authedUser,
  };
};

export default connect(mapStateToProps)(Question);
