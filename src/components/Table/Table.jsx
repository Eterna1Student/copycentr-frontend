import style from './Table.module.scss'

const Table = ({data}) => {
    console.log(data)
    return (
        <section className={style.wrapper}>
            <table className={style.table}>
                <thead className={style.table__header}>
                    <tr className={style.table__row}>
                        <th className={style.table__head}>Наименование</th>
                        <th className={style.table__head}>Цена</th>
                        <th className={style.table__head}>Кол-во</th>
                        <th className={style.table__head}>Сумма</th>
                        <th className={style.table__head}>Дата</th>
                    </tr>
                </thead>

                <tbody className={style.table__body}>
                    {data.map((item, index) => {
                        return (
                            <tr key={index} className={style.table__row}>
                                <td className={style.table__head}>{item.title}</td>
                                <td className={style.table__cell}>{item.price}</td>
                                <td className={style.table__cell}>{item.count}</td>
                                <td className={style.table__cell}>{item.sum}</td>
                                <td className={style.table__cell}>{item.created}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default Table;