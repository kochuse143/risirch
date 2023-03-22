$(document).ready(function(){

    $("#signup-form").validate({

        rules:{
            fullname:{

                required:true,
                minlength:3
                
            },

           

            email:{

                required:true,
                email:true
            },

            contnum:{
                
                 minlength:10,
                 maxlength:10,
                 required:true
            
            },

            message:{

                minlength:106,
                required:true
            }

           

        },




        messages:{

            fullname:{
            
                required:"Please enter your name"
                
            },

            email:{

                required:"Enter a valid email id"
            },

            contnum:{

                required:"Enter a valid contact number"
            },

            message:{

                required:"Please enter your message"
            }
        },


        
        
        
        
        
        
        submitHandler:function(form){

            form.submit();
        }
    
    

        
        
    })

   
})