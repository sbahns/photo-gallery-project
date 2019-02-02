$(document).ready(function() {
    const arrayDivs = [
        {
					image: '01.jpg',
					thumbnail: '01.jpg',
					title: 'Hay Bales',
					description: 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
        },
				{
						image: '02.jpg',
						thumbnail: '02.jpg',
						title: 'Lake',
						description: 'The lake was so calm today. We had a great view of the snow on the mountains from here.'
        },
				{
					image: '03.jpg',
					thumbnail: '03.jpg',
					title: 'Canyon',
					description: 'I hiked to the top of the mountain and got this picture of the canyon and trees below.'
				},
				{
					image: '04.jpg',
					thumbnail: '04.jpg',
					title: 'Iceberg',
					description: 'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.'
				},
				{
					image:'05.jpg',
					thumbnail: '05.jpg',
					title: 'Desert',
					description: 'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.'
				},
				{
					image: '06.jpg',
					thumbnail: '06.jpg',
					title: 'Fall',
					description: 'Fall is coming, I love when the leaves on the trees start to change color.'
				},
				{
					image: '07.jpg',
					thumbnail: '07.jpg',
					title: 'Plantation',
					description: 'I drove past this plantation yesterday, everything is so green!'
				},
				{
					image: '08.jpg',
					thumbnail: '08.jpg',
					title: 'Dunes',
					description: 'My summer vacation to the Oregon Coast. I love the sandy dunes!'
				},
				{
					image: '09.jpg',
					thumbnail: '09.jpg',
					title: 'Countryside Lane',
					description: 'We enjoyed a quiet stroll down this countryside lane.'
				},
				{
					image: '10.jpg',
					thumbnail: '10.jpg',
					title: 'Sunset',
					description: 'Sunset at the coast! The sky turned a lovely shade of orange.'
				},
				{
					image: '11.jpg',
					thumbnail: '11.jpg',
					title: 'Cave',
					description: 'I did a tour of a cave today and the view of the landscape below was breathtaking.'
				},
				{
					image: '12.jpg',
					thumbnail: '12.jpg',
					title: 'Bluebells',
					description: 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.'
				}
    ];

    function init() {
        for (let i = 0; i < arrayDivs.length; i++) {
            let html = '';
            html += '<div class="grid__col--3 gallery-thumbnail" data-src="images/photos/' + arrayDivs[i].image + '">';
						html += '<img src="images/photos/thumbnails/' + arrayDivs[i].thumbnail + '"';
            html += 'title="' + arrayDivs[i].title + '"';
            html += 'alt="' + arrayDivs[i].description + '" />';
            html += '</div>';
            $('.photo-gallery').append(html);
        }
    };
    init();

		$("#lightgallery").lightGallery();
});
