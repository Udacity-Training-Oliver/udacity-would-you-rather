import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AlreadyVotedQuestion from "./AlreadyVotedQuestion";
import ToBeVotedQuestion from "./ToBeVotedQuestion";

export default function QuestionPage() {
  const { id } = useParams();

  const question = useSelector((state) => state.questions[id]);
  const user = useSelector((state) => state.users[state.authedUser]);
  const author = useSelector((state) => state.users[question.author]);
  const answered = Object.keys(user.answers).includes(question.id);

  const usersVote = answered
    ? (question.optionOne.votes.includes(user.id)
      ? question.optionOne.text
      : question.optionTwo.text)
    : 'n/a';

  const optionOneVotes = answered
    ? question.optionOne.votes.length
    : -1;

  const optionTwoVotes = answered
    ? question.optionTwo.votes.length
    : -1;

  const totalVotes = answered
    ? optionOneVotes + optionTwoVotes
    : -1;

  return (
    <div>
      <h3 className="mt-4">Question with id="{id}" has been passed as parameter.</h3>
      <h5 className="mt-3">Common Details</h5>
      <ul>
        <li><strong>User</strong>: {user.name}</li>
        <li><strong>Author</strong>: {author.name}</li>
        <li><strong>Option 1</strong>: {question.optionOne.text}</li>
        <li><strong>Option 2</strong>: {question.optionTwo.text}</li>
        <li><strong>Answered</strong>: {answered.toString()}</li>
      </ul>

      <h5 className="mt-3">Answered Details</h5>
      <ul>
        <li><strong>Users Vote</strong>: {usersVote}</li>
        <li><strong>Votes Option 1</strong>: {optionOneVotes}</li>
        <li><strong>Votes Option 2</strong>: {optionTwoVotes}</li>
        <li><strong>Total Votes</strong>: {totalVotes}</li>
      </ul>

      {answered === true
        ? <AlreadyVotedQuestion />
        : <ToBeVotedQuestion
          author={author}
          questionId={question.id}
          optionOne={question.optionOne.text}
          optionTwo={question.optionTwo.text}
        />}
    </div>
  );
}
