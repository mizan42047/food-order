import styles from './Cart.module.css';
import Modal from '../UI/Modal';
const Cart = props => {
    const cartItems = <ul className={styles['cart-items']}>{[{id: 'c1', name: 'Burger', amount: 2, price : 20.00}].map((items,index) => <li key={index+1}>{items.name}</li>)}</ul>;
    return(
        <Modal onClick ={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.54</span>
            </div>
            <div className={styles.actions}>
                <button onClick = {props.onClose} className={styles['button--alt']}>Close</button>
                <button className={styles['button']}>Order</button>
            </div>

        </Modal>
    )
}

export default Cart;