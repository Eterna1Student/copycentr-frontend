import {useEffect, useState} from "react";
import {productsAPI, salesOneDayAPI} from "../../api/api";
import style from './FormSales.module.scss';
import Dropdown from "../Dropdown/Dropdown";

const FormSales = ({onCloseModal}) => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(1);
    const [sum, setSum] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        productsAPI.getAllProducts().then(res => {
            setProducts(res.data);
        })
    }, []);

    useEffect(() => {
        setSum(count * price);
    }, [price, count])

    const onSelectProduct = (product) => {
        setProduct(product);
        setPrice(product.price);
    }

    const createSales = async () => {
        try {
            if(!product.title || !price || !count || !sum) {
                setError('Заполните все поля!');
                return;
            }

            if(isNaN(+price) || isNaN(+count)) {
                setError('Некорректно заполненные поля!');
                return;
            }
            await salesOneDayAPI.createSalesOneDay(product.id, product.title, price, count, sum)
            onCloseModal(false);
            setError('');
        } catch (e) {
            setError(e.response.data.message);
        }
    }

    return (
        <div className={style.form}>
            <Dropdown items={products} onSelect={onSelectProduct} value={product.title}/>
            <label className={style.form__label}>
                Цена:
                <input className={style.form__input} type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </label>
            <label  className={style.form__label}>
                Количество:
                <input className={style.form__input} type="text" value={count} onChange={(e) => setCount(e.target.value)}/>
            </label>
            <div className={style.form__footer}>
                <div className={style.form__sum}><span>Итого:</span> {isNaN(+sum) ? 0 : sum}</div>
                <div className={style.form__error}>{error}</div>
                <button className={style.form__btn} onClick={createSales}>Добавить</button>
            </div>
        </div>
    )
}

export default FormSales;