const animeNames = [
    'Jujutsu Kaisen', 'Demon Slayer', 'Lookism', 'Naruto', 'Dragon Ball',
    'The Kingdom of Ruin', 'Attack on Titan', 'Death Note', 'Code Geass'
];

const gallery = document.getElementById('anime-gallery');

async function fetchAnimeImages() {
    for (let anime of animeNames) {
        try {
            const response = await fetch(`https://nekos.best/api/v2/neko?tags=${anime}`);
            const data = await response.json();
            const imageUrl = data.results[0]?.url || 'https://via.placeholder.com/300x300?text=Image+Not+Found';

            const col = document.createElement('div');
            col.className = 'col-md-4 col-lg-3';

            const card = document.createElement('div');
            card.className = 'card';

            const img = document.createElement('img');
            img.className = 'card-img-top';
            img.src = imageUrl;
            img.alt = anime;

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body text-center';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.textContent = anime;

            cardBody.appendChild(cardTitle);
            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);
            gallery.appendChild(col);
        } catch (error) {
            console.error('Error fetching image for:', anime, error);
        }
    }
}

fetchAnimeImages();
