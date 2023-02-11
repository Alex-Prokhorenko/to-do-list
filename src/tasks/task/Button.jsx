import { BsTrash } from "react-icons/bs";
import styles from "./styles.module.css";

const Button = (props) => {
  return <BsTrash className={styles.button} {...props}/>
}

export default Button;