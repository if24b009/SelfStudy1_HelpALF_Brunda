describe('Find Spaceship', function() {
	beforeEach(function() {
		spaceshipFinder = new findSpaceship();
	});

	it('should return "Spaceship lost forever" for an empty string', function() {
		expect(spaceshipFinder.add('')).toEqual("Spaceship lost forever");
	});

	it('should return "Spaceship lost forever" for "........."', function() {
		expect(spaceshipFinder.add('.........')).toEqual("Spaceship lost forever");
	});

	it('should return "Spaceship lost forever" for "..........\n..........\n..........\n..........\n..........\n.........."', function() {
		expect(spaceshipFinder.add('..........\n..........\n..........\n..........\n..........\n..........')).toEqual("Spaceship lost forever");
	});
});
