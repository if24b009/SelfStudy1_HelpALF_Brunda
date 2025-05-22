describe('Find Spaceship', function() {
	beforeEach(function() {
		spaceshipFinder = new findSpaceship();
	});

	it('should return 0 for an empty string', function() {
		expect(spaceshipFinder.add('')).toEqual(0);
	});
});
