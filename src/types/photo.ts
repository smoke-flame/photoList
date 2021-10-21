export interface  IPhoto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface PhotoState  {
    photos: IPhoto[];
    loading: boolean,
    error: null | string;
    page: number;
    limit: number;
    sortedBy: string
}

interface FetchPhotoAction {
    type: PhotoTypes.FETCH_PHOTO;
}
interface FetchPhotoSuccessAction {
    type: PhotoTypes.FETCH_PHOTO_SUCCESS;
    payload: IPhoto[];
}
interface FetchPhotoErrorAction {
    type: PhotoTypes.FETCH_PHOTO_ERROR;
    payload: string;
}
interface SetPageAction {
    type: PhotoTypes.SET_PHOTO_PAGE;
    payload: number;
}
interface DeletePhotoAction {
    type: PhotoTypes.DELETE_PHOTO;
    payload: number;
}
interface SetPhotoSortAction {
    type: PhotoTypes.SET_PHOTO_SORT;
    payload: string;
}
export enum PhotoTypes {
    FETCH_PHOTO = 'FETCH_PHOTO',
    FETCH_PHOTO_SUCCESS ='FETCH_PHOTO_SUCCESS',
    FETCH_PHOTO_ERROR = 'FETCH_PHOTO_ERROR',
    SET_PHOTO_PAGE = 'SET_PHOTO_PAGE',
    DELETE_PHOTO= 'DELETE_PHOTO',
    SET_PHOTO_SORT= 'SET_PHOTO_SORT',
}

export type PhotoAction =
    FetchPhotoErrorAction
    | FetchPhotoAction
    | FetchPhotoSuccessAction
    | SetPageAction
    | DeletePhotoAction
    | SetPhotoSortAction
