import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';
const MealItemForm = props => {
    const inputData = {
        type: 'number',
        id: 'amount',
        max: '5',
        min: '1',
        step: '1',
        defaultValue: '1'
    }
    return(
        <form className={styles.form}>
            <Input label="Amount" input={inputData}/>
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;