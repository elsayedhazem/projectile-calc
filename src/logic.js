const toRad = (degrees) => degrees * Math.PI / 180;

function quadraticFunc({ initialVelocity, angle, initialHeight }, t=null) {
	const a = (-9.81/2);
	const b = initialVelocity * Math.sin(toRad(angle));
	const c = initialHeight;

	if (typeof(t) === 'number') {
		return (a * (t ** 2)) + (b * t) + c;
	} else {
		const x1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
		const x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
		
		const positiveRoot =  x1 > 0 ? x1 : x2;
		const xVertex =  - b / 2 * a;

		return {
			positiveRoot: positiveRoot,
			xVertex: xVertex,
		}
	}
}

function calculate(initialVelocity, angle, initialHeight) {
	const motionProps = {
		initialVelocity: initialVelocity,
		initialHeight: initialHeight,
		angle: angle,
	}
	const funcProps = quadraticFunc(motionProps);
	
	const travelTime = funcProps.positiveRoot;
	const maxHeight = funcProps.xVertex >= 0 ? quadraticFunc(motionProps, funcProps.xVertex) : quadraticFunc(motionProps, 0)
	const horizontalDistance = initialVelocity * Math.cos(toRad(angle)) * travelTime;

	return {
		travelTime: travelTime.toFixed(2),
		maxHeight: maxHeight.toFixed(2),
		horizontalDistance: horizontalDistance.toFixed(2),
	}
}

export default calculate;