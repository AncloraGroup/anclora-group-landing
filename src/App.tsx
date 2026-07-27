import { LocaleProvider } from './i18n/LocaleContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Ecosystem from './sections/Ecosystem'
import Products from './sections/Products'
import Infrastructure from './sections/Infrastructure'
import Method from './sections/Method'
import Founder from './sections/Founder'
import Principles from './sections/Principles'
import Contact from './sections/Contact'

function App() {
  return (
    <LocaleProvider>
      <Header />
      <main>
        <Hero />
        <Ecosystem />
        <Products />
        <Infrastructure />
        <Method />
        <Founder />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </LocaleProvider>
  )
}

export default App
