import styles from './AddButton.module.css'

const AddButton = props => {
  return(
    <button className={styles['add-button']} onClick={props.onClick}>{props.children}</button>
  );

}

export default AddButton;