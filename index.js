// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  distance = location - 42
  return (distance < 0) ? distance * -1 : distance
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, end) {
  let total = end - start
  total = (total < 0) ? total * -1 : total
  return total * 264
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end)
  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance <= 2000) {
    return distance * .02
  } else if (distance > 2000 && distance < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
