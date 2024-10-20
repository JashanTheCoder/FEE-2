// import TodoList from './todoList';
import React from 'react';
// import TodoList from './todoList';

function App() {
	let todo = [
		{
			task: 'go to gym',
			isComplete: true,
		},
		{
			task: 'go to univ',
			isComplete: false,
		},
		{
			task: 'go to nanke',
			isComplete: true,
		},
		{
			task: 'go to shop',
			isComplete: true,
		},
	];
	todo.map((t) => console.log(t.task));
	<div>
		gfh
		{todo.map((t, index) => (
			<h1 key={index}>{t.isComplete ? t.task : null}</h1>
		))}
	</div>;
}

export default App;
