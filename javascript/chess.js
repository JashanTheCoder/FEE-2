document.addEventListener('DOMContentLoaded', () => {
	const chessboard = document.getElementById('chessboard');

	// Array of IDs for the pawns in the second row
	const pawnIDs = ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'];

	// Path to the pawn image
	const pawnImage = 'https://icon2.cleanpng.com/20180702/cuu/aaxi01kp6.webp'; // Replace with the actual path to your pawn image

	// Add pawns to the second row
	pawnIDs.forEach((id) => {
		const square = document.getElementById(id);
		const pawn = document.createElement('div');
		pawn.className = 'pawn';
		pawn.style.backgroundImage = `url(${pawnImage})`; // Set the pawn image
		pawn.style.backgroundSize = 'contain';
		pawn.style.backgroundRepeat = 'no-repeat';
		pawn.style.backgroundPosition = 'center';
		pawn.draggable = true; // Enable dragging for the pawn
		pawn.dataset.originalPosition = id; // Store the original position
		square.appendChild(pawn);
	});

	// Handle drag and drop events
	chessboard.addEventListener('dragstart', (event) => {
		if (event.target.classList.contains('pawn')) {
			event.dataTransfer.setData(
				'text/plain',
				event.target.dataset.originalPosition
			);
		}
	});

	chessboard.addEventListener('dragover', (event) => {
		event.preventDefault(); // Necessary to allow dropping
	});

	chessboard.addEventListener('drop', (event) => {
		event.preventDefault();
		const fromId = event.dataTransfer.getData('text/plain');
		const toId = event.target.id;

		if (event.target.classList.contains('square') && fromId) {
			const fromSquare = document.getElementById(fromId);
			const toSquare = document.getElementById(toId);

			if (fromSquare && toSquare) {
				const pawn = fromSquare.querySelector('.pawn');
				if (pawn) {
					fromSquare.removeChild(pawn);
					toSquare.appendChild(pawn);
					pawn.dataset.originalPosition = toId; // Update the position
				}
			}
		}
	});
});
