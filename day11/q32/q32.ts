// Question32: Checking userNames;
let current_users: string [] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["user1", "user6", "user7", "admin", "user9"];

new_users.forEach(newuser => {
    if (current_users.some(currentuser => currentuser.toLowerCase() === newuser.toLowerCase())) {
        console.log(`${newuser} will need to enter a new username.`);
        
    } else {
        console.log(`${newuser} is available.`);
        
    }
}) 