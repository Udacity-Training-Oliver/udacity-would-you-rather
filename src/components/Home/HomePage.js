import { useState } from "react";
import { useSelector } from "react-redux";
import { Tab, Tabs } from "react-bootstrap";
import QuestionList from "./QuestionList";

const LS_CURRENT_HOMEPAGE_TAB = 'CurrentHomePageTab';

export default function Home() {
  // Check which tab has been active before navigating to a question
  // so that the right tab is selected when returning
  const lsCurrentTab = localStorage.getItem(LS_CURRENT_HOMEPAGE_TAB);
  const [currentTab, setCurrentTab] = useState(lsCurrentTab ?? 'unanswered');

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

  const handleSelect = (selectedTab) => {
    setCurrentTab(selectedTab);
    localStorage.setItem(LS_CURRENT_HOMEPAGE_TAB, selectedTab);
  }
  
  return (
    <main>
      <Tabs activeKey={currentTab} onSelect={handleSelect} id="questions" className="m-3">
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
