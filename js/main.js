		$(document).ready(function() {
            $('.aniview').AniView();

            
			$('#fullpage').fullpage({
				anchors: ['home', 'fillip', 'travelocity', 'instructionalvideo', 'centralcity', 'contact'],
				sectionsColor: ['#2A32D1', '#987AB5', '#F37D67', '#0083C0', '#d1292d', '#2A32D1'],
				navigation: true,
				navigationPosition: 'left',
				navigationTooltips: ['about', 'fillip', 'travelocity', 'UDL video', 'central city', 'contact'],

			});
		});