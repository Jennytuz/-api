$(function(){

    initProvince();
    function initProvince(){
        $.get("/api/v1/getAddressData",{},function(res){
            if(res.status =="y"){
                var strOption = "";
                $(res.data).each(function(index){
                    strOption += '<option value="'+this.ProID+'">'+ this.name + '</option>';
                })
                $("#province").html($(strOption));
            }

        },"json")
    }

    $("#province").change(function(){
    console.log($(this).val());
    changeCity();
    changeArea();
    });

    function changeCity(){
         $.get("/api/v1/getAddressData/citys",{},function(res){
             if(res.status =="y"){
                var strOptionCity = "<option>请选择城市</option>";
                $(res.data).filter(function(i,v){
                    return v.ProID == $("#province").val()
                }).each(function(index){
                    strOptionCity += '<option value="'+this.CityID+'">'+ this.name + '</option>';
                });
                console.log(strOptionCity);
                $("#city").html($(strOptionCity));
                
            }
         },"json");
         
    }
    $("#city").change(function(){
    console.log($(this).val());
    changeArea();
    });
    function changeArea(){
        $.get("/api/v1/getAddressData/areas",{},function(res){
            if(res.status =="y"){
                var strOptionArea = "<option>请选择地区</option>";
                $(res.data).filter(function(i,v){
                    return v.CityID == $("#city").val()
                }).each(function(index){
                    strOptionArea += '<option value="'+this.Id+'">'+ this.DisName + '</option>';
                });
                console.log("本市所有地区"+strOptionArea);
                $("#area").html($(strOptionArea));

            }
        },"json");
    }



});