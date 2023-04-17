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
       {/* You can use one component for displaying and editing contacts */}
      {showContactView && (
        <ContactView
          onClose={toggleContactView}
          onEditContact={toggleEditContact}
        />
      )}
      {showEditContact && <EditContact onClose={toggleEditContact} />}
      {/* For simple things like toggle something you can use anonymous functions here and no need to create a new function. */}
      {/* It is good if you have a big component and you will have less functions */}
      {/* {showAddContact && <AddContact onClose={toggleAddContact} />} */}
      {showAddContact && <AddContact onClose={() => setShowAddContact(!showAddContact)} />}
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
