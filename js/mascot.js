window.addEventListener('load', function() {
    var mascotImage = document.querySelector('.mascot');
    var randomImageNumber = Math.floor(Math.random() * 50) + 1;
    mascotImage.src = 'img/mascot/' + randomImageNumber + '.png';
});
