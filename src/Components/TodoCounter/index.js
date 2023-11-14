import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
	const { totalTodos, completedTodos } = React.useContext(TodoContext);
	//  const { totalTodos, completedTodos } = React.useContext;

	return (
		<h1 className="TodoCounter">
			{totalTodos === 0 && <>Crea un Nuevo TODO</>}
			{totalTodos > 1 && (
				<>
					...Has completado <span>{completedTodos}</span> de{' '}
					<span>{totalTodos}</span> TODOs{' '}
				</>
			)}
			{completedTodos === totalTodos && totalTodos > 1 && (
				<>MUY BIEN TERMINASTE TODOS LOS TODO</>
			)}
		</h1>
	);
}

export { TodoCounter };
