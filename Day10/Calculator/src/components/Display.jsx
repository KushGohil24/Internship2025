import styles from './Display.module.css'
function Display({displayNum}){
    return <input type="text" className={styles.display} value={displayNum} readOnly/>;
}
export default Display;