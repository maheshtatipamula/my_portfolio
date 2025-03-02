import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;

// <Route path="/contact" element={<Contact />} />

// const [isLoading, setIsLoading] = useState(true);

// useEffect(() => {
//   // Simulate loading
//   const timer = setTimeout(() => {
//     setIsLoading(false);
//   }, 10);

//   return () => clearTimeout(timer);
// }, []);

// if (isLoading) {
//   return (
//     <div className="h-screen w-full flex items-center justify-center bg-primary">
//       <div className="text-secondary font-mono text-xl">
//         <span className="inline-block animate-pulse">Loading...</span>
//       </div>
//     </div>
//   );
// }
