// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  return Math.abs(42 - distance);
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, destination) {
  let dist = Math.abs(start - destination) * 264;
  if (dist < 400) {
    return 0;
  } else if (dist < 2000) {
    return dist * 0.02;
  } else if (dist > 2000 && dist < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
