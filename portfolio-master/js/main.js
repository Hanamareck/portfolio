		$(document).ready(function() {
            $('.aniview').AniView();

            
			$('#fullpage').fullpage({
				anchors: ['home', 'fillip', 'travelocity', 'instructionalvideo', 'centralcity'],
				sectionsColor: ['#2A32D1', '#987AB5', '#F37D67', '#0083C0', '#d1292d'],
				navigation: true,
				navigationPosition: 'left',
				navigationTooltips: ['about', 'fillip', 'travelocity', 'instructional video', 'central city'],
                onLeave: function(index, nextIndex, direction){
                    
                if(nextIndex == 2){
                    $("#section1").children().addClass(' animated fadeInUp');                 
                }
                    
                else if(nextIndex == 3){
                    $("#section2").children().addClass(' animated fadeInUp');                 
                }
               
                else if(nextIndex == 4){
                    $("#section3").children().addClass(' animated fadeInUp');                 
                }                    
                else if(nextIndex == 5){
                    $("#section4").children().addClass(' animated fadeInUp');                 
                }                    
                                        
                }
			});
		});