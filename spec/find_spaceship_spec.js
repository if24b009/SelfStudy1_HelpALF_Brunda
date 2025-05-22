describe('Find Spaceship', function() {
	beforeEach(function() {
		spaceshipFinder = new findSpaceship();
	});

	it('should return "Spaceship lost forever" for an empty string', function() {
		expect(spaceshipFinder.add('')).toEqual("Spaceship lost forever");
	});
});
