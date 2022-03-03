import { Tab, Tabs } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <Tabs defaultActiveKey="unanswered" id="questions" className="mb-3">
        <Tab eventKey="unanswered" title="Unanswered Questions">
          <p>Unanswered Questions</p>
        </Tab>
        <Tab eventKey="answered" title="Answered Questions">
          <p>Answered Questions</p>
        </Tab>
      </Tabs>
    </main>
  );
}
