import { connect } from 'react-redux';
import ColorList from './ui/ColorList';
import ColorDetails from './ui/ColorDetails';
import AddColorForm from './ui/AddColorForm';
import { addColor, rateColor, removeColor } from '../actions';
import { findById } from '../lib/array-helpers';
import { sortColors } from '../lib/array-helpers';

export const NewColor = connect(null, (dispatch: any) => ({
	onNewColor(title: string, color: string) {
		dispatch(addColor(title, color));
	},
}))(AddColorForm);

export const Colors = connect(
	({ colors }: any, { match }: any) => ({
		colors: sortColors(colors, match.params.sort),
	}),
	(dispatch: any) => ({
		onRemove(id: string) {
			dispatch(removeColor(id));
		},
		onRate(id: string, rating: number) {
			dispatch(rateColor(id, rating));
		},
	})
)(ColorList);

export const Color = connect(({ colors }: any, { match }: any) => ({
	...findById(),
}))(ColorDetails);
