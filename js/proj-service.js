console.log('Starting up');

var gProjs = []
createProjs()


function getProjs() {
    return gProjs
}

function createProj(id, name, title, labels, url) {
    return {
        id,
        name,
        title,
        desc: makeLorem(),
        url,
        publishedAt: 'March 2022',
        labels

    }
}

function createProjs() {
    gProjs = [
        createProj('touch-nums', 'Touch-Nums', 'Try this game, press sequential numbers.', ['games', 'numbers'], `https://erezviz.github.io/touch-nums/`),
        createProj('mine-sweeper', 'My Minesweeper Project', ['mine sweeper', 'games', 'pc games', 'old pc games'], 'https://erezviz.github.io/Erez-Wiezel-Mine-Sweeper/')
    ]
}


function getCurrProj(modalNum) {
    modalNum = modalNum - 1
    return gProjs[modalNum]
}