import { useState } from "react";

import ContactsProvider from "./Store/ContactsProvider";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import AddButton from "./UI/AddButton";
import TitleBar from "./Layout/TitleBar/TitleBar";
import ContactsList from "./Contacts/ContactsList";
import ContactView from "./Contacts/ContactView/ContactView";
import AddContact from "./Contacts/AddContact/AddContact";

function App() {
  const [showContactView, setShowContactView] = useState(false);
  const [showAddContact, setShowAddContact] = useState(false);
  const [contactActions, setContactActions] = useState("");

  const contactViewHandler = () => {
    setShowContactView(true);
    setContactActions("VIEW");
  };

  return (
    <ContactsProvider>
      {showContactView && (
        <ContactView
          onClose={() => setShowContactView(false)}
          onEditContact={() => setContactActions("EDIT")}
          action={contactActions}
        />
      )}
      {showAddContact && (
        <AddContact onClose={() => setShowAddContact(!showAddContact)} />
      )}
      <Header />
      <main>
        <TitleBar />
        <ContactsList contactViewActive={contactViewHandler} />
        <AddButton onClick={() => setShowAddContact(!showAddContact)}>
          +
        </AddButton>
      </main>
      <Footer />
    </ContactsProvider>
  );
}

export default App;
