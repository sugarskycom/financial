$(function() {
    $(".btnPassword").click(function(){
        BootstrapDialog.show({
            type:BootstrapDialog.TYPE_DEFAULT,
            title:"修改密码",
            message:$("<div></div>").load('/Account/cpassword'),
        })
    });

    $(".btnEmail1,.btnEmail2").click(function(){
        BootstrapDialog.show({
            type:BootstrapDialog.TYPE_DEFAULT,
            title:"绑定邮箱/更换邮箱",
            message:$("<div></div>").load('/Account/bemail'),
        })
    })

    $(".btnMobile").click(function(){
        BootstrapDialog.show({
            type:BootstrapDialog.TYPE_DEFAULT,
            title:"更换手机",
            message:$("<div></div>").load('/Account/bmobile'),
        })
    })
    $(".btnPassword1").click(function(){
        BootstrapDialog.show({
            type:BootstrapDialog.TYPE_DEFAULT,
            title:"设置交易密码",
            size:BootstrapDialog.SIZE_SMALL,
            message:$("<div></div>").load('/Account/setpaymentpwd'),
        })
    })
})
function vertical(){
    var dialog_h = $(".modal-content").height()+53;
    var window_h = $(window).height();
    var top = (window_h-dialog_h)/2;
    $(".modal-content").css('top',top);
}
function setJs(id1,id2){
    if(typeof(id1) == 'undefined') id1 = 'getCode';
    if(typeof(id2) == 'undefined') id2 = 'mz';
    var id = window.setInterval(function(){
        var v = parseInt($("#"+id2).val())-1;
        if(v>0){
            $("#"+id2).val(v);
            $("#"+id1).text(v+"s后继续");
        }
        else
        {
            window.clearInterval(id);
            $("#"+id1).text("获取验证码");
            var mobile = $("#mobile").val();
            var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
            if(reg.test(mobile)){
                $("#"+id1).attr('disabled',false);
                $("#"+id2).val(60);
            }
        }
    },1000);
}
function alt(info,callback){
    BootstrapDialog.alert({
        type:BootstrapDialog.TYPE_DEFAULT,
        title:"提示",
        message:info,
        callback:callback,
        buttonLabel:'确定',
    });
}

function cfm(info,callback){
    BootstrapDialog.confirm({
        type:BootstrapDialog.TYPE_DEFAULT,
        title:"提示",
        message:info,
        callback:callback,
        btnOKLabel:'确定',
        btnCancelLabel:"取消",
    });
}
function closeDialog()
{
    $.each(BootstrapDialog.dialogs, function(id, dialog){
            dialog.close();
    });
}
function error(o,err){
    o.tooltip({title:err}).tooltip('show').focus();
    setTimeout(function(){
        o.attr('title','').tooltip('destroy');
    },1000);
}