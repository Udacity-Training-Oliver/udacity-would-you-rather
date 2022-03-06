import { useSelector } from "react-redux";
import ScoreList from "./ScoreList"

export default function LeaderBoardPage() {
  const scores = useSelector((state) =>
    Object.values(state.users).map(u => ({
      id: u.id,
      user: {
        name: u.name,
        avatarURL: u.avatarURL,
      },
      answeredQuestions: Object.keys(u.answers).length,
      createdQuestions: Object.values(state.questions)
        .filter((q) => q.author === u.id).length,
    }))
  );
  console.log('Scores', scores);

  scores.sort((a, b) => (b.answeredQuestions + b.createdQuestions) - (a.answeredQuestions + a.createdQuestions));

  return (
    <main>
        <ScoreList scores={scores} />
    </main>
  );
}
