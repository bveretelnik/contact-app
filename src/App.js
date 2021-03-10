import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactCard from "./components/ContactCard/ContactCard";
import Header from "./components/Header/Header";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Bogdan",
      email: "bogdan@gmail.com",
      phone: "0964322313",
    },
    {
      id: "2",
      name: "Max",
      email: "max@gmail.com",
      phone: "0944322313",
    },
    {
      id: "3",
      name: "Ira",
      email: "ira@gmail.com",
      phone: "0564322313",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactCard contacts={contacts} />
    </div>
  );
}

export default App;
