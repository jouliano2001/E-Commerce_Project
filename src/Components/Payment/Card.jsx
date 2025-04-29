import React from 'react';
import CardType from './CardType';
import chip from '../../assets/chip.png';
import styles from './Payment.module.css';

const Card = ({ values }) => {
  const { cardNumber, expMonth, expYear, userName, cardCvv, rotateCard, cardType } = values;

  const formatCardNumber = (number) => {
    if (!number) return "#### #### #### ####";
    const numStr = String(number).padEnd(16, "#");
    return numStr.substring(0, 4) + " " + numStr.substring(4, 8) + " " +
           numStr.substring(8, 12) + " " + numStr.substring(12, 16);
  };

  return (
    <div className='text-[#155465]'>
      <div className={`${styles.cardItem} ${rotateCard ? styles.active : ''}`}>
        <div className={`${styles.cardSide} ${styles.cardSideFront}`}>
          <div className={styles.cardCover}>
            <img
              src={CardType[cardType]?.color || CardType.default.color}
              className={styles.cardBg}
              alt="card background"
            />
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.cardTop}>
              <img src={chip} className={styles.cardChip} alt="chip" />
              <div className={styles.cardType}>
                <img
                  src={CardType[cardType]?.name || CardType.default.name}
                  alt="card type"
                  className={styles.cardTypeImg}
                />
              </div>
            </div>

            <div className={styles.cardNumber}>
              {formatCardNumber(cardNumber)}
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardInfo}>
                <div className={styles.cardHolderLabel}>Card Holder</div>
                <div className={styles.cardName}>
                  {userName || "Full Name"}
                </div>
              </div>

              <div className={styles.cardDate}>
                <div className={styles.cardDateLabel}>Expires</div>
                <div className={styles.cardDateValue}>
                  <span>{expMonth || "MM"}</span> / <span>{expYear || "YY"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.cardSide} ${styles.cardSideBack}`}>
          <div className={styles.cardCover}>
            <img
              src={CardType[cardType]?.color || CardType.default.color}
              className={styles.cardBg}
              alt="card background"
            />
          </div>
          <div className={styles.cardBand}></div>
          <div className={styles.cardCvvContainer}>
            <div className={styles.cardCvvLabel}>CVV</div>
            <div className={styles.cardCvvBand}>
              {cardCvv || "•••"}
            </div>
            <div className={styles.cardType}>
              <img
                src={CardType[cardType]?.name || CardType.default.name}
                alt="card type"
                className={styles.cardTypeImg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
