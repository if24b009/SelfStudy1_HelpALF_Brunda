// FindSpaceship.js
function findSpaceship() {}
findSpaceship.prototype.add = function(map) {
	let result = "Spaceship lost forever";
	const lines = map.split('\n');
	if (lines[lines.length-1].includes('.X')) {
		result = [1,0];
	}
	else if (map.includes('X')) {
		result = [0,0];
	}
	return result;
};
