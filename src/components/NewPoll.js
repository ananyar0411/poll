import { useState } from "react";
import { connect, useDispatch, useSelector} from "react-redux";
import { handleSaveQuestion } from "../actions/questions";
import { useNavigate } from 'react-router-dom';

const NewPoll = () => {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const authedUser = useSelector((state) => state.authedUser);

  const question = {
    optionOneText: option1,
    optionTwoText: option2,
    author: authedUser,
  };

  const handleOnClick = (e) => {
    e.preventDefault(); 
    console.log("question: ", question);
    dispatch(handleSaveQuestion(question));
    setOption1("");
    setOption2("");
    navigate("/")
  };

  return (
    <div>
      <h2>Would you rather?</h2>
      <input
        id="text-input-option1"
        type="text"
        value={option1}
        onChange={(e) => {
          setOption1(e.target.value)
        }}
        placeholder="OPTION 1"
        className="new-poll-options"
      />
      <input
        id="text-input-option2"
        type="text"
        value={option2}
        onChange={(e) => {
          setOption2(e.target.value)
        }}
        placeholder="OPTION 2"
        className="new-poll-options"
      />
      <br></br>
      <button 
        disabled={!option1 || !option2}
        type="submit"
        className="create-new-poll" 
        onClick={handleOnClick}
      >
        Create new poll
      </button>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NewPoll);
