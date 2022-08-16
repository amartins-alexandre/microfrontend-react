import { registerApplication, start } from "single-spa";


type AppProps = {
  name: string,
  package: string,
  activeWhen: string,
  exact: boolean 
}

let mocky = 'https://run.mocky.io/v3/9c57f549-a315-43e8-bcc4-6a44360e6f7c'


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
