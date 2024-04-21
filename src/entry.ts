import Navigo from "navigo";
import "./types/index.d";
import LoginRoute from "./routes/login/index.hbs";
import HTMX from "htmx.org";
import Alpine from "alpinejs";
import "htmx.org/dist/ext/json-enc";
import "htmx.org/dist/ext/alpine-morph";

window.htmx = HTMX;
window.Alpine = Alpine;

const rootElement = document.getElementById("kani-main");

const nav = new Navigo("/ui/");

nav.on("login", () => {
	rootElement?.replaceChildren(LoginRoute({}));
});

nav.resolve();
