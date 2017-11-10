    $(document).ready(function(){
    var videos = [
        {
        value: "Antiderrapante",
        label: "antiderrapante",
        desc: "Antiderrapante para não cair",
        videoSinal: "antiderrapante_sinal.mp4",
        videoConceito: "azulejo_sinal.mp4",
        area:"Letras Libras"
        },
        {
        value: "Azulejo",
        label: "Azulejo",
        desc: "Azulejo para revestir a casa",
        videoSinal: "azulejo_sinal.mp4",
        videoConceito: "antiderrapante_sinal.mp4",
        area:"Letras Libras"
        },
        {
        value: "Banheira",
        label: "banheira",
        desc: "Banheira para tomar banho",
        videoSinal: "janela_sinal.mp4",
        videoConceito: "antiderrapante_sinal.mp4",
        area:"Psicologia"
        },
        {
        value: "Boneca",
        label: "boneca",
        desc: "Boneca para brincar",
        videoSinal: "coluna_sinal.mp4",
        videoConceito: "banheira_sinal.mp4",
        area: "Psicologia"
        },
        {
        value: "Coluna",
        label: "coluna",
        desc: "Coluna do ser humano",
        videoSinal: "coluna_sinal.mp4",
        videoConceito: "janela_sinal.mp4",
        area: "Arquitetura"
        },
        {
        value: "Janela",
        label: "janela",
        desc: "Janela de casa",
        videoSinal: "janela_sinal.mp4",
        videoConceito: "coluna_sinal.mp4",
        area: "Arquitetura"
        }
    ];
    var areas = ['Letras Libras','Arquitetura','Psicologia'];
    for(var j=0;j<areas.length;j++){
        for(var i=0;i<videos.length;i++){
           $("#listas").append("<ul><li class='menu_'+areas[j]+"><a class='collapsible-header waves-effect waves-teal'></a>"+areas[j]+"</li></ul>");

            if(videos[i]['area'] == areas[j]){
              $("#listas").append("<div class="collapsible-body"><ul id='menu_video'+videos[i]['value']+">"+videos[i]['value']+"</ul></div>");
     };
    function trocaVideo(event) {
        $("#video_play_sinal").attr("src","videos/" + videos[event.data.id]["videoSinal"]);
        $("#video_play_sinal")[0].play();
        $("#video_play_conceito").attr("src","videos/" + videos[event.data.id]["videoConceito"]);
        $("#video_play_conceito")[0].play();
        $("#nomes").html("<div id='"+videos[event.data.id]['value']+"' href='#'> "+videos[event.data.id]['value']+"</div>");
    };
    
    $(function(){
        $(".button-collapse").sideNav();
     });
    $(document).ready(function(){
        $('ul.tabs').tabs('select_tab', 'tab_id');
    });
    
    });
<div class="collapsible-body">
         <ul id="subMenu"></ul>
        </div>