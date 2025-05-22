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

	it('should return [0,0] for "..........\n..........\n..........\n..........\n..........\nX........."', function() {
		expect(spaceshipFinder.add('..........\n..........\n..........\n..........\n..........\nX.........')).toEqual([0,0]);
	});

	it('should return [1,0] for "..........\n..........\n..........\n..........\n..........\n.X........"', function() {
		expect(spaceshipFinder.add('..........\n..........\n..........\n..........\n..........\n.X........')).toEqual([1,0]);
	});

	it('should return [4,0] for "..........\n..........\n..........\n..........\n..........\n....X....."', function() {
		expect(spaceshipFinder.add('..........\n..........\n..........\n..........\n..........\n....X.....')).toEqual([4,0]);
	});

	it('should return [0,1] for "..........\n..........\n..........\n..........\nX.........\n.........."', function() {
		expect(spaceshipFinder.add('..........\n..........\n..........\n..........\nX.........\n..........')).toEqual([0,1]);
	});

	it('should return [0,5] for "X.........\n..........\n..........\n..........\n..........\n.........."', function() {
		expect(spaceshipFinder.add('X.........\n..........\n..........\n..........\n..........\n..........')).toEqual([0,5]);
	});

	it('should return [3,0] for "....\n....\n....\n...X"', function() {
		expect(spaceshipFinder.add('....\n....\n....\n...X')).toEqual([3,0]);
	});

	it('should return [3,3] for "..........\n...X......\n..........\n..........\n.........."', function() {
		expect(spaceshipFinder.add('..........\n...X......\n..........\n..........\n..........')).toEqual([3,3]);
	});

	it('should return [7,2] for "..........\n..........\n..........\n.......X..\n..........\n.........."', function() {
		expect(spaceshipFinder.add('..........\n..........\n..........\n.......X..\n..........\n..........')).toEqual([7,2]);
	});

	it('should return [4,4] for "....X\n.....\n.....\n.....\n....."', function() {
		expect(spaceshipFinder.add('....X\n.....\n.....\n.....\n.....')).toEqual([4,4]);
	});
});
