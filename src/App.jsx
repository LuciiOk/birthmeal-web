import AuthProvider from "./contexts/AuthContext";
import Routes from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import "./App.scss";

function App() {
  return (
    <AuthProvider>
      <Routes />
      <Toaster
        position="top-right"
        reverseOrder={false}
        // allow to dismiss toast by clicking on it
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
            fontSize: "14px",
          },
          // Define default options
          duration: 1500,
        }}
      />
    </AuthProvider>
  );
}

export default App;
