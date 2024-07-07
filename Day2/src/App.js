import UserProvider  from "./components/UserContext";
import UserDashboard from "./components/UserDashboard";

function App() {

  return (
    <div className="App">
       <h1>Context Api Demo</h1>
       <UserProvider>
        <UserDashboard />
       </UserProvider>
    </div>
  );
}

export default App;
