import {Suspense} from 'react'
import {Switch, Route} from 'wouter'

import Layout from 'components/Layout'
import ErrorBoundary from 'components/ErrorBoundary'
import progressImport from './utils/progressimport'
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

const StorePage = progressImport(
  import("./routesComponents/StorePage")
)

const ProductPage = progressImport(
  import("./routesComponents/ProductPage")
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

            <Route path="/tienda/:name" component={StorePage} />
            <Route path="/producto/:id" component={ProductPage} />

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