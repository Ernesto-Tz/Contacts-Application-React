// import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import AddButton from "../UI/AddButton";
import TitleBar from "../Layout/TitleBar/TitleBar";
import ContactsList from "../Contacts/ContactsList";
// import ContactView from "./Contacts/ContactView/ContactView";
// import AddContact from "./Contacts/AddContact/AddContact";

function HomePage() {
  const [showContactView, setShowContactView] = useState(false);
  const [showAddContact, setShowAddContact] = useState(false);
  const [contactActions, setContactActions] = useState("");

  const contactViewHandler = () => {
    setShowContactView(true);
    setContactActions("VIEW");
  };

  return (
    <>
      <TitleBar />
      <ContactsList contactViewActive={contactViewHandler} />
      <AddButton onClick={() => setShowAddContact(!showAddContact)}>
        +
      </AddButton>
    </>
  );
}

export default HomePage;

// function HomePage() {

//   const navigate = useNavigate();

//   function navigateHandler() {
//     navigate('/products');
//   };

//   return (
//     <>
//       <h1>My Home Page</h1>
//       <p> Go to <Link to='/products'>the list of products</Link>.</p>
//       <p><button onClick={navigateHandler}>Navigate</button></p>
//     </>
//   );
// }

// export default HomePage;

// <ContactsProvider>
// {showContactView && (
//   <ContactView
//     onClose={() => setShowContactView(false)}
//     onEditContact={() => setContactActions("EDIT")}
//     action={contactActions}
//   />
// )}
// {showAddContact && (
//   <AddContact onClose={() => setShowAddContact(!showAddContact)} />
// )}
// <Header />