var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  //add name to end of array
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  var i = 0;
  while (i < katzDeliLine.length) {
    i++
  }
  if (katzDeliLine.length === 0) {
    return (`There is nobody waiting to be served!`);
  }
  else
  return (`Currently serving ${katzDeliLine.shift()}.`);
  //shift name off katzDeliLine after called
}

var line = []
function currentLine(katzDeliLine) {
  var i = 0
  while (i < katzDeliLine.length) {
    line.push(` `+ [i+1] +`. `  + katzDeliLine[i]);
    i++;
  }
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.");
  }
  else {
    return ("The line is currently:" + line);
  }
}
