import { CreateTodoButton } from '../Components/CreateTodoButton';
import { TodosLoading } from '../Components/TodosLoading';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { EmptyTodos } from '../Components/EmptyTodos';
import { TodosError } from '../Components/TodosError';
import { TodoItem } from '../Components/TodoItem';
import { TodoList } from '../Components/TodoList';
import React from 'react';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Components/Modal';
import { TodoForm } from '../Components/TodoForm';

function AppUI() {
	const {
		loading,
		error,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
	} = React.useContext(TodoContext);

	return (
		<>
			<TodoCounter />
			<TodoSearch />

			<TodoList>
				{loading && (
					<>
						<TodosLoading />
						<TodosLoading />
						<TodosLoading />
					</>
				)}
				{error && <TodosError />}
				{!loading && searchedTodos.length === 0 && <EmptyTodos />}

				{searchedTodos.map(todo => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			<CreateTodoButton setOpenModal={setOpenModal} />

			{openModal && (
				<Modal>
					<TodoForm></TodoForm>
				</Modal>
			)}
		</>
	);
}
export { AppUI };
