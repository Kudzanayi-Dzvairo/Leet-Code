function quicksort(items, leftIndex, rightIndex){
    //declare an index that will be our pivot reference
    var pivotIndex

    //if the array has only one item, its already sorted
    //if it has no items we dont wat to sort it!
    if(items.length > 1){
        //As long as the array has two items, we can partition it.

        pivotIndex = partition(items, leftIndex, rightIndex)

        console.log('**pivot is: ', items[pivotIndex])

        //if the left reference hasn't been incremented to
        //reach the pivot yet, we want to keep comparing it
        if(leftIndex < pivotIndex - 1){
            quicksort(items, leftIndex, pivotIndex - 1)
        }

        //If the right reference hasn't reached the pivotIndex yet,
        //we need to keep comparing it
        if(pivotIndex < rightIndex){
            quicksort(items, pivotIndex, rightIndex)
        }
    
    }
    return items 
}

function swap(items, leftPointerIndex, rightPointerIndex){
    // Create a temporary reference for the left item.
    var tempReference = items[leftPointerIndex];
  
    // Move left item to the index that contains right item.
    // Move right item to the temporary reference.
    items[leftPointerIndex] = items[rightPointerIndex];
    items[rightPointerIndex] = tempReference;
  }

//the partition method takes a list of items and a left reference
//as well as a right reference. Both left and right are indexes
//to indicate whre pointers hould start

function partition(items, left, right) {
    //Find the pivot by adding the two indexes together
    // and dividing by towo(the middle element effectively)

    var pivot = items[Math.floor((right + left) / 2)]
    var l = left 
    var r = right

    console.log('** pivot is: ', pivot)
    console.log('** left is: ', items[left])
    console.log('** right is: ', items[right])

    //Once the left reference is greater than the right reference,
    //we have finished sorting this set of items and we can return 
    while( l <= r){
        //if lef pointer is less tha pivot, increment it.
        //in other words move pointer to the right.
    while(items[l] < pivot){
        l++
        console.log('l is now pointing to: ', items[l])
     }

     //if right pointer is greater than the pivot decrement it.
     //in other words move the pointer to the left
     while(items[r] > pivot){
         r--;
         console.log('r is now pointing to: ', items[r])
     }

     //If left pointer is larger than the pivot and the right 
     //pointer is not bigger than the pivot, swap the two elements
     if(l <= r){
         console.log('** now swapping l and r pointers: ', items[l], items[r])

         swap(items, l, r)

     //After swapping increment/decrement the pointers respectively
     l++;
     r--;
     
     console.log('l is not pointing to: ', items[l])
     console.log('r is not pointing to: ', items[r])

     //the left item becomes the new pivot element 
     }

    


    }
}

var items = [19, 22, 63, 105, 2, 46];
console.log(quicksort(items, 0, items.length - 1));