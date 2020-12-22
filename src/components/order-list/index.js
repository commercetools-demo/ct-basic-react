import { callCT, requestBuilder } from '../../commercetools/commercetools'
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
    let where=`email="${email}"`
    let res =  await callCT({
      uri: requestBuilder.customers.where(where).build(),
      method: 'GET'
    });
    if(res.body.results.length===1) {
      customerId=res.body.results[0].id;
      let where=`customerId="${customerId}"`;
      res =  await callCT({
        uri: requestBuilder.orders.where(where).build(),
        method: 'GET'
      });
      setOrders(res.body.results);
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
