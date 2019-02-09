$(function()
{

    $("#reused_form").submit(function(e) {
      e.preventDefault();
    
      var $form = $(this);
   
          $.post($form.attr("action"), $form.serialize()).then(function() {
            $("form#reused_form").hide();
            $("#success_message").show();
        });
    });
    
});