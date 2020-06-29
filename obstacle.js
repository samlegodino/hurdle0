function Obstacle(x, y, speed) {
	this.x = x;
	this.y = y;
	this.cleared = false;
	this.speed = speed;
}

Obstacle.prototype.width = 25;
Obstacle.prototype.height = 40;
Obstacle.prototype.color = 'red';

Obstacle.prototype.show = function() {
	fill(this.color);
	rectMode(CENTER);
	rect(this.x, this.y, this.width, this.height);

	// Move to left
	this.x -= this.speed;
}