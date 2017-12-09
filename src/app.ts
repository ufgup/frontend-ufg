import { RouterConfiguration, Router } from "aurelia-router";

export class App {

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      {
        name: "home",
        route: ["", "contact-list"],
        moduleId: "./view/contact-list",
        nav: true
      },
      {
        name: "about",
        route: "about",
        moduleId: "./view/about",
        nav: true
      }
    ]);
  }

}
