const credits = {
    mountainFont: "<a href='https://www.dafont.com/mountain-3.font?'>Mountain Font</a>",
    mountainPhoto: "<a href='https://www.freepik.com/photos/background'>Background photo created by photoangel - www.freepik.com</a>",
    riverPhoto: "<a href='https://www.freepik.com/photos/water'>Water photo created by wirestock - www.freepik.com</a>",
    gallery1: "<a href='https://www.freepik.com/photos/travel'>Travel photo created by pressfoto - www.freepik.com</a>",
    gallery2: "<a href='https://www.freepik.com/photos/people'>People photo created by karlyukav - www.freepik.com</a>",
    gallery3: "<a href='https://www.freepik.com/photos/sport'>Sport photo created by jcomp - www.freepik.com</a>",
    gallery4: "<a href='https://www.freepik.com/photos/man'>Man photo created by rawpixel.com - www.freepik.com</a>",
    shop1: "<a href='https://www.freepik.com/photos/background'>Background photo created by diana.grytsku - www.freepik.com</a>",
    shop2: "<a href='https://www.freepik.com/photos/background'>Background photo created by diana.grytsku - www.freepik.com</a>",
    profileIcon1: "Icons made by <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>Freepik</a>"
}

function autoCredits() {
    for (const credit in credits) {
        let table = document.getElementById("credits-tbody")
        let tr = document.createElement("tr")
        tr.innerHTML = "<td>" + credit + "</td>" + "<td>" + credits[credit] + "</td>"
        table.appendChild(tr)
    }
}

const carousel = document.getElementById('carousel-button')
carousel.addEventListener('click', (e) => {
    const t = e.target
    const a = carousel.querySelectorAll('.carousel-a')
    for (const link of a) {
        link.style.backgroundColor = 'rgb(255, 174, 0)'
        link.style.color = 'rgb(255, 174, 0)'
    }
    t.style.backgroundColor = 'black'
    t.style.color = 'black'
    console.log(t)
})

function dropDown() {
    const navbar = document.getElementById('navbar-sticky')
    if (navbar.style.height == '50px') {
        navbar.style.height = '200px'
        //console.log("expand")
    } else {
        navbar.style.height = '50px'
        //console.log("collapse")
    }
}