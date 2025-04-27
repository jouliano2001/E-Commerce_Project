import React from 'react';
import { motion } from 'framer-motion';
import styles from './CheckoutModal.module.css';

const CheckoutModal = ({ onClose, onPaymentMethodSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.modalOverlay}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className={styles.modalTitle}>Select Payment Method</h3>
        
        <div className={styles.paymentOptions}>
          <button
            className={`${styles.paymentButton} ${styles.cardButton}`}
            onClick={() => onPaymentMethodSelect('card')}
          >
            <span className={styles.buttonIcon}>💳</span>
            Pay with Card
          </button>
          
          <button
            className={`${styles.paymentButton} ${styles.cashButton}`}
            onClick={() => onPaymentMethodSelect('cash')}
          >
            <span className={styles.buttonIcon}>💵</span>
            Pay with Cash
          </button>
        </div>
        
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
};

export default CheckoutModal;