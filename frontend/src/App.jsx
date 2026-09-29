import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Checking...");
  const [database, setDatabase] = useState("Checking...");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Check backend and database
    fetch("/api/health")
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.message);
        setDatabase(data.database);
      })
      .catch(() => {
        setStatus("Backend unavailable");
        setDatabase("Disconnected");
      });

    // Get users from PostgreSQL
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1>🚀 Cloud Web Application</h1>

      <h2>3-Tier Docker Deployment</h2>

      <hr />

      <h3>System Status</h3>

      <p>
        <strong>Frontend:</strong> Running
      </p>

      <p>
        <strong>Backend:</strong> {status}
      </p>

      <p>
        <strong>PostgreSQL:</strong> {database}
      </p>

      <hr />

      <h3>Users from PostgreSQL</h3>

      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <hr />

      <h3>Architecture</h3>

      <p>
        Browser → Nginx → React → Node.js → PostgreSQL
      </p>

      <p>
        ✅ Multi-container deployment is working
      </p>
    </div>
  );
}

export default App;