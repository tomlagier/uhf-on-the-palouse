jQuery(document).ready(function () {

    jQuery('#quote-carousel').carousel({
        interval: 5000,
		pause: 'hover'
    });
	
	jQuery(document).ready(function(){
        jQuery(".dropdown").hover(            
            function() {
                jQuery('.dropdown-menu', this).stop( true, true ).slideDown("fast");
                jQuery(this).toggleClass('open');        
            },
            function() {
                jQuery('.dropdown-menu', this).stop( true, true ).slideUp("fast");
                jQuery(this).toggleClass('open');       
            }
        );
    });

});