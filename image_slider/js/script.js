// inmediate invoked function expression

(function () {
    const pictures = ["count1", "count2", "count3", "count4", "count5"];

    //Select both left and right button. addEventListener
    const buttons = document.querySelectorAll('.btn')
    const imageDiv = document.querySelector('.img-container')
    let counter = 0

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (button.classList.contains('btn-left')) {
                counter--
                if (counter < 0) {
                    counter = pictures.length -1
                }
                imageDiv.style.backgroundImage = `url('./images/${pictures[counter]}.jpeg')`
            }
            if (button.classList.contains('btn-right')) {
                counter++
                if (counter > pictures.length -1) {
                    counter = 0
                }
                imageDiv.style.backgroundImage = `url('./images/${pictures[counter]}.jpeg')`
            }
        })
    })
})();