import {PhotoState, PhotoAction, PhotoTypes} from '../../types/photo'
const initialState : PhotoState = {
    photos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    sortedBy: 'id'
}

export  const photoReducer = (state: PhotoState  = initialState  , action:PhotoAction): PhotoState => {
    switch (action.type) {
        case PhotoTypes.FETCH_PHOTO:
            return {...state, loading: true, error:null, photos:[]}
        case PhotoTypes.FETCH_PHOTO_SUCCESS:
            return {...state, loading: false, error:null, photos:action.payload }
        case PhotoTypes.FETCH_PHOTO_ERROR:
            return {...state, loading: false, error:action.payload,}
        case PhotoTypes.SET_PHOTO_PAGE:
            return {...state, page:action.payload }
        case PhotoTypes.DELETE_PHOTO:
            return {...state, photos:state.photos.filter(photo=> photo.id != action.payload)}
        case PhotoTypes.SET_PHOTO_SORT:
            const sortBy = action.payload
            if(sortBy === 'id') {
                return {...state, sortedBy: sortBy, photos: state.photos.sort((a, b) => (a.id >b.id ? 1: -1))}
            }
            return {...state, sortedBy: sortBy, photos: state.photos.sort((a, b) => (a.title > b.title ? 1: -1))}

        default:
            return state
    }
}