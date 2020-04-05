var inFlightTimes = (movieLengths, flightLength){
    //create a set 
    const movieLengthsSeen = new Set();
    
    //check for movies we've seen so far
    for(let i = 0; i < movieLengths ; i++){

        const firstMovieLength = movieLength[i]
        
        //subtract current movie length from flight to find matching movie length time 
        const matchingSecondMovieLength = flightLength - firstMovieLength
        //see if matching movie length exists is set 
        if(movieLengthsSeen.has(matchingSecondMovieLength)){
            return true
        }
        
        //if not add current movie to list of movies to choose from 
        movieLengthsSeen.add(firstMovieLength)
    }

}