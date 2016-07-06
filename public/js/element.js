$(function(){
    /* :odd表示奇数索引 :even表示偶数索引 first last
    :eq(num) 查找索引处
    :lt(1) 表示索引小于1的元素
    :gt(1) 表示索引大于1的元素
    */
    //:odd查找奇数索引处的元素
    $(".ul-1 li:odd").css({
        "color":"orange"
    });
    $(".ul-2").find("li").eq(2).css("color","blue");//在选择的元素中继续做查找
    $(".ul-2 li").filter(".item-3").css("color","blue"); //筛选选择结果

    /**
     * end
     */

    // $(".ul-3 li.item-2").css("color","green");
    // $(".ul-3 li.item-4").css("color","red");

    $(".ul-3 li.item-2").css("color","green").end().find(".ul-3 .item-4").css("color","red");
    console.log($(".ul-3 li").end());
    console.log($(".ul-3 ").find("li").end());

    var arr = [1,2,3,4,5,6,7,8,9,10];
    $(".ul-3 li").each(function(index){
        console.log("当前索引为"+ index+ "当前的text"+ $(this).text());
    });
    //jquery直接操作数组对象
    $(arr).each(function(index){
        console.log("当前索引为"+ index+ "当前的值"+ this);
    });
    var obj = {};
    obj.name = "小强";
    obj.age = 20;
    $(Object.keys(obj)).each(function(i){
        console.log(i+"-"+this);
    });

    /***
     * jquery中的遍历操作会有很多 实际使用中最多的是each
     */
});