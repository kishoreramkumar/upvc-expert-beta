import React from 'react';
import styles from './Button.module.scss';

const InputSubmit = props => {
  return (
    <input
      type={props.type}
      onClick={!props.disabled ? props.onClick : null}
      className={
        !props.disabled
          ? [styles.v_button, props.customClass].join(' ')
          : [styles.v_button, styles.disabled, props.disabledClass].join(' ')
      }
      id={props.id}
      key={props.key}
      value={props.value}
    />
  );
};

const Button = props => {
  return (
    <>
      {props.type === 'submit' ? (
        <InputSubmit {...props} />
      ) : (
        <button
          onClick={!props.disabled ? props.onClick : null}
          className={
            !props.disabled
              ? [styles.v_button, props.customClass].join(' ')
              : [styles.v_button, styles.disabled, props.disabledClass].join(
                  ' '
                )
          }
          id={props.id}
          key={props.key}>
          {props.children}
        </button>
      )}
    </>
  );
};

export default Button;
