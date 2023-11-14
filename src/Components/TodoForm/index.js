import './TodoForm.css';
import { TodoContext } from '../../TodoContext';
import React from 'react';

function TodoForm() {
	const { addTodo, setOpenModal } = React.useContext(TodoContext);

	const [newTodoValue, setNewTodoValue] = React.useState('');

	const onSubmit = event => {
		event.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false);
	};
	const onCancel = event => {
		event.preventDefault();
		setOpenModal(false);
	};
	const onChange = event => {
		setNewTodoValue(event.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<label>Escribe tu nuevo TODO</label>
			<textarea
				placeholder="Agrega aquí de que va el TODO"
				value={newTodoValue}
				onChange={onChange}
			/>

			<div className="TodoForm--buttonContainer">
				<button
					type="button"
					className="TodoForm-button TodoForm-button--cancel "
					onClick={onCancel}>
					Cancelar
				</button>
				<button
					type="submit"
					className="TodoForm-button TodoForm-button--add">
					Añadir
				</button>
			</div>
		</form>
	);
}

export { TodoForm };
