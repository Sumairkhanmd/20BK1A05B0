import React from 'react';
import styles from './TrainDetails.module.css';

const TrainDetails = ({ trainData }) => {
    return (
      <div className={styles['train-details']}>
        <h2>Train Details</h2>
        {trainData.map((train) => (
          <div key={train.id}>
            <h3 className={styles['train-name']}>{train.name}</h3>
            <p className={styles['train-time']}>Departure: {train.departure}</p>
            <p className={styles['train-time']}>Arrival: {train.arrival}</p>
          </div>
        ))}
      </div>
    );
  };
  

export default TrainDetails;
