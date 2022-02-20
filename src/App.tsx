import { GameProvider } from "./contexts/game";
import { AppRoutes } from "./routes";
import "./App.css";

function App() {
  return (
    <div>
      <GameProvider>
        <AppRoutes />
      </GameProvider>
    </div>
  );
}

export default App;
