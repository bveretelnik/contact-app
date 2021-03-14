import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactCard from "./components/ContactCard/ContactCard";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactCard />
    </div>
  );
}

export default App;
