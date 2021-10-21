import React, {useState} from 'react';
import { Modal } from 'antd';
import {IPhoto} from "../types/photo";

interface ModalProps {
    isActive: boolean;
    close: () => void;
    body: IPhoto
}

const ModalCard = ({isActive, close, body}: ModalProps) => {

    return (
        <Modal
            title="Card Preview"
           visible={isActive}
           footer={''}
            onCancel={close}
        >
            <h1 className='modalTitle' >Photo id - {body.id}</h1>
            <img src={body.url} className='previewImg' />
            <p  className='modalText' >{body.title}</p>

        </Modal>
    );
};

export default ModalCard;