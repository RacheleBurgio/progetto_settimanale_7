import MyNav from './Components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyFooter from './Components/footer'
import MyMain from './Components/main'

function App() {
  return (
    <div>
      <header>
        <MyNav subtitle="Bookstore" isFluid={true} />
      </header>
      <main className="bg-black">
        <MyMain />
      </main>
      <footer className="bg-dark">
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
