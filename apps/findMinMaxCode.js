
module.exports = function(array){
// main
//function findMinMax(array){
	var maxmin =[];
	this.array=array;
	this.minNumber=arrayMinimumNumber(this.array);
	this.maxNumber=arrayMaximumNumber(this.array)
	if(this.maxNumber===this.minNumber){
		maxmin.push(this.maxNumber);
	}
	else {
	maxmin.push(this.minNumber);
	maxmin.push(this.maxNumber);
	}
	return maxmin;
}


// function to get minimum number with inheritance
function arrayMinimumNumber(array) { 
  var len = array.length, min = Infinity;
  while (len--) {
    if (array[len] < min) {
      min = array[len];
    }
  }
  return min;
}

// function to get minimum number with inheritance
function arrayMaximumNumber(array) {
  var len = array.length, max = -Infinity;
  while (len--) {
    if (array[len] > max) {
      max = array[len];
    }
  }
  return max;
}



