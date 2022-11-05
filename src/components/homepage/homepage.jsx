import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/card';

const Homepage = () => {
  const [expensesList, setExpensesList] = useState([]);
  const getExpensesData = () => {
    try {
      axios('http://localhost:5000/expenses').then((res) => {
        setExpensesList(res.data.expenses);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // getExpensesData();
  }, []);
  return (
    <div>
      Yellow hackathon
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {expensesList.map((expenseData, key) => {
          console.log(expenseData);
          return (
            <div key={key}>
              <Card expenseData={expenseData} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
