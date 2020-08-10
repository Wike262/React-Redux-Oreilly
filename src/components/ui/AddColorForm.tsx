import React, { Component } from 'react';
import '../../stylesheets/AddColorForm.scss';

interface Props {
	onNewColor: (title: string, color: string) => void;
}

class AddColorForm extends Component<Props> {
	constructor(props: Props) {
		super(props);
		this.submit = this.submit.bind(this);
	}

	private _title = React.createRef<HTMLInputElement>();
	private _color = React.createRef<HTMLInputElement>();

	submit(e: React.FormEvent) {
		const { onNewColor } = this.props;
		e.preventDefault();
		onNewColor(this._title.current!.value, this._color.current!.value);
		this._title.current!.value = '';
		this._color.current!.value = '#000000';
		this._title.current!.focus();
	}

	render() {
		return (
			<form className="add-color" onSubmit={this.submit}>
				<input
					ref={this._title}
					type="text"
					placeholder="color title..."
					required
				/>
				<input ref={this._color} type="color" required />
				<button>ADD</button>
			</form>
		);
	}
}

export default AddColorForm;
