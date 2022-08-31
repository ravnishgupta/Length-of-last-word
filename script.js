/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    //split s by space
    //start backward and stop at the element which is not a blank
    //return length of that element
    if (s.length === 0) {
        return s.length
    }
    let myArray =  s.split(" ");
    for (var i=myArray.length-1; i>=0; i--) {
        if (myArray[i].length > 0) {
            return myArray[i].length
        }
    }
};
