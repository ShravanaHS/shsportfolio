document.addEventListener('DOMContentLoaded', function () {

    function typeWriter(text, index) {
        if (index < text.length) {
            document.getElementById('typewriter-text').innerHTML += text.charAt(index);
            index++;
            setTimeout(function () {
                typeWriter(text, index);
            }, 100);
        }
    }


    const textToType = "i am an ece student";
    typeWriter(textToType, 0);
});