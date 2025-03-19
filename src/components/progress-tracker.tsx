export default function ProgressTracker({
  questions,
  currentIndex,
}: {
  questions: {
    flag: string;
    status: "unanswered" | "correct" | "incorrect";
  }[];
  currentIndex: number;
}) {
  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex space-x-2 min-w-max">
        {questions.map((question, index) => {
          let borderClass = "border-gray-200";
          let content = "?";

          if (question.status === "correct") {
            borderClass = "border-green-500";
            content = "";
          } else if (question.status === "incorrect") {
            borderClass = "border-red-500";
            content = "";
          }

          return (
            <div
              key={index}
              className={`relative flex-shrink-0 w-10 h-10 border-2 ${borderClass} rounded-md overflow-hidden ${
                index === currentIndex ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {question.status !== "unanswered" ? (
                <img
                  src={question.flag}
                  alt="Flag"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 font-bold">
                  {content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
