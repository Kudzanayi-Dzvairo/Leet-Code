let times =   [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ]

var mergeMeetingTimes = (rangeArray) => {
       
    rangeArray.sort((a,b) => a.startTime - b.startTime)
      // goal is to find a time whenver every one is available
      // integers represent the number of 30 min blocks from  9am 
      // wirte a function that mergers ranges 

      // takes array of multiple meetings time ranges and returns an array of condensed ranges

     console.log(rangeArray)
}

console.log(mergeMeetingTimes(times))