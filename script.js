document.addEventListener('DOMContentLoaded', function() {
    const carouselData = [
        { title: 'Manhwa 1', img: 'manhwa1.jpeg' },
        { title: 'Manhwa 2', img: 'manhwa2.jpeg' },
        { title: 'Manhwa 3', img: 'manhwa3.jpeg' },
        { title: 'Manhwa 4', img: 'manhwa4.jpeg' },
        { title: 'Manhwa 5', img: 'manhwa5.jpeg' },
    ];

    const carouselContainer = document.querySelector('.carousel');

    carouselData.forEach(item => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        carouselItem.innerHTML = `<img src="${item.img}" alt="${item.title}" loading="lazy" width="200px" height="200px"><p>${item.title}</p>`;
        carouselContainer.appendChild(carouselItem);
    });
});
