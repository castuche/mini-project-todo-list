import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const ItemDetailsPage = ({items}) => {
    const {itemId} = useParams();
    const itemDetails = items.find(item => item.id ==itemId) ;

/*      if (!itemDetails){
        return <Navigate to="/"/>} */
   

    return (
        <>
            <h2>{itemDetails.task}</h2>
        </>

    )
  }
  
  export default ItemDetailsPage 