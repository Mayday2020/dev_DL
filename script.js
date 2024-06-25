'use_strict'

const nextButton = document.getElementById('next')
const backButton = document.getElementById('back')
/*const pageOne = document.getElementById('page1')
const pageTwo = document.getElementById('page2')
const pageThree = document.getElementById('page3')*/

const closeButton = document.getElementById('closeWindow')


let page = 1

function closeWindow() {
    window.close()
}

function status() {
    switch (page) {
        case 1 : {
            backButton.disabled = true;
            nextButton.disabled = false;
            /*pageOne.className = 'open'
            pageTwo.className = 'close'
            pageThree.className = 'close'*/
            window.open("index.html")
            break;
        }
        case 2 : {
            backButton.disabled = false;
            nextButton.disabled = false;
            /*pageOne.className = 'close'
            pageTwo.className = 'open'
            pageThree.className = 'close'*/
            window.open("index2.html")
            break;
        }
        case 3 : {
            backButton.disabled = false;
            nextButton.disabled = true;
            /*pageOne.className = 'close'
            pageTwo.className = 'close'
            pageThree.className = 'open'*/
            window.open("index3.html")
            break;
        }
    }
}
status()

function nextStep(){
    if(page < 3){
        page++
        console.log('useNextPage', page)
        status()
    }
}
function backStep(){
    if(page > 1){
        page--
        console.log('useNextPage', page)
        status()
    }
}
nextButton.addEventListener('click', nextStep)
backButton.addEventListener('click', backStep)
closeButton.addEventListener('click', closeWindow)