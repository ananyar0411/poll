import { connect } from "react-redux";
import Poll from "./Poll.js";
import { userVoted } from "../utils/helper.js";
import { useState } from "react";
import "../../src/index.css"

const PollList = ({ questionValues, authedUser }) => {
  const [selectionTodoDone, setSelectionTodoDone] = useState("todo");

  const handleOnChangeSelection = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    console.log("newValue: ", newValue);
    setSelectionTodoDone(newValue);
    console.log("selectionTodoDone: ", selectionTodoDone);
  };

  let questionsDone = questionValues.filter((question) => {
    return userVoted(question, authedUser);
  });

  let questionsTodo = questionValues.filter((question) => {
    return !userVoted(question, authedUser);
  });

  const filterQuestions = () => {
    console.log("selectionTodoDone in : ", selectionTodoDone);
    if (selectionTodoDone === "todo") {
      return questionsTodo;
    } else if (selectionTodoDone === "done") {
      return questionsDone;
    }
  };

  let questionsToDisplay = filterQuestions();

  return (
    <div>
      <h2 className="poll-list-heading">Poll List</h2>

      <select className="box" onChange={handleOnChangeSelection} value={selectionTodoDone}>
        <option key="todo" value="todo">
          Questions to be voted
        </option>
        <option key="done" value="done">
          Questions voted!
        </option>
      </select>

      <ul className="question-list">
        {questionsToDisplay.map((question) => {
          return <Poll question={question} key={question.id}/>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ questions, authedUser }) => ({
  questionValues: Object.values(questions),
  authedUser,
});

export default connect(mapStateToProps)(PollList);
