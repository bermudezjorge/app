import {useState} from 'react'
import {Helmet} from 'react-helmet'

import ModalStoreInfo from 'views/ModalStoreInfo'
import Text from 'components/Text'
import Image from 'components/Image'
import Button from 'components/Button'
import StoreData from 'components/StoreData'
import Separator from 'components/Separator'
import Layout from 'components/Layout'
import ProductCard from 'views/ProductCard'

import styles from './style.module.css'

const Me = () => {
	const [showModal, setShowModal] = useState(false)

	return (
	  <>
	    <Helmet>
	      <title>@storename1 | Perfil</title>
	    </Helmet>
	    
	    <ModalStoreInfo
	    	show={showModal}
	    	setShow={setShowModal}
	    />

	    <div className={styles.mainContainer}>
	      <div className={styles.containerPicName}>
	        <Image
	          type="storepic"
	        />
	        <Text type="profileName">@storename1</Text>
	        
	        <Button
	        	text="editar"
						type="followEditButton"
	        	onClick={() => setShowModal(true)}
	        />
	      </div>

	      <div className={styles.containerData}>
	        <ul className={styles.list}>
	          <StoreData
	            emoji="🌎"
	            text="Ciudad Bolívar, Sector Vista Hermosa"
	          />
	          <Separator />
	          <StoreData
	            emoji="⌚"
	            text="8:00 am - 4:00 pm"
	          />
	          <Separator />
	          <StoreData
	            emoji="📱"
	            text="+5804124152478"
	          />
	        </ul>

	        <Text type="description">
						Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Saepe cumque. xd xd xd.
					</Text>
	      </div>
	    </div>

	    <Layout type="product">
				<Button
					text="+"
					type="createProduct"
					onClick={() => alert('works')}
				/>
				{Array(12).fill("").map((_, i) => (
					<ProductCard
						showStore={false}
						resourceId={i+1}
						key={i}
					/>
				))}
	    </Layout>
	  </>
	)
}

export default Me