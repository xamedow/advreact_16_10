import { appName } from '../config';
import {
	Record,
	List,
} from 'immutable';
import { createSelector } from 'reselect';

/**
 * Constants
 * */
export const moduleName = 'people';
const prefix = `${appName}/${moduleName}`;

export const ADD_PERSON = `${prefix}/ADD_PERSON`;

/**
 * Reducer
 * */
export const ReducerRecord = Record({
	people: List(),
	loading: false,
	error: null,
});

export default function reducer(state = new ReducerRecord(), action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_PERSON:
			return state
				.set('people', state.get('people').push(payload))

		default:
			return state;
	}
}

/**
 * Selectors
 * */

export const stateSelector = state => state[moduleName];
export const peopleSelector = createSelector(stateSelector, state => state.people);

/**
 * Action Creators
 * */
export function addPerson(firstName, lastName, email) {
	return {
		type: ADD_PERSON,
		payload: { firstName, lastName, email },
	};
}
