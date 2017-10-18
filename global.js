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

    
     $("#corpo").append("<p><a id='"+videos[i]['value']+"' href='#'> "+videos[i]['value']+"</a></p>");
     
     var x =Number(i);
     $("#"+videos[i]['value']).click(function(){
     //var x = $(this).attr("id");
     //var x = videos[i]['video_'];
     alert(x);
     $("#custom_video_play").attr("src",videos[Number(i)]["video_"]);
    });

   

};
});