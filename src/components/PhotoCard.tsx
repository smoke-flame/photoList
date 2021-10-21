import React from 'react';
import {Card} from "antd";
import {CloseCircleOutlined} from "@ant-design/icons";

import {IPhoto} from '../types/photo'
import ModalCard from "./ModalCard";

const { Meta } = Card;
interface photoCardProps {
    photo: IPhoto;
    deleteCard: (cardId: number) => void;
}

const PhotoCard = ({photo, deleteCard}: photoCardProps ) => {

    const [modalVisible, setModalVisible] = React.useState(false)

    function showModal() {
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }
    return (
        <>
            <Card
                hoverable
                className={'card'}
                cover={<img alt="example" src={photo.thumbnailUrl} />}
                onClick={showModal}
            >
                <div>
                    <CloseCircleOutlined width={50} height={50} className={'close'} onClick={()=> deleteCard(photo.id)} />
                </div>
                <Meta title={photo.title} description={'id: '+ photo.id} />
            </Card>
            <ModalCard body={photo} close={closeModal} isActive={modalVisible}/>
        </>

    );
};

export default PhotoCard;