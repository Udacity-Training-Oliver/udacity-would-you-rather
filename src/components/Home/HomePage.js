import { useSelector } from "react-redux";
import { Tab, Tabs } from "react-bootstrap";

import QuestionList from "./QuestionList";

export default function Home() {
  const authedUser = useSelector((state) => state.authedUser);
  const user = useSelector((state) => state.users[authedUser]);
  const questions = useSelector((state) => Object.values(state.questions));

  if (authedUser === null || !user) {
    return (<main>Unauthorized</main>);
  }

  const answeredQuestionsIds = user.answers ? Object.keys(user.answers) : [];
  const answeredQuestions = questions.filter((q) => answeredQuestionsIds.includes(q.id));
  const unansweredQuestions = questions.filter((q) => !answeredQuestionsIds.includes(q.id));

  answeredQuestions.sort((a, b) => b.timestamp - a.timestamp);
  unansweredQuestions.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <main>
      <Tabs defaultActiveKey="unanswered" id="questions" className="m-3">
        <Tab eventKey="unanswered" title="Unanswered Questions">
          <QuestionList questions={unansweredQuestions} />
        </Tab>
        <Tab eventKey="answered" title="Answered Questions">
          <QuestionList questions={answeredQuestions} />
        </Tab>
      </Tabs>
    </main>
  );
}
