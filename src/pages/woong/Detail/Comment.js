import React from 'react';

function Comment(props) {
	return (
		<ul className='reviewLog'>
			{props.commentArray &&
				props.commentArray.map((comment, id) => (
					<li key={id}>
						<span className='nickname'>woongstaa</span>
						<span>{comment}</span>
					</li>
				))}
		</ul>
	);
}

export default Comment;
