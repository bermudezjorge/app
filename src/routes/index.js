import {Suspense} from 'react'
import {Switch, Route} from 'wouter'

import Layout from 'components/Layout'
import ErrorBoundary from 'components/ErrorBoundary'
import progressImport from './utils/progressimport'
import FallBack from 'components/Fallback'

const Home = progressImport(
  import("./Home")
)

const Search = progressImport(
  import("./Search")
)

const Me = progressImport(
  import("./Me")
)

const Store = progressImport(
  import("./Store")
)

const Product = progressImport(
  import("./Product")
)

const Routes = () => {  
  return (
    <Layout type="routes">
      <ErrorBoundary>
        <Suspense fallback={<FallBack type="loading" />}>
          <Switch>

            <Route path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/me" component={Me} />

            <Route path="/tienda/:name" component={Store} />
            <Route path="/producto/:id" component={Product} />

            <Route path="/:rest*">
              {({rest}) => <FallBack type="notFound" page={rest} />}
            </Route>
            
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Layout>
  )
}

export default Routes