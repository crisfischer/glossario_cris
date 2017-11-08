    $(document).ready(function(){
    var videos = [
        {
        value: "Antiderrapante",
        label: "antiderrapante",
        desc: "Antiderrapante para não cair",
        videoSinal: "antiderrapante_sinal.mp4",
        videoConceito: "azulejo_sinal.mp4"
        },
        {
        value: "Azulejo",
        label: "Azulejo",
        desc: "Azulejo para revestir a casa",
        videoSinal: "azulejo_sinal.mp4",
        videoConceito: "antiderrapante_sinal.mp4"
        },
        {
        value: "Banheira",
        label: "banheira",
        desc: "Banheira para tomar banho",
        videoSinal: "janela_sinal.mp4",
        videoConceito: "antiderrapante_sinal.mp4"
        },
        {
        value: "Boneca",
        label: "boneca",
        desc: "Boneca para brincar",
        videoSinal: "coluna_sinal.mp4",
        videoConceito: "banheira_sinal.mp4"
        },
        {
        value: "Coluna",
        label: "coluna",
        desc: "Coluna do ser humano",
        videoSinal: "coluna_sinal.mp4",
        videoConceito: "janela_sinal.mp4"
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
    for(var i=0;i<videos.length;i++){
        $("#menu_video").append("<li><a id='"+videos[i]['value']+"' href='#'> "+videos[i]['value']+"</a></li>");
        $("#"+videos[i]['value']).click({id:i}, trocaVideo);
        
    };
    function trocaVideo(event) {
        $("#video_play_sinal").attr("src","videos/" + videos[event.data.id]["videoSinal"]);
        $("#video_play_sinal")[0].play();
        $("#video_play_conceito").attr("src","videos/" + videos[event.data.id]["videoConceito"]);
        $("#video_play_conceito")[0].play();
        $("#nomes").html("<li><a id='"+videos[event.data.id]['value']+"' href='#'> "+videos[event.data.id]['value']+"</a></li>");
    };
    var tipos = ['Letras Libras','Arquitetura','Pscicologia'];

    for(var j=0;j<tipos.length;j++){
        $("#").append(" id='menu_"+tipos[j]+"' href='#'> "+tipos[j]+"");
    };

    $(function(){
        $(".button-collapse").sideNav();
     });
    $(document).ready(function(){
        $('ul.tabs').tabs('select_tab', 'tab_id');
    });
    
    });
