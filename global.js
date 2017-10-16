

         
  
   $(document).ready(function(){
        var videos = [];
        videos[0]= "<iframe width='854' height='480' src='https://www.youtube.com/embed/UvWb6tBUx6w?list=PL728A4516E8628D08' frameborder='0' allowfullscreen></iframe>";
        videos[1]= "<iframe width='854' height='480' src='https://www.youtube.com/embed/pXm5ify_64U?list=PL728A4516E8628D08' frameborder='0' allowfullscreen></iframe>";
        videos[2]= "<iframe width='854' height='480' src='https://www.youtube.com/embed/MFGRBKd5Sns?list=PL728A4516E8628D08' frameborder='0' allowfullscreen></iframe>";
         
         for(var i=0;i<videos.length;i++){
                 $("#corpo").append("<p><a id='"+i+"' href='#'>Videos "+i+"</a></p>");
                 $("#"+i).click(function(){
                 var x=$(this).attr("id");
                 $("#video").html(videos[x]);
                });
         }
        
   });
       