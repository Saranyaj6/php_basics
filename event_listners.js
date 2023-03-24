//in eventlistner we add event listner in javascript not in html
count=0;
document.getElementById('btn').addEventListener('click',function(){
    count++;
    document.getElementById('count').innerHTML=count;
})
//or
count2=0
//we can't directly call the function button can 
//we call the funcion inside it anonymous function
document.getElementById('btn2').addEventListener('click',function(){Counter();});
function Counter(){
    count2++;
    document.getElementById('count2').innerHTML=count2++;
}

//add event listner for whole document

document.addEventListener('mousemove',function(eve){
    //clientX and clientY are axis we can seen it in console
    //just type console.log(eve) to seen clientX and clientY
    console.log(eve.clientX,eve.clientY);
})