import {Schema} from "../../../utils/schema";

export enum ACTIONS {
    SET_FIELD = 'SET_FIELD',
    SET_ERROR = 'SET_ERROR'
}

interface State extends Schema {
    errors?: Partial<Record<keyof Schema, string | null>> | null;
}

export type Action =
    | { type: ACTIONS.SET_FIELD; payload: Partial<State> }
    | { type: ACTIONS.SET_ERROR; payload: State["errors"] };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ACTIONS.SET_FIELD:
            const updatedState = {...state, ...action.payload};
            // Ensure that the payload only includes valid keys of the State interface
            const validKeys = Object.keys(state) as Array<keyof Schema>;
            const payloadKeys = Object.keys(action.payload) as Array<keyof Schema>;
            const invalidKeys = payloadKeys.filter(key => !validKeys.includes(key));
            if (invalidKeys.length > 0) {
                throw new Error(`Invalid keys in SET_FIELD action payload: ${invalidKeys.join(', ')}`);
            }
            return updatedState;
        case ACTIONS.SET_ERROR:
            return {
                ...state,
                errors: {...state.errors, ...action.payload},
            }
        default:
            return state;
    }
}


export {
    reducer
}