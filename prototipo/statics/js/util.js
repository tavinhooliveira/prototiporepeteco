 
/*Funçao Notificacao Return true/false*/
 $(function() {
    $('#toggle-event-notification').change(function() {
    	var notification = $(this).prop('checked');
     	console.log(notification);
    })
 })
/*Funçao Preferencia sexual Return true/false*/
 $(function() {
    $('#sexo').change(function() {
    	var preferencia = $(this).prop('checked');
    	if (preferencia === true) {
    		console.log("M");
    	}else{
    		console.log("F");
    	}     	
    })
 })

/*funcao Include Header*/
 $(function() {
    header = document.getElementById('icludeHearder');
    header.innerHTML = ''
    header.innerHTML += `
    <header class="navbar-fixed-top navbar-default" id="navmenu">
        <div class="container">
            <div class="menu col-md-12 btn btn-navbar">             
                <a onclick="location.href='perfil.html'"><span class="headerIcon glyphicon glyphicon-user col-md-4" data-toggle="tooltip" data-placement="bottom" title="Perfil"></span></a>     
                <a href="#" onclick="Refresh();"><span class="headerIcon col-md-4"><img id="logotipo" src="../statics/img/logo.png" data-toggle="tooltip" data-placement="right" title="Refresh"></span></a> 
                <a onclick="location.href='classificacao.html'"><span class="headerIcon glyphicon glyphicon-star col-md-4" data-toggle="tooltip" data-placement="bottom" title="Classificação"></span></a>  
            </div>
        </div>
    </header>
    `;
 })

/*funcao Include footer*/
  $(function() {
    footer = document.getElementById('icludeFooter');
    footer.innerHTML += `
    <footer class="footer navbar-fixed-bottom navbar-default">
        <div class="container">
            <div class="col-md-12 btn btn-navbar">              
                 <a data-toggle="modal" data-target="#myModal"><span class="footerIcon fa fa-user-plus fa-1x col-md-3" data-toggle="tooltip" data-placement="top" title="Convidar Amigos"></a>       
                 <a onclick="location.href='notificacao.html'"><span class="footerIcon fa fa-bell fa-1x col-md-3" data-transition="pop" data-toggle="tooltip" data-placement="top" title="Notificação"></span></a> 
                 <a onclick="location.href='configuracao.html'"><span class="footerIcon fa fa-sun-o fa-1x col-md-3" data-transition="pop" data-toggle="tooltip" data-placement="top" title="Configuração"></span></a>
                 <a onclick="location.href='../login.html'"><span class="footerIcon fa fa-sign-out fa-1x col-md-3" data-toggle="tooltip" data-placement="top" title="Sair"></span></a>
            </div>
        </div>
    </footer>


<!-- Modal Convidar Amigos -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Convidar Amigos para o Repeteco</h4>
        </div>
        <div class="modal-body">
          <a href="#"><img src="../statics/img/invite.png"></a>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>

    `;
 })


/*Funcao Search*/
function functionSearch() {
    // Declare variables
    var input, filter, ul, li, a, i, div, h4;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h4")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


/*Refresh na pagina*/
function Refresh(){
window.location.reload();
setTimeout('location.reload();', 5000);
}

/*tooltip*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/*funcao Mudal*/
$('#exampleModal').modal('toggle')


/*Funcao Star Classification true */
$(document).ready(function(){
$("input:radio").on("click", function(){
var classificacaoId = null;
var classificacaoId = $(this).attr("id");
var statusClassification = false;

  if (classificacaoId != null) {    
    $(this).parent().parent().parent().parent().find('.starClassification').addClass('classificationTrue');
    statusClassification = true;
    /*unCheked*/
    $(".classificationTrue").on("click", function(){
      $(this).removeClass('classificationTrue').prev().find("input:radio").attr('checked', false);
      statusClassification = false;
      classificacaoId = null;

      console.log("Opção: "+classificacaoId);
      console.log("Status:"+statusClassification);
    });
  }
  console.log("Opção: "+classificacaoId);
  console.log("Status:"+statusClassification);
});
});
