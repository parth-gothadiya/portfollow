import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import RouterWrapper from "./routes";

function App() {

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <RouterWrapper/>
      </div>
    </main>
  );
}

export default App;
