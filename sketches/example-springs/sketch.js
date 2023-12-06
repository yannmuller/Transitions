import { SpringNumber } from "../../shared/spring.js"

const spring = new SpringNumber({
	position: 0, // start position
	frequency: 4.5, // oscillations per second (approximate)
	halfLife: 0.15 // time until amplitude is halved
})

window.setup = function () {
	createCanvas(windowWidth, windowHeight);
}

window.draw = function () {

	// set the spring target
	if (mouseIsPressed)
		spring.target = 200
	else
		spring.target = -200


	// update the spring (make it move)
	spring.step(deltaTime / 1000) // deltaTime is in milliseconds, we need it in seconds

	// spring "position" can be mapped to anything,
	// including positions, scale, rotations etc
	// it's just a number that tries to reach a target number
	const x = spring.position

	background(0)
	translate(width / 2, height / 2)
	circle(x, 0, 100)
}
