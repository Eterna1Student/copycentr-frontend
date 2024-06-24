import React, {useEffect, useState} from "react";
import style from "./Sales.module.scss"
import Table from "../Table/Table";
import Modal from "../Modal/Modal";
import FormSales from "../FormSales/FormSales";
import {salesOneDayAPI} from "../../Api/Api";


const Sales = () => {

    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState([]);

    const loadData = async () => {
        try {
            const response = await salesOneDayAPI.getAllSales();
            console.log(response)
            setData(response?.data || [])
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    const onCloseModal = () => {
        setOpenModal(false);
        loadData();
    }

    return (
        <section className={style.sales}>
            <button className={style.sales__add} onClick={() => setOpenModal(true)}>ДОБАВИТЬ ПРОДАЖУ +</button>
            <Table data={data}/>
            {openModal ? <Modal title={'Добавить продажу'} onClose={() => setOpenModal(false)} children={<FormSales onCloseModal={onCloseModal}/>}/> : null}
        </section>
    )
}

export default Sales;