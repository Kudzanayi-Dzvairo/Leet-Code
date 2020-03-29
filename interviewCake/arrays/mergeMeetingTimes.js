let times =   [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ]

var mergeMeetingTimes = (meetings) => {

    //create a dep copy of the meetings array
    const meetingsCopy = JSON.parse(JSON.stringify(meetings))
     
    //Sort by start time
    var sortedMeetings = meetings.sort((a,b) => a.startTime - b.startTime)
    
    //initialize merged meetings with the earliest meeting
    const mergedMeetings = [sortedMeetings[0]]

    console.log(sortedMeetings)

    for(let i = 1; i < sortedMeetings.length; i++){
        const currentMeeting = sortedMeetings[i];
        
        const lastMergedMeeting = mergedMeetings[mergedMeetings.length-1]
     
        //If the current meeting overlaps with the last merged meeting, use the
        // later end time of the two 
        if(currentMeeting.startTime <= lastMergedMeeting.endTime){
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime)
        } else {

            //Add the current meeting since it doesn't overlap
            mergedMeetings.push(currentMeeting)
        }
    }
     return mergedMeetings
}

console.log(mergeMeetingTimes(times))