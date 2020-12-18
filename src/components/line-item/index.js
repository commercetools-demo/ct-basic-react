const LineItem = ({lineItem}) => {

  return (
    <div>
      {lineItem.name.en}, Qty {lineItem.quantity}, Total: ${lineItem.totalPrice.centAmount/100}
    </div>
  );
}

export default LineItem;
