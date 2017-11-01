$(document).ready(function(){
    var videos = [
                    {
                    value: "Antiderrapante",
                    label: "antiderrapante",
                    desc: "Antiderrapante para não cair",
                    video_: "antiderrapante_sinal.mp4"
                    },
                    {
                    value: "Azulejo",
                    label: "Azulejo",
                    desc: "Azulejo para revestir a casa",
                    video_: "azulejo_sinal.mp4",
                    },
                    {
                    value: "Banheira",
                    label: "banheira",
                    desc: "Banheira para tomar banho",
                    video_: "banheira_sinal.mp4",
                    },
                    {
                    value: "Boneca",
                    label: "boneca",
                    desc: "Boneca para brincar",
                    video_: "boneca_sinal.mp4",
                    },
                    {
                    value: "Coluna",
                    label: "coluna",
                    desc: "Coluna do ser humano",
                    video_: "coluna_sinal.mp4",
                    },
                    {
                    value: "Janela",
                    label: "janela",
                    desc: "Janela de casa",
                    video_: "janela_sinal.mp4",
                    }
    ];



    for(var i=0;i<videos.length;i++){
         $("#menu_video").append("<li><a id='"+videos[i]['value']+"' href='#'> "+videos[i]['value']+"</a></li>");
         $("#"+videos[i]['value']).click({id:i}, trocaVideo);
    };



    function trocaVideo(event) {
        $("#video_play").attr("src","videos/" + videos[event.data.id]["video_"]);
        $("#video_play")[0].play();
    }
    
    });
    $(function(){
         $(".button-collapse").sideNav();
     });
     $(document).ready(function(){
        $('ul.tabs').tabs('select_tab', 'tab_id');
      });

