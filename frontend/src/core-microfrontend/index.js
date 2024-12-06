import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

if (process.env.NODE_ENV === "development") {
    ReactDOM.render(
    <div>
    <Header />
    <Footer />
    </div>,
    document.getElementById("root")
);
}

export { Header, Footer };
export { CurrentUserContext } from "./contexts/CurrentUserContext";
