import Nullstack from 'nullstack'
import Home from './Home'

import '../tailwind.css'

class Application extends Nullstack {
  prepare({ page }) {
    page.title = 'Pokédex - First generation'
    page.locale = 'pt-BR'
  }

  renderHead() {
    return (
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
    )
  }

  render() {
    return (
      <body class="text-darkgray bg-white font-poppins">
        <Head />
        <Home route="/" />
      </body>
    )
  }
}

export default Application
