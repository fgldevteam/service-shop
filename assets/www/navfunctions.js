        $("#equipment").click(function() {

            if($("#servicesub").is(":hidden")){
                $('#equipsub').slideToggle();    
            } else {
                $('#servicesub').slideToggle();
                $('#equipsub').slideToggle();     
            }

            $(this).addClass("active");
            $('#services').removeClass("active");  
            $('#pricing').removeClass("active");         
        });

        $("#services").click(function() {

            if($("#equipsub").is(":hidden")){
                $('#servicesub').slideToggle();    
            } else {
                $('#equipsub').slideToggle();
                $('#servicesub').slideToggle();     
            }   

            $(this).addClass("active");
            $('#equipment').removeClass("active");
            $('#pricing').removeClass("active");    

        });

        $("#pricing").click(function() {
            $('#equipsub').hide();
            $('#servicesub').hide(); 

            $(this).addClass("active");
            $('#book-service').removeClass("active");
            $('#equipment').removeClass("active");
            $('#services').removeClass("active");       

            //     var status=$('#servicesub').is(":hidden");
            // if(status){
            //     $('#equipsub').slideUp();
            // } else {
            //     $('#servicesub').slideDown();    
            //     $('#equipsub').slideUp();
            // }
        });

        $("#book-service").click(function() {
            $(this).addClass("active");

            $('#equipsub').hide();
            $('#servicesub').hide(); 

            $('#pricing').removeClass("active");
            $('#equipment').removeClass("active");
            $('#services').removeClass("active");       

            //     var status=$('#servicesub').is(":hidden");
            // if(status){
            //     $('#equipsub').slideUp();
            // } else {
            //     $('#servicesub').slideDown();    
            //     $('#equipsub').slideUp();
            // }
        });