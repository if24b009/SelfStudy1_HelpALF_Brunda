// findSpaceship.js
function findSpaceship() {}
findSpaceship.prototype.add = function(map) {
	const lines = map.split('\n');
	const highestLine = lines.length - 1;

	for(let i = 0; i <= highestLine; i++) {
		const xCoordinate = lines[i].indexOf('X');
		if (xCoordinate !== -1) {
			const yCoordinate = highestLine - i; //y reversed
			return [xCoordinate, yCoordinate];
		}
	}

	return "Spaceship lost forever";
};
