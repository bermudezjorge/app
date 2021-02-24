import {Route} from "wouter"
import loadable from '@loadable/component'
import ErrorBoundary from 'components/ErrorBoundary'

const Loading = () => <div>Loading...</div>

const Home = loadable(() =>
  import(/* webpackPrefetch: true */ './files/Home'),
  {
    fallback: Loading(),
  }
)
const Search = loadable(() =>
  import(/* webpackPrefetch: true */ './files/Search'),
  {
    fallback: Loading(),
  }
)
const Me = loadable(() =>
  import(/* webpackPrefetch: true */ './files/Me'),
  {
    fallback: Loading(),
  }
)

const Routes = () => (
  <ErrorBoundary>
    <Route path="/" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/me" component={Me} />
  </ErrorBoundary>
)

export default Routes