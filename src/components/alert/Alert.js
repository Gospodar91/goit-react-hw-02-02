import React from 'react'
import css from './alert.module.css'
const Alert = () => (
    <div className ={css.alertDiv}>
      <h2 className={css.title}>This name already exist!</h2>
     
    </div>
  );
  export default Alert;