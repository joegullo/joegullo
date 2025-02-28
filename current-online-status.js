
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/60b93acf6699c7280daa96a5/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

Tawk_API.onStatusChange = function (status){

if(status === 'online')

{

document.getElementById('status').innerHTML = '<a href="javascript:void(Tawk_API.toggle())"><div class="badge badge-outline">Online <i class="ri-circle-fill" style="color:green;padding-left:5px;"></i></div></a>';

}

else if(status === 'away')

{

document.getElementById('status').innerHTML = '<div class="badge badge-outline">Away <i class="ri-circle-fill" style="color:orange;padding-left:5px;"></i></div>';

}

else if(status === 'offline')

{

document.getElementById('status').innerHTML = '<div class="badge badge-outline">Offline <i class="ri-circle-fill" style="color:gray;padding-left:5px;"></i></div>';

