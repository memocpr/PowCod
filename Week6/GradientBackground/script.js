    let body = document.querySelector('#bodyContainer');

    let h3Tag = document.querySelector('h3');

    let leftInput = document.querySelector('#leftColor');

    let rightInput = document.querySelector('#rightColor');

    function generator() {
        body.style.background = "linear-gradient(to right, " + leftInput.value + ", " +
            rightInput.value + ")";

        h3Tag.textContent = body.style.background + ";"
    }
    leftInput.addEventListener('input', generator);
    rightInput.addEventListener('input', generator);

    // create random color ============================================

    let randomBtn = document.querySelector('#randomColor');

    let randomNum = () => {
        let keys = '0123456789ABCDEF';

        let color = '#'

        for (let i = 0; i < 6; i++) {
            color += keys[Math.round(Math.random() * 15)];
        }
        return color;
    }


    randomBtn.addEventListener('click', event => {
        leftInput.value = randomNum();
        rightInput.value = randomNum();
        generator();
    })