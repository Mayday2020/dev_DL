
const nextButton = document.getElementById('next')
const backButton = document.getElementById('back')
const pageId = document.getElementById('page_id')

const page = pageId.className

function closeWindow() {
    window.close()
}

function status(page) {
    switch (page) {
        case 'page_one' : {
            window.open("another_html/index2.html")
            break;
        }
        case 'page_two' : {
            window.open("index3.html")
            break;
        }
    }
}


function nextStep(){
    status(page)
}
function backStep(){
    closeWindow()
}

nextButton.addEventListener('click', nextStep)
backButton.addEventListener('click', backStep)
