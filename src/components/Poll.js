import { Link } from "react-router-dom";
import { formatDate } from "../utils/helper";
import "../../src/index.css";

const Poll = ({ question }) => {
  return (
    
      <div className="poll-list">
        <div className="poll-list-username">@{question.author}</div>
        <div>{"@" + formatDate(question.timestamp)} </div>
        <Link to={`/question/${question.id}`}>
        <button className="show-button">Show</button>
        </Link>
      </div>
    
  );
};

export default Poll;
