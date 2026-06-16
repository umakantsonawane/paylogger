import SummaryCard from "../components/SummaryCard";

function Home() {
  return (
    <main className="home">
      <h1>Dashboard</h1>

      <div className="summary-container">
        <SummaryCard title="Balance" amount={0} />
        <SummaryCard title="Income" amount={0} />
        <SummaryCard title="Expense" amount={0} />
      </div>
    </main>
  );
}

export default Home;