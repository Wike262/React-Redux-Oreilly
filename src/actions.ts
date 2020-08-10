import fetch from 'isomorphic-fetch';

const parseResponse = (response: any) => response.json();

const logError = (error: any) => console.error(error);

const fetchThenDispatch = (
	dispatch: any,
	url: string,
	method: string,
	body?: string
) =>
	fetch(url, { method, body, headers: { 'Content-Type': 'application/json' } })
		.then(parseResponse)
		.then(dispatch)
		.catch(logError);

export const addColor = (title: string, color: string) => (dispatch: any) =>
	fetchThenDispatch(
		dispatch,
		'/api/colors',
		'POST',
		JSON.stringify({ title, color })
	);

export const removeColor = (id: string) => (dispatch: any) =>
	fetchThenDispatch(dispatch, `/api/color/${id}`, 'DELETE');

export const rateColor = (id: string, rating: number) => (dispatch: any) =>
	fetchThenDispatch(
		dispatch,
		`/api/color/${id}`,
		'PUT',
		JSON.stringify({ rating })
	);
