import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/card';
import QRCode from 'qrcode';

const Homepage = () => {
  const [expensesList, setExpensesList] = useState([]);
  const [qrCode, setQRCode] = useState();
  const getExpensesData = () => {
    try {
      axios('http://localhost:5000/expenses').then((res) => {
        setExpensesList(res.data.expenses);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const generateQR = async (text) => {
    try {
      const qrData = await QRCode.toDataURL(text);
      setQRCode(qrData);
    } catch (err) {
      console.log(err);
    }
  };

  const generateLinkForPayment = (amount, sourceUPIId, sourceName) => {
    const url = `upi://pay?pa=${sourceUPIId}&pn=${sourceName}&am=${amount}&cu=INR`;
    return url;
  };
  useEffect(() => {
    // getExpensesData();
    generateQR(generateLinkForPayment(10, 'abhishek022kk@okaxis', 'a'));
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
        <img src={qrCode} alt="" />
      </div>
    </div>
  );
};

export default Homepage;
