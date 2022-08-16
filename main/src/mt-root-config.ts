import { registerApplication, start } from "single-spa";


type AppProps = {
  name: string,
  package: string,
  activeWhen: string,
  exact: boolean 
}

let mocky = 'https://run.mocky.io/v3/4600748a-90f0-483e-826b-c6032a273242'


fetch(mocky)
  .then(resp => resp.json())
  .then(data => {
    data.applications.forEach((app: AppProps) => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact 
          ? location => location.pathname === app.activeWhen
          : [app.activeWhen],
      })
    });
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    })
  })
