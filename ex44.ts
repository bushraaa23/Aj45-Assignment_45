//The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time.


function sandwich(... items: string[]) : void {
    console.log("subaru order:");
    
    for(let i = 0; i < items.length; i++){
        console.log(`- ${items[i]}`);
        
    }
}

console.log("enjoy your sandwich bushra");


sandwich('capsicum' , 'tomato', 'chicken')
sandwich('beef' , 'cheese')
sandwich('garlic ', 'chicken', 'mayo sause')