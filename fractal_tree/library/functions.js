//Returns angle between two vectors, unit can be "deg" or radians
function v2a(vector1, vector2, unit) {
  const vector1_length = Math.sqrt(vector1[0] ** 2 + vector1[1] ** 2);
  const vector2_length = Math.sqrt(vector2[0] ** 2 + vector2[1] ** 2);

  if (vector1_length == 0 || vector2_length == 0) {
    return NaN;
  }
  const vector_product = vector1[0] * vector2[0] + vector1[1] * vector2[1];
  //angle as degrees
  if (unit == "deg") {
    const angle = (Math.acos(vector_product / (vector1_length * vector2_length)) * 180) / Math.PI;
    return angle;
  }

  //angle as radians
  else {
    const angle = Math.acos(vector_product / (vector1_length * vector2_length));
    return angle;
  }
}

function fits(number, divisor){
  return Math.floor(number/divisor)
}
