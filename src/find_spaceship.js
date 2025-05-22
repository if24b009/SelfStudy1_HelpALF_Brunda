// FindSpaceship.js
function findSpaceship() {}
findSpaceship.prototype.add = function(map) {
	if (map.includes('X')) {
		return [0,0];
	}
	return "Spaceship lost forever";
};
