import RoutesLayout from 'components/RoutesLayout'
import Routes from 'routes'
import NavBar from 'views/NavBar'

const App = () => {
  return (
    <>
      <RoutesLayout>
        <Routes />
      </RoutesLayout>
      <NavBar />
    </>
  )
}

export default App