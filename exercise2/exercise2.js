// 1-Write a function to find the largest element in an array.
var large = 0;
    function largest() {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > large) {
          large = arr[i];
        }
      }
      console.log(large);
    }
    console.log(largest());

// 2-Write a function to find the smallest element in an array.
var small = 0;
    function smallest() {
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] < small) {
          small = arr1[i];
        }
      }
      console.log(small);
    }
    console.log(smallest());

// 3-Write a function to find the sum of all elements in an array.
var sum0 = 0;
function Sum() {
  const arr2 = [5, 2, 11, 7];
  for (var i = 0; i < arr2.length; i++) {
    sum0 = sum0 + arr2[i];
  }
  console.log(sum0);
}
console.log(Sum());

// 4-Write a function to find the average of all elements in an array.
var sum00 = 0;
    var avg = 1;
    function Avg() {
      const arr3 = [5, 2, 11, 7];
      for (var i = 0; i < arr3.length; i++) {
        sum00 = sum00 + arr3[i];
        avg = sum00 / arr3.length;
      }
      console.log("The sum of the array is " + " " + sum00);
      console.log("The average of the array is " + " " + avg);
    }
    console.log(Avg());

// 5-Write a function to find the median of all elements in an array.
const arrr = [1, 3, 5, 7, 9];
    var r;
    function median() {
      if (arrr.length % 2 == 1) {
        r = arrr.length;
        var med = r / 2 - 1;
        console.log("The median is " + arrr[med]);
      }
    }
    console.log(median());

// 6-Write a function to remove all duplicates from an array.
function duplicates() {
    const arrayy = [5, 2, 11, 7, 5];
    if (
      arrayy[0] == arrayy[1] ||
      arrayy[0] == arrayy[2] ||
      arrayy[0] == arrayy[3] ||
      arrayy[0] == arrayy[4]
    ) {
      arrayy[0] = null;
    } else if (
      arrayy[1] == arrayy[0] ||
      arrayy[1] == arrayy[2] ||
      arrayy[1] == arrayy[3] ||
      arrayy[1] == arrayy[4]
    ) {
      arrayy[1] = null;
    } else if (
      arrayy[2] == arrayy[0] ||
      arrayy[2] == arrayy[1] ||
      arrayy[2] == arrayy[3] ||
      arrayy[2] == arrayy[4]
    ) {
      arrayy[2] = null;
    } else if (
      arrayy[3] == arrayy[0] ||
      arrayy[3] == arrayy[1] ||
      arrayy[3] == arrayy[2] ||
      arrayy[3] == arrayy[4]
    ) {
      arrayy[3] = null;
    }

    console.log(arrayy);
  }
  console.log(duplicates());

// 7-Write a function to sort an array in ascending order.
function ordre(list) {
    var result = [3, 2, 7, 1, 8, 4];

    for (i = 0; i < list.length; i++) {
      for (j = 0; j < list.length; j++) {
        if (list[i] > list[j + 1]) {
        }
      }
    }

    console.log(result);
  }

  ordre(nombres);

// 8-Write a function to sort an array in descending order.

// 9-Write a function to shuffle the elements of an array randomly.