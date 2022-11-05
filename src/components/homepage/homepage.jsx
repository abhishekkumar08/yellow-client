import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/card';
import QRCode from 'qrcode';

const Homepage = () => {
  const [expensesList, setExpensesList] = useState([]);
  const [user, setUser] = useState();
  const [qrCode, setQRCode] = useState();
  const [friends, setFriends] = useState([]);
  const [balance, setBalance] = useState();

  const getCurrUser = async () => {
    try {
      await axios.get('http://localhost:5000/get_user').then((res) => {
        setUser(res.data.user);
      });
    } catch (err) {
      console.log(err);
    }
  };
  const calculateBalance = async () => {
    console.log(friends);
    let bal = friends.map((res) => {
      console.log(res);
      return res;
    });
    setBalance(bal);
  };

  const getFriendsAndBalance = async () => {
    try {
      await axios.get('http://localhost:5000/friends').then((res) => {
        setFriends(res.data.friends);
      });
      console.log(friends);
    } catch (err) {
      console.log(err);
    }
    calculateBalance();
  };

  const getExpensesData = async () => {
    try {
      await axios('http://localhost:5000/expenses').then((res) => {
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
    getCurrUser();
    getExpensesData();
    generateQR(generateLinkForPayment(10, 'upiID', 'a'));
  }, []);

  useEffect(() => {
    getFriendsAndBalance();
  }, []);

  return (
    <div>
      <div style={{ textAlign: 'center' }}>Yellow hackathon</div>
      <div style={{ margin: '1rem', padding: '1rem' }}>
        <div>
          User : {user?.first_name} {user?.last_name}
        </div>
        <div>Email : {user?.email}</div>

        <div>Payment Remaining</div>
        <div>{balance?.amount}</div>
        <div>
          {balance?.first_name} {balance?.last_name}
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {expensesList.map((expenseData, key) => {
          return (
            <div key={key}>
              <Card expenseData={expenseData} />
            </div>
          );
        })}
        {/* <img src={qrCode} alt="" /> */}
      </div>
    </div>
  );
};

export default Homepage;
