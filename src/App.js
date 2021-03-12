import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactCard from "./components/ContactCard/ContactCard";
import FirebaseState from "./components/context/firebase/FirebaseState";
import Header from "./components/Header/Header";

function App() {
  return (
    <FirebaseState>
      <div className="ui container">
        <Header />
        <AddContact />
        {/* <ContactCard /> */}
      </div>
    </FirebaseState>
  );
}

export default App;
