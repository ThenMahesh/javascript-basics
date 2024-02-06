function tellfortune(numberOfChildren,partnerName,location,jobTitle)
{
    var future = "you will be a " +jobTitle+ " in " +location+ " and married to " +partnerName+ "with" +numberOfChildren+ "kids"
    return(future);
}

console.log(tellfortune("2", "Sam", "Toronto", "developer"));
console.log(tellfortune("2", "Daniel", "Windsor", "architecht"));
console.log(tellfortune("1", "jone", "Missisauga", "businessanalyst"));
console.log(tellfortune("3", "Deborah", "London", "fashiondesigner"));