import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// StrictMode is intentionally omitted: its dev-only double-mount churns the
// WebGL context behind the Ferrofluid background.
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
