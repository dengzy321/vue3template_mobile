import { ADD_COUNT } from './mutatioTypes'

export default {
    [ADD_COUNT]: (state, params) =>{
        state.count = state.count + 1
    }
}