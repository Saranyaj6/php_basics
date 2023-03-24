//passing function as parameter
function a(call){
    console.log("this is function a");
    var a_num =8;
    call(a_num);
}
function b(num){
    console.log("this is function b",num);
}

a(b);

//anonymous function inside the function or 
//callback function
a(function(){
    console.log("this is callback function");
})

