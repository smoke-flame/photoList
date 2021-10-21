import axios from "axios";
import {IPhoto, PhotoAction, PhotoTypes} from "../../types/photo";
import {Dispatch} from "redux";


export const fetchPhotos = (page: number, limit: number) => {
    return async (dispatch: Dispatch<PhotoAction>) => {
        try{
            dispatch({type: PhotoTypes.FETCH_PHOTO});
            const res = await axios.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos', {
                params: {
                    _page: page,
                    _limit: limit
                }
            })
            setTimeout(()=> {
                dispatch({type:PhotoTypes.FETCH_PHOTO_SUCCESS, payload: res.data})
            }, 500)
        }catch(e) {
            dispatch({
                type: PhotoTypes.FETCH_PHOTO_ERROR,
                payload: 'An error occurred while uploading photos'
            });
        }
    }
}

export const setPhotoPage = (page: number): PhotoAction => {
    return {type: PhotoTypes.SET_PHOTO_PAGE, payload:page}
}

export const deleteTodoPhoto = (photoId: number): PhotoAction => {
    return {type: PhotoTypes.DELETE_PHOTO, payload: photoId}
}

export  const setPhotoSort = (sortBy: string):PhotoAction => {
    return {type: PhotoTypes.SET_PHOTO_SORT, payload: sortBy}
}