var globalArr = [
  [0, 0, 0, 0, 0, 0, 0,],
  [0, 1, 0, 0, 0, 0, 0,],
  [0, 0, 1, 0, 0, 1, 1,],
  [0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 1, 1, 1, 1,],
  [0, 0, 1, 1, 0, 0, 0,],
];



// WRITE CODE HERE >>>>>>

function victory(arr,symbol) {
  return victoryHorizontLine(arr,symbol) ||
    victoryVerticalLine(arr,symbol) ||
    victoryLeftBottom(arr,symbol) ||
    victoryLeftTop(arr,symbol) ||
    victoryRightBottom(arr,symbol) ||
    victoryRightTop(arr,symbol);

}
function victoryRightTop (arr,symbol) {
  var colCount = arr[0].length;
  var lineCount = arr.length;
  var point = 0;

  for (var j = colCount - 1; j >= 0; j--) {
    for (var i = 0; i < lineCount; i++) {
      if (j-i <= -1) {
        continue;
      }
      if (arr[i][j-i] == symbol){
        point++;
      } else {
        point = 0;
      }
      if (point == 4) {
        return true;
      }
    }
    point = 0;
  }
  return false;
}
function victoryRightBottom (arr,symbol) {
  var colCount = arr[0].length;
  var lineCount = arr.length;
  var point = 0;

  for (var i = 0; i < lineCount ; i++) {
    for (var j = colCount -1; j >= 0; j--) {
      var d = colCount -1 -  j;
        if (i + d >= lineCount) {
          continue;
        }
        if (arr[i + d][j] == symbol){
          point++;
        } else {
          point = 0;
        }
        if (point == 4) {
          return true;
        }
      }
    point = 0;
  }
  return false;
}
function victoryLeftTop(arr,symbol) {
  var colCount = arr[0].length;
  var lineCount = arr.length;
  var point = 0;
  for (var j = 0; j < colCount; j++) {
    for(var i = 0; i < lineCount; i++) {

      if (j + i >= colCount) {
        continue;
      }
      if (arr[i][j + i] == symbol) {
        point++;
      } else {
        point = 0;
      }
      if (point == 4) {
        return true;
      }
    }
    point = 0;
  }
  return false;
}
function victoryLeftBottom(arr,symbol) {
  var colCount = arr[0].length;
  var lineCount = arr.length;
  var point = 0;

  for (var i = 0; i < lineCount; i++) {
    for (var j = 0; j < colCount; j++) {
      if (i + j >=lineCount) {
        continue;
      }
      if (arr[i+j][j] == symbol) {
        point++;
      } else {
        point = 0;
      }
      if (point == 4) {
        return true;
      }
    }
    point = 0;
  }
  return false;
}
function victoryVerticalLine(arr,symbol) {
  var point = 0;
  var colCount = arr[0].length;
  var lineCount = arr.length;

  for (var j = 0; j < colCount; j++) {
    for (var i = 0; i < lineCount; i++) {
      if (arr[i][j] == symbol) {
        point++;
      } else {
        point = 0;
      }
      if (point == 4) {
        return true;
      }
    }
    point = 0;
  }
  return false;
}
function victoryHorizontLine(arr,symbol) {
  var point = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {

      if (arr[i][j] == symbol) {
        point++;
      } else {
        point = 0;
      }
      if (point == 4) {
        return true;
      }
    }
    point = 0;
  }
  return false;
}
function print(arr) {
  arr.forEach(function(line){console.log(line.join(`|`))} );
}


function massive(arr,col,symbol) {

  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i][col] == 0) {
      arr[i][col] = symbol;
      break;
    }
  }
  return arr;
}

// <<<<<< WRITE CODE HERE
