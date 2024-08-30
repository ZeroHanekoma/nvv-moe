window.addEventListener('load', function() {
    var mascotImage = document.querySelector('.mascot');
    var randomImageNumber = Math.floor(Math.random() * 72) + 1;
    mascotImage.src = 'img/mascot/' + randomImageNumber + '.png';
});
