//example of the rest operator
//The rest operator ... turns the arguments of function login into an array. this allows variable arguments to be passed to the function.
//the rest operator has to be the last argument

function login(...options){
console.log(options)
}

login("facebook",1,2,3,4)


//result --> facebook 1 2 3 4  
