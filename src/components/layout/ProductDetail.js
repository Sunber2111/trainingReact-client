import React, { useContext, useEffect } from 'react'
import navbarStore from '../../app/store/navbarStore';
import { observer } from 'mobx-react-lite';

const ProductDetail = ({match}) => {
    console.log(match);
    
    const {masp} = match.params;
    const {fetchDataProduct, product} = useContext(navbarStore);
    useEffect(() => {
        fetchDataProduct(masp);
    },[])

    return (
        <div>
            <pre>{product&&JSON.stringify(product)}</pre>
        </div>
    )
}

export default observer(ProductDetail)
