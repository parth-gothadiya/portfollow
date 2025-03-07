// import { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import RouterWrapper from "./routes";

// function App() {

//   return (
//     <main>
//       <Sidebar />
//       <div className="main-content">
//         <Navbar />
//         <RouterWrapper/>
//       </div>
//     </main>
//   );
// }

// export default App;


import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import RouterWrapper from "./routes";
import ClickSpark from "./components/ClickSpark"; // Ensure correct path

function App() {
  return (
    <ClickSpark sparkColor="orange" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <RouterWrapper />
        </div>
      </main>
    </ClickSpark>
  );
}

export default App;
