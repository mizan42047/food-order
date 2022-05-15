import DUMMY_MEALS from "./DummyMeals";
import styles from './MealsAvailable.module.css';
  const MealsAvailable = () => {
    const mealsList = DUMMY_MEALS.map((meals) => (
      <li>
        {meals.name};
      </li>
    ) )
    return(
      <section className = {styles.meals}>
        <ul>
          {mealsList}
        </ul>
      </section>
    )
  }


  export default MealsAvailable;