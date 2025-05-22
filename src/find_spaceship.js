// findSpaceship.js
function findSpaceship() {}
findSpaceship.prototype.add = function(map) {
	let result = "Spaceship lost forever";

	const lines = map.split('\n');
	const highestLine = lines.length - 1;

	lines.forEach(line => {
		if (line.includes('X')) {
			const xCoordinate = line.indexOf('X');
			const yCoordinate = highestLine - lines.indexOf(line); //y reversed
			result = [xCoordinate, yCoordinate];
		}
	});
	return result;
};
