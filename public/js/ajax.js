$(function(){
    $("#btn").click(function(){
        console.log("do get data....");
        //http://www.w3school.com.cn/jquery/jquery_ref_ajax.asp
        $.ajax({
            url:"http://apis.baidu.com/apistore/mobilenumber/mobilenumber?phone=15606956007",//请求的地址
            headers:{//请求头
                apikey:"3449a5647981324792e56504a4413e55"
            },
            type:"get", //请求的类型 get post delete···
            async:false, //是否异步 true false 默认true
            data:$("#form").serialize(), //传递的参数 //序列化表单的数据 使用url参数拼接的形式
            dataType:"json", //返回值得类型 json xml text
            //timeout: 20,//设置请求超时时间 毫秒
            beforeSend:function(){//在ajax请求提交之前调用
                //
            },
            success:function(res){ //成功后的回调函数
                console.log(res);
                for(var key in res.retData){
                    $("#"+key).text(res.retData[key]);//获取解析赋值的小技巧
                }
            },
            error:function(err){ //失败后的回调函数
                console.log(err);
            }
        });

        //$
        // $.get("",{},function(res){

        // });
        console.log("此处代码出现在ajax请求后面。。。");
    });
    //测试自己写的接口
    $("#getApi").click(function(){
        //通过get的方法调用ajax请求
        //$.get(url,data,success(res,status,xhr),dataType);
        //$.getJSON(url,data,success(data,status,xhr));
        /**
         * 参数一 url地址
         * 参数二 传递的数据
         * 参数三 回调函数
         * 参数四 返回类型
         */
        $.get("/api/v1/getData",{name:"小强"},function(res){
            console.log(res);
        },"json");
    })
});