//Question37: Large Shirt;

function make_shirt(size: string = "large", message: string ="I LOve TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); //default large and message
make_shirt("medium"); //default message, medium size
make_shirt("small", "Dive into Coding"); //custom message,small size
