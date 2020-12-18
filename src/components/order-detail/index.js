import LineItem from '../line-item';

const OrderDetail = ({order}) => {


  return (
    <li>
      Date Created: {order.createdAt.substr(0,10)}&nbsp;
      Order Total: ${order.totalPrice.centAmount/100}<br/>
      {order.lineItems.map(lineItem => <LineItem key={lineItem.id} lineItem={lineItem}/>)}
      <p/>
    </li>
  );
}

export default OrderDetail;
