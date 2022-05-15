import styles from './MealItem.module.css';
const MealItem = props => {
    const meals = props.meals;
    return (
        <>
            <li className={styles.meal}>
                <div>
                    <h3>{meals.name}</h3>
                    <div className={styles.description}>{meals.description}</div>
                    <div className={styles.price}>{meals.price.toFixed(2)}</div>
                </div>

                <div>
                    
                </div>
            </li>
        </>
    )
}

export default MealItem;