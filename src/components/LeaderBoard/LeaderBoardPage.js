import ScoreList from "./ScoreList"

export default function LeaderBoard() {

  const scores = [
    {
      id: '1',
      user: {
        name: 'Oliver'
      },
      answeredQuestions: 1,
      createdQuestions: 2,
    },
    {
      id: '2',
      user: {
        name: 'Lupo'
      },
      answeredQuestions: 0,
      createdQuestions: 5,
    },
    {
      id: '3',
      user: {
        name: 'Minky'
      },
      answeredQuestions: 2,
      createdQuestions: 2,
    },
  ];

   scores.sort((a, b) => (a.answeredQuestions + a.createdQuestions) - (b.answeredQuestions + b.createdQuestions));

  return (
    <main>
        <ScoreList scores={scores} />
    </main>
  );
}
