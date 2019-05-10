if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
        navigator.serviceWorker.register('/AnimalsSay/animalSaySW.js')
        .then(registration => console.log('Service Worker registered'))
        .catch(err => 'SW registration failed'));
}

function play(animal){
    let sound;
    
    switch (animal) {
        case "bear":
            sound = document.getElementById("soundBear");
            break;
        case "cow":
            sound = document.getElementById("soundCow");
            break;
        case "dog":
            sound = document.getElementById("soundDog");
            break;
        case "cat":
            sound = document.getElementById("soundCat");
            break;
        case "duck":
            sound = document.getElementById("soundDuck");
            break;
        case "donkey":
            sound = document.getElementById("soundDonkey");
            break;
        case "elephant":
            sound = document.getElementById("soundElephant");
            break;
        case "lion":
            sound = document.getElementById("soundLion");
            break;
        case "chick":
            sound = document.getElementById("soundChick");
            break;
        default:
            sound = document.getElementById("soundHorse");
            break;
    }
    if(document.querySelector(".animal.active")) {
        document.querySelector(".animal.active").classList.remove("active");
    }
    document.querySelector(".animal."+ animal).classList.add("active");
    sound.play();
}