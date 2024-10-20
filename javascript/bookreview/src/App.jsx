import React from 'react';
import './index.css';
function Bookreview() {
	const books = [
		{
			title: 'laws of power ',
			author: 'Harper Lee',
			description: 'A novel about discpiline and human nature .',
		},
		{
			title: 'YOU CAN WIN ',
			author: 'George',
			description: 'About life motivation .',
		},
		{
			title: 'physcology of money ',
			author: 'F Fitzgerald',
			description: 'A story of love and tragedy set in the Jazz Age.',
		},
	];

	return (
		<div className='book-container'>
			{books.map((book, index) => (
				<div className='card' key={index}>
					;
					<label htmlFor=''>
						{' '}
						<q>
							{' '}
							qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqaQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQqQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
							z+
						</q>
					</label>
					<h2>{book.title}</h2>
					<h4>by {book.author}</h4>
					<p>{book.description}</p>
				</div>
			))}
		</div>
	);
}
