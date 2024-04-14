document.addEventListener("DOMContentLoaded", function() {
    const initialImageElement = document.getElementById("initialImage");
    const intermediateImageElement = document.getElementById("intermediateImage");
    const getRandomImageButton = document.getElementById("getRandomImage");
    const loadingAnimationElement = document.getElementById("loadingAnimation");

    const imageNames = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg"
    ];

    function getRandomImageName() {
        const randomIndex = Math.floor(Math.random() * imageNames.length);
        return imageNames[randomIndex];
    }

    function getRandomImageURL() {
        const imageName = getRandomImageName();
        return `images/${imageName}`;
    }

    function showLoadingAnimation() {
        loadingAnimationElement.classList.remove("hidden");
    }

    function hideLoadingAnimation() {
        loadingAnimationElement.classList.add("hidden");
    }

    function countdown(callback) {
        showLoadingAnimation();

        setTimeout(function() {
            hideLoadingAnimation();
            callback();
        }, 3300);
    }

    function showIntermediateImageWithCountdown() {
        initialImageElement.classList.add("hidden");
        intermediateImageElement.classList.remove("hidden");
        getRandomImageButton.disabled = true; // Блокируем кнопку

        countdown(function() {
            const randomImageURL = getRandomImageURL();
            initialImageElement.src = randomImageURL;

            initialImageElement.classList.remove("hidden");
            intermediateImageElement.classList.add("hidden");
            getRandomImageButton.disabled = false; // Разблокируем кнопку
        });
    }

    getRandomImageButton.addEventListener("click", function() {
        showIntermediateImageWithCountdown();
    });
});
