// @ts-ignore
import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchPhotos, setPhotoPage, deleteTodoPhoto, setPhotoSort} from "../store/action-creators/photo";
import PhotoCard from "./PhotoCard";

import { Spin } from 'antd';


const PhotoList: React.FC = () => {
    const {photos, limit, page, loading, error, sortedBy} = useTypedSelector(state => state.photo)
    const pages = [1, 2, 3, 4, 5, 6] // let leave only 6 pages
    const sortFlags = ['name', 'id']

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPhotos(page, limit))
    }, [page, limit])

    const deleteCard = (cardId: number) => {
        dispatch(deleteTodoPhoto(cardId))
    }

    if(error) {
        return <h1>{error}</h1>
    }

    return (
       <>
           {!loading && !error &&
            <div className={'sort'}>
                Sort by
                {sortFlags.map(flag=> (
                    <span className={sortedBy === flag? 'flag active': 'flag'}
                          key={flag}
                          onClick={()=> dispatch( setPhotoSort(flag) ) }
                    >
                        {flag}
                    </span>
                ))}
            </div>
           }
           <div className={'contentWrapper'} >
               {loading
                   ? <Spin size="large" />
                   : photos.map(photo => (
                       <PhotoCard deleteCard={deleteCard} key={photo.id} photo={photo} />
                   ))
               }
           </div>
           <div className={'pages'}>
               {pages.map(p => (
                   <div
                       className={p === page? 'active page': 'page'}
                       onClick={()=> dispatch(setPhotoPage(p)) }
                       key={p}
                   >
                       {p}
                   </div>
               ))}
           </div>
       </>
    );
};

export default PhotoList;