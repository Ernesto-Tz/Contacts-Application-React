import { Outlet } from "react-router-dom";
import ContactsProvider from "../Store/ContactsProvider"
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer"

function RootLayout() {
  return (
    <ContactsProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </ContactsProvider>
  );
}

export default RootLayout;
