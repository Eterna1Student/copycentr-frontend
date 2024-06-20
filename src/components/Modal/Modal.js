import React, { useCallback, useEffect, useRef, useState } from "react";
import Portal, { createContainer } from "../Portal/Portal.js";
import  "./Modal.scss";
import classNames from "classnames";

const MODAL_CONTAINER_ID = "modal-container-id";


// TODO: Переделать на модуль

const Modal = ({title, onClose, children}) => {

    const rootRef = useRef(null);
    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        createContainer({ id: MODAL_CONTAINER_ID });
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleWrapperClick = (event) => {
            const { target } = event;

            if (target instanceof Node && rootRef.current === target) {
                onClose?.();
            }
        };
        const handleEscapePress = (event) => {
            if (event.key === "Escape") {
                onClose?.();
            }
        };

        window.addEventListener("click", handleWrapperClick);
        window.addEventListener("keydown", handleEscapePress);

        return () => {
            window.removeEventListener("click", handleWrapperClick);
            window.removeEventListener("keydown", handleEscapePress);
        };
    }, [onClose]);

    const handleClose = useCallback(() => {
        onClose?.();
    }, [onClose]);

    return isMounted ? (
        <Portal id={MODAL_CONTAINER_ID}>
            <div className={classNames('modal')} ref={rootRef}>
                <div className='modal__content'>
                    <button
                        type="button"
                        className='modal__close'
                        onClick={handleClose}
                    >
                        Закрыть
                    </button>
                    <p className='modal__title'>{title}</p>
                    {children}
                </div>
            </div>
        </Portal>
    ) : null;
};

export default Modal;
