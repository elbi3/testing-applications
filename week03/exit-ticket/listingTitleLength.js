export function listingTitleLength(string){
    if(string.length < 5 || string.length > 50) {
        throw new Error(`${string} is an invalid title length`);
    } else { 
        console.log("Title: ", string);
        return string;
    }
};

// listingTitleLength("happy");
// listingTitleLength("happier");
// listingTitleLength("hip");