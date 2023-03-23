import { useState } from "react";

import ContactsProvider from "./Store/ContactsProvider";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import AddButton from "./UI/AddButton";
import TitleBar from './Layout/TitleBar/TitleBar'
import ContactsList from "./Contacts/ContactsList";
import ContactView from "./Contacts/ContactView/ContactView";
import EditContact from "./Contacts/EditContact/EditContact";
import AddContact from "./Contacts/AddContact/AddContact";

function App() {
  const [showContactView, setShowContactView] = useState(false);
  const [showAddContact, setShowAddContact] = useState(false);
  const [showEditContact, setShowEditContact] = useState(false);

  const toggleContactView = () => {
    setShowContactView(!showContactView);
  };

  const toggleAddContact = () => {
    setShowAddContact(!showAddContact);
  };

  const toggleEditContact = () => {
    setShowContactView(false);
    setShowEditContact(!showEditContact);
  };

  return (
    <ContactsProvider>
      {showContactView && (
        <ContactView
          onClose={toggleContactView}
          onEditContact={toggleEditContact}
        />
      )}
      {showEditContact && <EditContact onClose={toggleEditContact} />}
      {showAddContact && <AddContact onClose={toggleAddContact} />}
      <Header />
      <main>
        <TitleBar/>
        <ContactsList contactViewActive={toggleContactView} />
        <AddButton onClick={toggleAddContact}>+</AddButton>
      </main>
      <Footer />
    </ContactsProvider>
  );
}

export default App;
