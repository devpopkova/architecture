import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

if (process.env.NODE_ENV === "development") {
    ReactDOM.render(
    <BrowserRouter>
    <Login />
    <Register />
    </BrowserRouter>,
    document.getElementById("root")
);
}

export { Login, Register };
