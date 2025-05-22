// FindSpaceship.js
function findSpaceship() {}
findSpaceship.prototype.add = function(map) {
	let result = "Spaceship lost forever";
	const lines = map.split('\n');
	if (lines[lines.length-1].includes('X')) {
		const xCoordinate = lines[lines.length-1].indexOf('X');
		result = [xCoordinate,0];
	}
	return result;
};
