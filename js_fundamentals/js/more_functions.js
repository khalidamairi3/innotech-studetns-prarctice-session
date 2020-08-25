

// - A function that returns the middle element of an array
// - A function that calculates the average of an array of user scores
// - A function that will return all "tweets" that contain a word (meaning the function takes in an array of tweets and the word to search for). 

//////////////////// comment out the log statements to print out /////////////////////////////////////////// 

// this function will return the middle element when the array length is odd number for example if array has 5 elements it will return the 3rd one.
// when the number of elements is even there is no exact middle element. for example if we have 4 elements. 2nd and 3rd elements are in the middle but this function will return the second one   
function middleElement(array){
    var indexOfMiddleElement = Math.floor(array.length/2);
    return array[indexOfMiddleElement];
}

function averageScore(array){
    var sum=0;
    for(var i=0; i<array.length;i++){

        sum+=array[i];
    }
    var avg=sum/array.length;
    return avg;
}

function serach(array,word){
    var tweets_found=[];
    for(var i=0;i<array.length;i++){
        if(array[i].message.includes(word))
        tweets_found.push(array[i]);
    }

    return tweets_found;
}


var scores=[20,40,50,60,80];

var scores_avg=averageScore(scores);

// console.log(scores_avg);

var middleElement=middleElement(scores);
// console.log(middleElement);

var tweets = [ 
    { 
        message: "happy birthday!!!",
        username: "khaled",
        created_at: "05-25-2020",
        age:17

    }, 
    { 
        message: "today i'am so happy!!!",
        username: "alex",
        created_at: "09-25-2020",
        age:29
    },
    {
        message: "innotech college is offering web development program in 2020",
        username: "jose",
        created_at: "01-28-2020",
        age:34
    }
    

];

var tweets_includes_happy = serach(tweets,"happy");

// console.log(tweets_includes_happy);




