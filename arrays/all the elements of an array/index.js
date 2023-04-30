let fruits = ["apples", "oranges", "bananas"];
let cars = ["audi", "bmw", "mercedes"];
let people = ["Ali", "Nino", "Zuki"];

let allList = [fruits, cars, people];

for(let list of allList)
{
    for(let item of list )
    {
        console.log(item); 
    }
}