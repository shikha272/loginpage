import { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState("admin");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${active} login clicked`);
  };

  return (
    <div className="main">
      <div className="card"> 
        <h2>LOGIN PAGE </h2>

        {/* Toggle Buttons */}
        <div className="toggle">
          <button
            className={active === "admin" ? "active" : ""}
            onClick={() => setActive("admin")}
          >
            Admin
          </button>
          <button
            className={active === "intern" ? "active" : ""}
            onClick={() => setActive("intern")}
          >
            Intern
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {active === "admin" ? (
            <>
              <input type="text" placeholder="Admin ID" />
              <input type="password" placeholder="Password" />
            </>
          ) : (
            <>
              <input type="text" placeholder="Intern ID" />
              <input type="date" />
            </>
          )}

          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;