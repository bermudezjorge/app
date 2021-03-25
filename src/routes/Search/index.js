import {useState} from 'react'
import {Helmet} from 'react-helmet'

import SearchBar from 'views/SearchBar'
import Layout from 'components/Layout'
import ProductCard from 'views/ProductCard'
import Fallback from 'components/Fallback'

import styles from './style.module.css'

const Search = () => {
	const [search, setSearch] = useState(null)

  return (
    <>
	    <Helmet>
	      <title>
	      	Busqueda
	      	{search ? ': ' + search : ''}
	      </title>
	    </Helmet>

	    <div className={styles.container}>
		    <SearchBar onChange={setSearch} />
		    
		    <div className={styles.results}>
			    {search ? (
			    	<Layout type="product">
				      {Array(12).fill("").map((_, i) => (
				        <ProductCard
				          showStore={false}
				          resourceId={i+1}
				          key={i}
				        />
				      ))}
				    </Layout>
			    	) : (
						<Fallback type="noResult" />
		    	)}
		    </div>
		  </div>
	  </>
  )
}

export default Search