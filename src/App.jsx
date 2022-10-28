import AuthProvider from "./contexts/AuthContext";
import Routes from "./routes/Routes";
import './App.scss';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
