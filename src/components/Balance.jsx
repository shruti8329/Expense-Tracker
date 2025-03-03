import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transactions) => transactions.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balane</h4>
      <h1>Rs.{total}</h1>
    </>
  );
};

export default Balance;
