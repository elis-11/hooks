/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from 'react';
import './TodoList.scss';

export const TodoList = ({ idCode }) => {
	const [area, setArea] = useState('home');
	const [todo, setTodo] = useState('');
	const [todoList, setTodoList] = useState([]);
	const todoInputBox = useRef(null);

	const addPrefix = (text) => {
		return `${idCode}-${text}`;
	}

	useEffect(() => {
		const _todoList = JSON.parse(localStorage.getItem(addPrefix('todoList')));
		_todoList !== null && setTodoList([..._todoList]);
		idCode === 'person001' && todoInputBox.current.focus();
	}, []);

	const saveToLocalStorage = (_todoList) => {
		localStorage.setItem(addPrefix('todoList'), JSON.stringify(_todoList));
	}

	const handleClearButton = (e) => {
		e.preventDefault();
		saveToLocalStorage([]);
		setTodoList([]);
		todoInputBox.current.focus();
	}

	const handleAddTodoButton = (e) => {
		e.preventDefault();
		if (todo.trim() !== '') {
			todoList.push(`${todo} (${area})`);
			saveToLocalStorage(todoList);
			setTodo('');
		}
		todoInputBox.current.focus();
	}

	const handleAreaChange = (e) => {
		setArea(e.target.value);
		todoInputBox.current.focus();
	}

	return (
		<div className="todoListComp">
			<form>
				<input id={addPrefix('home')} type="radio" name="area" value="home" checked={area === "home"} onChange={(e) => handleAreaChange(e)} />
				<label htmlFor={addPrefix('home')}>Home</label>

				<input id={addPrefix('work')} type="radio" name="area" value="work" checked={area === "work"} onChange={(e) => handleAreaChange(e)} />
				<label htmlFor={addPrefix('work')}>Work</label>

				<span>{idCode}</span>

				<button className="clearButton" onClick={(e) => handleClearButton(e)}>Clear</button>

				<div className="inputArea">
					<input type="text" ref={todoInputBox} value={todo} onChange={(e) => setTodo(e.target.value)} />
					<button onClick={(e) => handleAddTodoButton(e)}>Add Todo</button>
				</div>
			</form>
			<div className="todoList">
				{todoList.map((m, i) => <div key={i}>{m}</div>)}
			</div>
		</div>
	)
};