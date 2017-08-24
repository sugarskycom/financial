function formatDate(v){
    if(v==null) return '-';
    return moment.unix(v).format('YYYY-MM-DD');
}
function formatTime(v){
    if(v==null) return '-';
    return moment.unix(v).format('YYYY-MM-DD HH:mm');
}
function formatCny(v){
    if(v==null) return 0;
    v = parseFloat(v);
    return v.toLocaleString();
}
function alt(o,err){
    o.tooltip({title:err}).tooltip('show').focus();
    setTimeout(function(){
        o.attr('title','').tooltip('destroy');
    },1000);
}
toastr.options = {
  "closeButton": true,
  "debug": false,
  "progressBar": false,
  "preventDuplicates": false,
  "positionClass": "toast-top-center",
  "onclick": null,
  "showDuration": "400",
  "hideDuration": "1000",
  "timeOut": "2000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}