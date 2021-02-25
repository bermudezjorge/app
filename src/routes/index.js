import {Suspense} from 'react'
import {Switch, Route} from 'wouter'

import ErrorBoundary from 'components/ErrorBoundary'
import progressImport from './progressimport'
import FallBack from 'components/Fallback'

const Home = progressImport(
  import("./routesComponents/Home")
)

const Search = progressImport(
  import("./routesComponents/Search")
)

const Me = progressImport(
  import("./routesComponents/Me")
)

const Routes = () => {  
  return (
    <ErrorBoundary>
      <Suspense fallback={<FallBack type="loading" />}>
        <Switch>

          <Route path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/me" component={Me} />

          <Route path="/:rest*">
            {({rest}) => <FallBack type="notFound" page={rest} />}
          </Route>
          
        </Switch>
      </Suspense>
    </ErrorBoundary>
  )
}

export default Routes