import { registerApplication, start } from "single-spa";


type AppProps = {
  name: string,
  package: string,
  activeWhen: string,
  exact: boolean 
}

let mocky = 'https://run.mocky.io/v3/0fcce0c9-0058-4d08-9961-a00d4ad22a0b'


fetch(mocky)
  .then(resp => resp.json())
  .then(data => {
    data.applications.forEach((app: AppProps) => {
      console.log(app)
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
    // registerApplication({
    //   name: '@mt/react-parcel',
    //   app: () => System.import('@mt/react-parcel'),
    //   activeWhen: location => location.pathname === '/react-parcel'
    // })

    start({
      urlRerouteOnly: true,
    })
  })
