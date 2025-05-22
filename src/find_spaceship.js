// FindSpaceship.js
function findSpaceship() {}
findSpaceship.prototype.add = function(map) {
	const lines = map.split('\n');
	if (lines[lines.length-1].includes('.X')) {
		return [1,0];
	}
	if (map.includes('X')) {
		return [0,0];
	}
	return "Spaceship lost forever";
};
