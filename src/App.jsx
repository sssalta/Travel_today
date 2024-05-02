// import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart/Cart";
import { useClickOutside } from "./hooks/useOutsideClick";

function App() {
  const { open, openRef, setOpen } = useClickOutside();

  return (
    <>
      <div className="page">
        <div className="background-image">
          <Navbar />
          <AppRouter />
          <ToastContainer
            position="bottom-right"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          <button className="cartBin" onClick={() => setOpen((v) => !v)}>
            {open ? "Hide" : "Cart"}
          </button>
          {open && <Cart openRef={openRef} />}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
