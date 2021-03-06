// Declaraciones
    const d = document
    const menuBtn = d.querySelector('nav .btn')
    const menuLst = d.querySelector('nav .menu')
    const mapFrm = d.querySelector('#footer .mapaContacto')
    const mapBtn = d.querySelector('#footer .mapButton')

// Navegacion
    menuBtn.onclick = () => menuLst.classList.toggle('active') ? menuBtn.innerHTML = "&times;" : menuBtn.innerHTML = "&equiv;"

// Mapa de Contacto
    mapBtn.addEventListener('click', () => toggleClass([mapBtn, mapFrm], ['active', 'icon-min', 'icon-max'] ) )

    function toggleClass(el = [], cn = {a,b,c} ){
        if(el[1].classList.toggle(cn[0])){
            return el[0].classList.replace(cn[2], cn[1])
        } else {
            return el[0].classList.replace(cn[1], cn[2])
        }
    }