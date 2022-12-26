import { LocationProvider, Router } from "@reach/router";
import Home from "./pages/Home";
function App() {
  return (
    <>
    <LocationProvider>
      <Router>
        <Home path='/' />
      </Router>
    </LocationProvider>
    </>
  );
}

export default App;
