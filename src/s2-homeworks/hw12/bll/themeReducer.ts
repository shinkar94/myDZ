const initState = {
    themeId: 1
}

export type StateThemeType = {
    themeId: number
}

export const themeReducer = (state:StateThemeType = initState, action: ActionType): StateThemeType => {
    switch (action.type) {
        case 'SET_THEME_ID':{
            return {...state, themeId: action.payload.id}
        }
        default:
            return state
    }
}

type ActionType = changeThemeIdType
type changeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) =>{
    return{
        type: 'SET_THEME_ID',
        payload: {
            id
        }
    }as const
}