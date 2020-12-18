import callCT from '../../commercetools/commercetools'
import OrderDetail from '../order-detail';
import { useEffect, useState} from 'react';


const OrderList = ({email}) => {

  let [orders, setOrders] = useState([]);

  useEffect(() => {
    email && getCustomerOrders(email);
  });

  const getCustomerOrders = async (email) => {
    if(orders.length>0) {
      return;
    }
    // Get customer ID from email.
    let customerId=null;
    let where=encodeURIComponent(`email="${email}"`)
    let data =  await callCT({
      uri: `customers?where=${where}`,
      method: 'GET'
    });
    if(data.results.length===1) {
      customerId=data.results[0].id;
      let where=encodeURIComponent(`customerId="${customerId}"`);
      data =  await callCT({
        uri: `orders?where=${where}`,
        method: 'GET'
      });
      setOrders(data.results);
    }
  };

  if(orders.length===0) {
    return null
  }

 

  return (
    <ul>
      {orders.map(order => <OrderDetail key={order.id} order={order}/>)}
    </ul>
  );
}

export default OrderList;
