import SummaryCard from "../components/SummaryCard";
import "../styles/home.css";

function Home() {
  return (
    <main className="home">

      <div className="dashboard-header">

        <div>
          <h1>Dashboard</h1>
          <p>Manage your daily transactions.</p>
        </div>

        <button>Add Transaction</button>

      </div>

      <div className="summary-container">

        <SummaryCard
          title="Balance"
          amount="0"
        />

        <SummaryCard
          title="Income"
          amount="0"
        />

        <SummaryCard
          title="Expense"
          amount="0"
        />

      </div>

    </main>
  );
}

export default Home;