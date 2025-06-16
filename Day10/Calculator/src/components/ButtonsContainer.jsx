import styles from './ButtonContainer.module.css';

const buttons = [
  'C', '+/-', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='
];

function ButtonsContainer({ handleClick }) {
  return (
    <div className={styles.container}>
      {buttons.map((btn, index) => {
        const isZero = btn === '0';
        const isOperator = ['/', '*', '-', '+', '='].includes(btn);
        const isGray = ['C', '+/-', '%'].includes(btn);

        return (
          <button
            key={index}
            onClick={() => handleClick(btn)}
            className={`${styles.button} 
              ${isOperator ? styles.orange : ''} 
              ${isGray ? styles.gray : ''} 
              ${isZero ? styles.zero : ''}`}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonsContainer;
