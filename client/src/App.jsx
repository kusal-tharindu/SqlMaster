import styles from "./styles.module.css";
import sqlServer from "./assets/sql-server.png";
import { useState, useEffect } from "react";

export default function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [sqlQuery, setSqlQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "QueryMaster";
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const query = await generateQuery();
      setSqlQuery(query);
    } catch (err) {
      console.error("Error generating query:", err);
      setError("Failed to generate query. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const generateQuery = async () => {
    const response = await fetch(
      "http://localhost:3002/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ queryDescription: userPrompt }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.sqlQuery.trim();
  };

  return (
    <div className={styles.container}>
      <header>
        <h1>QueryMaster</h1>
      </header>
      <main className={styles.main}>
        <img src={sqlServer} className={styles.icon} alt="SQL server" />
        <h3>Generate SQL</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="query-description"
            placeholder="Describe your query"
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            required
          />
          <input
            type="submit"
            value={loading ? "Generating..." : "Generate query"}
            disabled={loading}
          />
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {sqlQuery && (
          <div className={styles["result-container"]}>
            <div className={styles["result-box"]}>
              <pre>{sqlQuery}</pre>
            </div>
          </div>
        )}
      </main>
      <footer className={styles.footer}>
        Developed by KDSM
      </footer>
    </div>
  );
}

