import { EventAction, EventState } from './types';

export const initialState: EventState = {
    guests: [],
    events: [],
};

export default function EventReducer(state = initialState, action: EventAction): EventState {
    switch (action.type) {
        default:
            return state;
    }
}
