let colors = [
                '#B48EAD',
                '#FFCD42',
                '#19A15F',
                '#DD5145',
                '#4B8BF4',
                '#DF3DF4',
                '#7DF4E2',
                '#1E282C'
            ];


const makeBoxes = quantity => {
    let colorsQnt = colors.length;
    let currentColor = 0;
    let myElem;
    let myNode = document.querySelector('.boxes');

    for (let index = 0; index < quantity; index++) {
        myElem = document.createElement('div');
        myElem.className = 'box';
        myElem.style = 'background-color: ' + colors[currentColor];
        myNode.appendChild(myElem);

        if(currentColor === colorsQnt -1) {
            currentColor = 0;
        } else {
            currentColor++;
        }
    }
    myNode.addEventListener('click', (e) => {
        e.target.parentNode.removeChild(e.target);
    }, false)
}

makeBoxes(15);