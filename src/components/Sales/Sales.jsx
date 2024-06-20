import React, {useState} from "react";
import style from "./Sales.module.scss"
import Table from "../Table/Table";
import Modal from "../Modal/Modal";
import FormSales from "../FormSales/FormSales";


const Sales = (props) => {

    const [openModal, setOpenModal] = useState(true)

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
        <section className={style.sales}>
            <button className={style.sales__add} onClick={() => setOpenModal(true)}>ДОБАВИТЬ ПРОДАЖУ +</button>
            <Table data={data}/>
            {openModal ? <Modal title={'Добавить продажу'} onClose={() => setOpenModal(false)} children={<FormSales/>}/> : null}
        </section>
    )
}

export default Sales;