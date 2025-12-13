import { generateSummaries } from "../../utils/home";
import SummaryCard from "./Components/SummaryCard";

const Summaries = () => {
  const summaries = generateSummaries({
    productsLength: 4,
    ticketsLength: 80,
    adminsLength: 3,
    usersLength: 200,
  });

  return (
    <div className="grid *:hover:scale-103 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 mt-6">
      {summaries.map((summary) => (
        <SummaryCard key={summary.id} {...summary} />
      ))}
    </div>
  );
};

export default Summaries;
