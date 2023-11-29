import { Router } from "./router.js";

//mapeamento da rota
const router = new Router();
router.add("/", "/pages/home.html");
router.add("/explorer", "/pages/explorer.html");
router.add("/universe", "/pages/universe.html");
router.add(404, "/pages/404.html");

// const routes = {
//   "/": "/pages/home.html",
//   "/about": "/pages/about.html",
//   "/contact": "/pages/contact.html",
//   404: "/pages/404.html",
// };

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
