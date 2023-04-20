import React from 'react';

import classes from "./Input.module.scss";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <input ref={ref} onChange={props.onChange} {...props.input} />
    </div>
  );
});

export default Input;
