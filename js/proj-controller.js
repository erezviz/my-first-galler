'use strict'


$(document).ready(init)

function init() {
    createProjs()
    addEventListeners()
    renderPreviews()
    addDataSetToModal()
}



function addEventListeners() {
    $('a[href*="1"]').click({ modalNum: '1' }, onRenderProjModal)
    $('a[href*="2"]').click({ modalNum: '2' }, onRenderProjModal)
}


function onRenderProjModal(ev) {

    var modalNum = ev.data.modalNum
    var currProj = getCurrProj(modalNum)
    var strHtml = `
    
    <div class="modal-body">
        <!-- Project Details Go Here -->
        <h2>${currProj.name}</h2>
        <p class="item-intro text-muted">${currProj.title}</p>
        <img class="img-fluid d-block mx-auto" src="img/portfolio/${currProj.id}.jpg" alt="">
        <p></p>
        <ul class="list-inline">
            <li>Date: ${currProj.publishedAt}</li>
            <li>Client: Coding Academy</li>
            <li><a target="_blank" href="${currProj.url}" class="link-info">Go see the Project</a></li>
            
        </ul>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
         Close Project</button>
    </div>
    `
    console.log(modalNum);
    $(`.pfm${modalNum}`).html(strHtml)


}

function addDataSetToModal() {
    $('.pfm1').attr('data-modal', 1)
    $('.pfm2').attr('data-modal', 2)
}


function renderPreviews() {
    var projs = getProjs()
    var strHtmls = projs.map(proj =>
        `<a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
            <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
            </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
    </a>
    <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.title}</p>
    </div>`
    )
    console.log(projs);
    console.log(strHtmls);
    document.querySelector('.portfolio-item').innerHTML = strHtmls.join('')

}