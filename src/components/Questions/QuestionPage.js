import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AlreadyVotedQuestion from "./AlreadyVotedQuestion";
import ToBeVotedQuestion from "./ToBeVotedQuestion";

export default function QuestionPage() {
  const { id } = useParams();

  const question = useSelector((state) => state.questions[id]);

  const user = useSelector((state) => state.users[state.authedUser]);
  const author = useSelector((state) => state.users[question?.author]);

  if (!question) {
    return <Navigate to="/NotFound" replace />;
  }

  const answered = Object.keys(user.answers).includes(question.id);

  return (
    <div>
      {answered === true
        ? <AlreadyVotedQuestion
          author={author}
          question={question}
        />
        : <ToBeVotedQuestion
          author={author}
          questionId={question.id}
          optionOne={question.optionOne.text}
          optionTwo={question.optionTwo.text}
        />}
    </div>
  );
}
