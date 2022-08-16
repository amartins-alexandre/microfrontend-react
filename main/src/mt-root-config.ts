import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: location => location.pathname === "/",
});

registerApplication({
  name: "@mt/single-react",
  app: () => System.import("@mt/single-react"),
  activeWhen: ["/single-react"]
});

registerApplication({
  name: "@mt/react-multiples",
  app: () => System.import("@mt/react-multiples"),
  activeWhen: ["/react-multiples"],
});

registerApplication({
  name: "@mt/react-form",
  app: () => System.import("@mt/react-form"),
  activeWhen: location => location.pathname === "/react-form",
});

registerApplication({
  name: "@mt/react-lazy",
  app: () => System.import("@mt/react-lazy"),
  activeWhen: ["/react-lazy"],
});

start({
  urlRerouteOnly: true,
});
