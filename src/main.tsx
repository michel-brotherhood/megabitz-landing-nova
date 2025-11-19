import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { reportWebVitals } from "./lib/reportWebVitals";

createRoot(document.getElementById("root")!).render(<App />);

// Report Core Web Vitals to console and Google Analytics (when configured)
reportWebVitals();
