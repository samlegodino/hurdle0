function Ground(x, y) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = 50;
}

Ground.prototype.show = function() {
	fill(0);
	noStroke();
	rectMode(CENTER);
	rect(this.x, this.y, this.width, this.height);
}