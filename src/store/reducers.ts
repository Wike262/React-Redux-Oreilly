import C from '../constants.js';

interface State {
	id: string;
}

export const color = (
	state: State = { id: '' },
	action: any = { type: null }
) => {
	switch (action.type) {
		case C.ADD_COLOR:
			return {
				id: action.id,
				title: action.title,
				color: action.color,
				timestamp: action.timestamp,
				rating: 0,
			};
		case C.RATE_COLOR:
			return state.id !== action.id
				? state
				: {
						...state,
						rating: action.rating,
				  };
		default:
			return state;
	}
};

export const colors = (state = [], action: any = { type: null }) => {
	switch (action.type) {
		case C.ADD_COLOR:
			return [...state, color({ id: '' }, action)];
		case C.RATE_COLOR:
			return state.map((c) => color(c, action));
		case C.REMOVE_COLOR:
			return state.filter((c: any) => c.id !== action.id);
		default:
			return state;
	}
};
