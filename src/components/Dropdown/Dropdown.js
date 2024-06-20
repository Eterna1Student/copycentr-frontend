import {useState} from "react";
import style from './Dropdown.module.scss';
const Dropdown = ({items, onSelect, value}) => {
    const [openDropdown, setOpenDropdown] = useState(false);

    const onClickSelect = (item) => {
        onSelect(item);
        setOpenDropdown(false);
    }

    return <div className={style.dropdown}>
        <div className={style.dropdown__value} onClick={() => setOpenDropdown(!openDropdown)}>{value ? value : 'Выбрать...'}</div>
        { openDropdown ? <div className={style.dropdown__items}>
            {
                items.map((item, index) => {
                    return <div className={style.dropdown__item} key={index} onClick={() => onClickSelect(item)}>
                        {item.title}
                    </div>
                })
            }
        </div> : null}
    </div>
}

export default Dropdown;