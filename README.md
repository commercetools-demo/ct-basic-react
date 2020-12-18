# ct-basic-react

THE most basic React app that shows an example of calling the commercetools APIs from within the browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Components:

## EmailInput:

This is an input form that lets the user search for orders by email address:

(in ```src/components/email-input```)

## OrderList:

When the user hits the Search button, the **OrderList** component calls the commercetools APIs to do two things:
1. Fetch the customer ID for this email address
2. Fetch all orders for this customer
(note: this means that it will only search for orders for registered customers)

(in ```src/components/order-list```)

## OrderDetail:
OrderList calls **OrderDetail** once for each order in the list

(in ```src/components/order-detail```)

## LineItem:
OrderDetail will call **LineItem** once for each line item in the order

(in ```src/components/line-item```)

---
# Setup:

Copy .env.sample to .env in the root folder and set the appropriate values for your project/developer API client.

Install Dependencies:

```yarn```

---
# To run:

`yarn start`

Runs the app in  development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



