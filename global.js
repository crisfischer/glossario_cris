$(document).ready(function(){
    var videos = [
        {
        value: "Antiderrapante",
        label: "antiderrapante",
        desc: "Antiderrapante para não cair",
        video: "antiderrapante_sinal.mp4"
        },
        {
        value: "Azulejo",
        label: "Azulejo",
        desc: "Azulejo para revestir a casa",
        video: "azulejo_sinal.mp4",
        },
        {
        value: "Banheira",
        label: "banheira",
        desc: "Banheira para tomar banho",
        video: "banheira_sinal.mp4",
        },
        {
        value: "Boneca",
        label: "boneca",
        desc: "Boneca para brincar",
        video: "boneca_sinal.mp4",
        },
        {
        value: "Coluna",
        label: "coluna",
        desc: "Coluna do ser humano",
        video: "coluna_sinal.mp4",
        },
        {
        value: "Janela",
        label: "janela",
        desc: "Janela de casa",
        video: "janela_sinal.mp4",
        }
    ];



for(var i=0;i<videos.length;i++){

     $("#corpo").append("<p><a id='"+videos[i]['value']+"' href='#'> "+videos[i]['value']+"</a></p>");
     $("#chama_video").click(function(){
     var x=$(this).attr('src');
     $("#video").source('src');
    });

   

};
});