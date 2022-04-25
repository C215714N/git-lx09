// Declaraciones
    const d = document
    const menuBtn = d.querySelector('nav .btn')
    const menuLst = d.querySelector('nav .menu')
    const mapFrm = d.querySelector('#footer .mapaContacto')
    const mapBtn = d.querySelector('#footer .mapButton')

// Navegacion
    menuBtn.onclick = () => menuLst.classList.toggle('active') ? menuBtn.innerHTML = "&times;" : menuBtn.innerHTML = "&equiv;"

// Mapa de Contacto
    mapBtn.addEventListener('click', () => toggleClass('active', 'icon-min', 'icon-max') )

    function toggleClass(className, a, b){
        if(mapFrm.classList.toggle(className)){
            mapBtn.classList.replace(b,a)
        } else {
            mapBtn.classList.replace(a,b)
        }
    }