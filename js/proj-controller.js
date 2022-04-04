'use strict'


$(document).ready(init)

function init() {
    createProjs()
    renderPreviews()

}






function renderPreviews() {
    var projs = getProjs()
    var strHtmls = projs.map(proj =>
        `<section onclick="renderModal('${proj.id}')"><a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
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
    </div></section>`
    )
    console.log(projs);
    console.log(strHtmls);
    document.querySelector('.portfolio-item').innerHTML = strHtmls.join('')

}


function renderModal(projId) {
    var proj = getProjById(projId)
    var strHtml = `
    <h2>${proj.name}</h2>
    <p class="item-intro text-muted">${proj.title}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.jpg" alt="">
    <p>${proj.desc}</p>
    <ul class="list-inline">
        <li>Date: ${proj.publishedAt}</li>
        <li>Client: Coding Academy</li>
        <li><a target="_blank" href="${proj.url}" class="link-info">Go see the Project</a></li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
<i class="fa fa-times"></i>
Close Project</button>`

    document.querySelector('.modal-body').innerHTML = strHtml
}


function onContactSubmit() {
    var txt = document.querySelector('.text-area').value
    var email = document.querySelector('.email-input').value
    var subject = document.querySelector('.subject-input').value
    var url = `https://mail.google.com/mail/?view=cm&fs=1&to=erezviz@gmail.com&su=${subject}&body=${email}, ${txt}`
    window.open(url)
}