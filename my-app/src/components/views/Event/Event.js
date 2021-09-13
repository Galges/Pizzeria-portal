import React from 'react';
import styles from '../Event/Event.module.scss';

const Event = (value) => {

  const id = value.match.params.id;

  return(
    <div className={styles.component}>
      <h2>
      Event view {id}
      </h2>
    </div>
  );
};

export default Event;