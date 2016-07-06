$(function(){
    function log(name,value){
        console.log(name + ":" +value);
    }
    //js中使用最多的是获取content的width和height
    log("[$]width:",$(".box").width()); //content的宽
    log("[$]height:",$(".box").height()); //content的高

    log("[$]outerWidth",$(".box").outerWidth()); //content+padding+borderWidth
    log("[$]outerHeight",$(".box").outerHeight()); //content+padding+borderHeight
    
    log("[$]innerWidth",$(".box").innerWidth()); //content+padding
    log("[$]innerHeight",$(".box").innerHeight());////content+padding

    log("[js]clientHeight",document.querySelector(".box").clientHeight); //content的高+padding
    log("[js]clientWidth",document.querySelector(".box").clientWidth); //content的宽+padding
    
    log("[js]scrollHeight",document.querySelector(".box").scrollHeight); //content的高
    log("[js]scrollWidth",document.querySelector(".box").scrollWidth); //content的宽

    log("[js]offsetHeight",document.querySelector(".box").offsetHeight); //content的高+padding+border
    log("[js]offsetWidth",document.querySelector(".box").offsetWidth);

})