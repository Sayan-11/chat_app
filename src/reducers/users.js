const users = (state=[], action)=>{
    switch (action.type) {
        case "ADD_USER":
        return(
            state.concat([
                {
                    author: action.username,
                    id: action.id
                  }
            ]
        )
        
    )
    case "UPDATE_USER_LIST":
    return(
        action.users
    )
    default:
      return state
} }

export default users