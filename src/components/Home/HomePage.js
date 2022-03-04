import { useSelector } from "react-redux";
import { Tab, Tabs } from "react-bootstrap";

import QuestionList from "./QuestionList";

export default function Home() {
  const authedUser = useSelector((state) => state.authedUser);
  const user = useSelector((state) => state.users[authedUser]);
  const questions = useSelector((state) => Object.values(state.questions));

  const answeredQuestionsIds = user.answers ? Object.keys(user.answers) : [];

  console.log('Questions', questions);

  const answeredQuestions = questions.filter((q) => answeredQuestionsIds.includes(q.id));
  const unansweredQuestions = questions.filter((q) => !answeredQuestionsIds.includes(q.id));

  return (
    <main>
      <Tabs defaultActiveKey="unanswered" id="questions" className="mb-3">
        <Tab eventKey="unanswered" title="Unanswered Questions">
          <p>Unanswered Questions</p>
          <QuestionList questions={unansweredQuestions} />
        </Tab>
        <Tab eventKey="answered" title="Answered Questions">
          <p>Answered Questions</p>
          <QuestionList questions={answeredQuestions} />
        </Tab>
      </Tabs>
    </main>
  );
}
