
import "./App.css";
import LoginTC from "./assets/components/LoginTC";
import ProfileTC from "./assets/components/ProfileTC";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <LoginTC/>
      <ProfileTC/>
    </UserContextProvider>


  )
}

export default App;
