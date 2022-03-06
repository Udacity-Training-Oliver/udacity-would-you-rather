import { useParams } from "react-router-dom";

export default function QuestionPage() {
  const { id } = useParams();
  return (
    <div>
      <h2>Question with id="{id}" has been passed as parameter.</h2>
    </div>
  );
}
