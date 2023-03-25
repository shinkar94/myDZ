import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let sortByName = (a = state[0], b = state[0]) => (
                action.payload === "up" ? a.name > b.name : a.name < b.name
            ) ? 1 : -1
            let newState = state.sort(sortByName)
            return newState
        }
        case 'check': {
            let sortByName = (a = state[0], b = state[0]) => a.name < b.name ? 1 : -1
            return state.sort(sortByName).filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}
