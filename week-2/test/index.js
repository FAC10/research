function addition(x, y) {
    return x+y;
}

function multiplication(x, y) {
    return x*y;
}

function subtraction(x, y) {
    return x-y;
}

function integration (a, b, c, d) {
  var result;
  result = addition(a,b);
  result = multiplication(result, c);
  result = subtraction(result, d);
  return result;
}
