import Nullstack from 'nullstack'
import '../tailwind.css'
import Home from './Home'

class Application extends Nullstack {
  prepare({ page }) {
    page.title = 'Pokedex - First generation'
    page.locale = 'pt-BR'
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
    )
  }

  render() {
    return (
      <body class="bg-gray-900 font-roboto text-white">
        <Head />
        <Home route="/" />
      </body>
    )
  }
}

export default Application
