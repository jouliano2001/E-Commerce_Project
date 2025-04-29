import React, { useState } from 'react';
import Card from './Card';
import styles from './Payment.module.css';
import { useNavigate } from 'react-router-dom';

const CardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [rotateCard, setRotateCard] = useState(false);
  const [cardType, setCardType] = useState('default');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const detectCardType = (number) => {
    const numStr = String(number);
    if (/^4/.test(numStr)) return 'visa';
    if (/^(34|37)/.test(numStr)) return 'amex';
    if (/^5[1-5]/.test(numStr)) return 'mastercard';
    if (/^6011/.test(numStr)) return 'discover';
    if (/^62/.test(numStr)) return 'unionpay';
    if (/^35/.test(numStr)) return 'jcb';
    return 'default';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!cardNumber || cardNumber.length < 16) {
      newErrors.cardNumber = 'Please enter a valid card number';
    }
    
    if (!userName) {
      newErrors.userName = 'Please enter card holder name';
    }
    
    if (!expMonth) {
      newErrors.expMonth = 'Please select month';
    }
    
    if (!expYear) {
      newErrors.expYear = 'Please select year';
    }
    
    if (!cardCvv || cardCvv.length < 3) {
      newErrors.cardCvv = 'Please enter valid CVV';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    alert('Payment processed successfully!');
    navigate('/home')
  };

  const values = {
    cardNumber,
    expMonth,
    expYear,
    userName,
    cardCvv,
    rotateCard,
    cardType
  };

  return (
    <div className={styles.paymentContainer}>
      <div className={styles.cardForm}>
        <div className={styles.cardList}>
          <Card values={values} />
        </div>
        
        <div className={styles.cardFormInner}>
          <form onSubmit={handleSubmit}>
            <div className={styles.cardInput}>
              <label htmlFor="cardNumber" className={styles.cardInputLabel}>
                Card Number
                {errors.cardNumber && <span className={styles.error}>{errors.cardNumber}</span>}
              </label>
              <input
                type="tel"
                id="cardNumber"
                className={styles.cardInputField}
                maxLength={16}
                value={cardNumber}
                onChange={(e) => {
                  setCardNumber(e.target.value.replace(/\D/g, ''));
                  setCardType(detectCardType(e.target.value));
                }}
                onFocus={() => setRotateCard(false)}
              />
            </div>

            <div className={styles.cardInput}>
              <label htmlFor="cardName" className={styles.cardInputLabel}>
                Card Holder
                {errors.userName && <span className={styles.error}>{errors.userName}</span>}
              </label>
              <input
                type="text"
                id="cardName"
                className={styles.cardInputField}
                maxLength={30}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onFocus={() => setRotateCard(false)}
              />
            </div>
            
            <div className={styles.cardFormRow}>
              <div className={styles.cardFormCol}>
                <div className={styles.cardFormGroup}>
                  <label htmlFor="cardMonth" className={styles.cardInputLabel}>
                    Expiration Date
                    {errors.expMonth && <span className={styles.error}>{errors.expMonth}</span>}
                  </label>
                  <div className={styles.selectGroup}>
                    <select
                      id="cardMonth"
                      className={`${styles.cardInputField} ${styles.cardSelect}`}
                      value={expMonth}
                      onChange={(e) => setExpMonth(e.target.value)}
                      onFocus={() => setRotateCard(false)}
                    >
                      <option value="">Month</option>
                      {Array.from({length: 12}, (_, i) => i + 1).map(month => (
                        <option key={month} value={month < 10 ? `0${month}` : month}>
                          {month < 10 ? `0${month}` : month}
                        </option>
                      ))}
                    </select>
                    
                    <select
                      id="cardYear"
                      className={`${styles.cardInputField} ${styles.cardSelect}`}
                      value={expYear}
                      onChange={(e) => setExpYear(e.target.value)}
                      onFocus={() => setRotateCard(false)}
                    >
                      <option value="">Year</option>
                      {Array.from({length: 8}, (_, i) => new Date().getFullYear() + i).map(year => (
                        <option key={year} value={String(year).slice(-2)}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.cardFormCol} ${styles.cvvCol}`}>
                <div className={styles.cardInput}>
                  <label htmlFor="cardCvv" className={styles.cardInputLabel}>
                    CVV
                    {errors.cardCvv && <span className={styles.error}>{errors.cardCvv}</span>}
                  </label>
                  <input
                    type="tel"
                    id="cardCvv"
                    className={styles.cardInputField}
                    maxLength={4}
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ''))}
                    onFocus={() => setRotateCard(true)}
                  />
                </div>
              </div>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Submit Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardForm;