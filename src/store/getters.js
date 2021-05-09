export default {
    filterUser: state =>{
        const uL = state.userList
        uL.splice(0,1)
        return state.userList = uL
    },
    getCount: state =>{
        return state.count = 100
    }
}