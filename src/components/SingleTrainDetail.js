import React from 'react';
import styles from './TrainDetails.module.css';


const SingleTrainDetail = ({ train }) => {
    return (
      <div className={styles['train-details']}>
        <h2 className={styles['train-name']}>Train Detail</h2>
        <h3>{train.name}</h3>
        <p>Departure: {train.departure}</p>
        <p>Arrival: {train.arrival}</p>
      </div>
    );
  };
  

export default SingleTrainDetail;
