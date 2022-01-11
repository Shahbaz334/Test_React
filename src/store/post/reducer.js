import * as actions from './actions'

const init = {
    loading: false,
    error: '',
    post: []
}
export default (state = init, action) => {
    switch (action.type) {
        case actions.SET_POST_REQUEST:
            return { ...state, loading: true, error: '', post: [] }
        case actions.SET_POST_SUCCESS:
            return { ...state, loading: false, post: [...action.payload, ...state.post], error: '' }
        case actions.SET_POST_UPDATE_SUCCESS:
            const data = state.post.map(item => {
                if (action.payload.id == item.id) {
                    return {
                        userId: 1,
                        id: action.payload.id,
                        title: action.payload.data.title,
                        body: action.payload.data.body
                    }
                }
                else return item
            })
            return {
                ...state, loading: false,
                post: [...data],
                error: ''
            }
        case actions.SET_POST_ERROR:
            return { ...state, loading: false, post: [], error: action.payload }
        default:
            return state

    }
}
