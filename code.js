//used replit AI tool to help get "last" to be as intended(marked in code)
//I also veiwed the repositories of Ishita Patel,Keifer Buss, Cian Melker, and Caden McFate to look for inspiration for some of the functions I wanted to make or operate a certain way
function mergesort(array) {
    //console.log(array);
    
    const arr_len = array.length;
    
    for (let i = 1; i <= arr_len - 1; i = (2*i)) {
        for (let j = 0; j < arr_len - 1; j = (j+(2*i))) {
            let mid = j + i - 1;
            //the line after this is what the tool was used for
            let last = Math.min(j + 2 * i - 1, arr_len - 1);
            let left = j;
            let right = mid + 1;
            
            while (left <= mid && right <= last) {
                if (array[left] > array[right]) {
                    let tmp = array[right];
                    for (let k = right; k > left; k--) {
                        array[k] = array[k - 1];
                    }
                    array[left] = tmp;
                    left++;
                    right++;
                    mid++;
                } else {
                    left++;
                }
            }
        }
    }
    
    //console.log(array); 
    return array; 
}

//let arr = [-11,5,-4,2,7,3,6,3333];
//mergesort(arr);
