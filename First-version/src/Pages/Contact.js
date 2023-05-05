import { useParams } from "react-router-dom";
import ContactView from "../Contacts/ContactView/ContactView";

function ContactDetailsPage() {
  const params = useParams();

  return (
    <>
      <h1>Contact Details</h1>
      <p>{params.contactId}</p>
      <ContactView/>
    </>
  );
}

export default ContactDetailsPage;
