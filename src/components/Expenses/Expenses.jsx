
import Table from "../Table/Table";
import style from "./Expenses.module.scss"

const Expenses = (props) => {

    const data = [
        {
            title: 'asdasd',
            price: 123,
            count: 123,
            sum: 123,
            date: '01.01.2024'
        },
        {
            title: 'asdasdk',
            price: 1234,
            count: 1235,
            sum: 1235,
            date: '01.01.2024'
        },
        {
            title: 'asdasdj',
            price: 1236,
            count: 1236,
            sum: 1236,
            date: '01.01.2024'
        },
        {
            title: 'asdasdh',
            price: 1237,
            count: 1237,
            sum: 1237,
            date: '01.01.2024'
        },
        {
            title: 'asdasdg',
            price: 1238,
            count: 1238,
            sum: 1238,
            date: '01.01.2024'
        },
        {
            title: 'asdasdf',
            price: 1235,
            count: 1235,
            sum: 1235,
            date: '01.01.2024'
        },
    ]

    return (
        <section className={style.expenses}>
            <button className={style.expenses__add}>ДОБАВИТЬ РАСХОД +</button>
            <Table data={data}/>
        </section>
    )
}

export default Expenses;