//O(1)
function printFirstItem(items) {
    console.log(items[0]);
  }

  //O(n)
  function printAllItems(items) {
    items.forEach(item => {
      console.log(item);
    });
  }

 //O(n2)
 function printAllPossibleOrderedPairs(items) {
    items.forEach(firstItem => {
      items.forEach(secondItem => {
        console.log(firstItem, secondItem);
      });
    });
  }