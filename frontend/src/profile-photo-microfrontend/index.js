import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

if (process.env.NODE_ENV === "development") {
    ReactDOM.render(
    <BrowserRouter>
    <Main />
    </BrowserRouter>,
    document.getElementById("root")
);
}

export { default as Main } from "/components/Main";
export { default as Card } from "/components/Card";
export { default as AddPlacePopup } from "/components/AddPlacePopup";
export { default as EditProfilePopup } from "/components/EditProfilePopup";
export { default as EditAvatarPopup } from "/components/EditAvatarPopup";
