  window.fbAsyncInit = function() {
    FB.init({
      appId      : '175578203007671',
      xfbml      : true,
      version    : 'v2.10'
    });
    FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

    function statusChangeCallback(response){
      if (response.status === 'connected') {
        console.log("Usuario Autorizado!");
        requestAPI()
        $('#logar').hide();
      }else{
        console.log("Não Autorizado!");
        $('#searchClassification').hide();
      }
    }

    function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  function requestAPI(){
    FB.api('me?fields=id,name,link,picture{height,width,url,is_silhouette},friends{name,picture,link,locale,location,gender}', function(response){
        if (response){
          console.log(response);
          /*Return list de Amigos para a Classificaçao*/
          percorrePagina(response);
          /*Return Divs*/
          document.getElementById('getPerfilName').innerHTML += `<a href="${response.link}" target="_blank">${response.name}</a>`
          document.getElementById('getPerfilPicture').innerHTML += `<a href="${response.link}" target="_blank"><img class="media-object" src="${response.picture.data.url}"></a>`

          document.getElementById('getPerfilTotalFriends').innerHTML += `<span>${response.friends.summary.total_count}</span>`; 

          for (var i = 0; i < response.friends.data.length; i++){
            response.innerHTML = ''
          document.getElementById('getPerfilNewFriends').innerHTML += `
          <li><a href="${response.friends.data[i].link}" target="_blank"><img src="${response.friends.data[i].picture.data.url}"><p>${response.friends.data[i].name}</p></a></li>`}
        }
    });
  }


  function logOut(){
    FB.logout(function(response) {
      statusChangeCallback(response);
      console.log("logout Efetuado")
    });
  }

/*Funcão exibir na pagina*/
  function percorrePagina(paginas){
    pagina = document.getElementById('responseFriends');
    if (pagina) {
    pagina.innerHTML = ''
    for (var i = 0; i < paginas.friends.data.length; i++){
      pagina.innerHTML += `
           <li class="list-group-item col-md-4" >  
           <div class="media-left col-md-4 LfPicture">                
                <a href="${paginas.friends.data[i].link}" target="_blank"><img class="media-object" src="${paginas.friends.data[i].picture.data.url}"></a>
              </div>
              <div class="col-md-8 classification">
                <p class="media-heading"><a href="${paginas.friends.data[i].link}" target="_blank">${paginas.friends.data[i].name}</a></p>
                <p class="LfLocation">Campina Grande - ${paginas.friends.data[i].gender} - ${paginas.friends.data[i].locale}</p>
               <ul class="img_classification col-md-12">
                <li class="cl_fiquei" data-toggle="tooltip" data-placement="top" title="Já Fiquei"></li>
                <li class="cl_fiquei" data-toggle="tooltip" data-placement="top" title="Já Fiquei"></li>
                <li class="cl_ficaria2" data-toggle="tooltip" data-placement="top" title="Ficaria Novamente"></li>
                <li class="cl_picante" data-toggle="tooltip" data-placement="top" title="Relação Picante"></li>
                <li class="cl_fico" data-toggle="tooltip" data-placement="top" title="Ficaria"></li>
                <li class="cl_Ninteresse" data-toggle="tooltip" data-placement="top" title="Sem Interesse"></li>
              </ul>
              </div>
             <div class="starClassification pull-right"></div>
             </li> 
      `;     
    }
  }
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})