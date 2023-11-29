export class Router {
  routes = {};

  add(routName, link) {
    this.routes[routName] = link;
  }

  route(event) {
    event = window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    if (window.location.pathname == "/explorer") {
      document.body.style.backgroundImage = "url(../assets/montanha2.png)";
    } else if (window.location.pathname == "/universe") {
      document.body.style.backgroundImage = "url(../assets/montanha3.png)";
    } else {
      document.body.style.backgroundImage = "url(../assets/montanha.png)";
    }

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
