const toRad = (degrees) => (degrees * Math.PI) / 180;

function quadraticFunc({ initialVelocity, angle, initialHeight }, t = null) {
  const a = -9.81 / 2;
  const b = initialVelocity * Math.sin(toRad(angle));
  const c = initialHeight;

  if (typeof t === "number") {
    return a * t ** 2 + b * t + c;
  } else {
    const x1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    const x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

    const positiveRoot = x1 > 0 ? x1 : x2;
    const xVertex = -b / (2 * a);

    return {
      positiveRoot: positiveRoot,
      xVertex: xVertex,
    };
  }
}

function calculate({ initialVelocity, angle, initialHeight }) {
  const motionProps = {
    initialVelocity: Number(initialVelocity),
    angle: Number(angle),
    initialHeight: Number(initialHeight),
  };
  const values = {
    travelTime: 0,
    maxHeight: 0,
    horizontalDistance: 0,
  };

  if (motionProps.initialVelocity === 0) return values;
  const funcProps = quadraticFunc(motionProps);

  values.travelTime = funcProps.positiveRoot;
  console.log(funcProps.xVertex);
  values.maxHeight =
    funcProps.xVertex >= 0
      ? quadraticFunc(motionProps, funcProps.xVertex)
      : quadraticFunc(motionProps, 0);
  values.horizontalDistance =
    motionProps.initialVelocity * Math.cos(toRad(angle)) * values.travelTime;

  Object.keys(values).forEach((key) => {
    values[key] = values[key] > 0 ? values[key].toFixed(2) : 0;
  });

  return values;
}

export default calculate;
