$(document).ready(function(){
     $('.scrollspy').scrollSpy();
    
    var areas = ['Direito','Gestão_RH ','Redes_de_Computadores'];
    for(var j=0;j<areas.length;j++){
        $("#menu").append("<li><a class='collapsible-header waves-effect waves-teal'>"+areas[j]+"</a><div class='collapsible-body' ><ul  id='menu_"+areas[j].replace(' ',"_")+"'>");
            for(var i=0;i<videos.length;i++){
                 if(videos[i]['area'] == areas[j]){
                     $("#menu_"+areas[j].replace(' ',"_")).append("<li><a id='menu_video"+videos[i]['value']+"' href='#'> "+videos[i]['value']+"</a></li>")
                     $("#menu_video"+videos[i]['value']+"").click({id:i}, trocaVideo);
                 }
             }
             $("#menu").append("</ul></div></li>");
    }
    function trocaVideo(event) {
        $("#video_play_sinal").attr("src","videos/" + videos[event.data.id]["videoSinal"]);
        $("#video_play_sinal")[0].play();
        $("#video_play_conceito").attr("src","videos/" + videos[event.data.id]["videoConceito"]);
        $("#video_play_conceito")[0].play();
        $("#nomes").html("<p>"+videos[event.data.id]['value']+"</p>");
    };
    $(function(){
        $(".button-collapse").sideNav();
    });
    $('ul.tabs').tabs('select_tab', 'tab_id');
    $('.collapsible').collapsible();
   
  }); 