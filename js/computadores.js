let contadorClicks = 0;

const buttonDark = window.document.getElementById('modo-dark');
buttonDark.addEventListener('click', function(){
    contadorClicks++;
    
    if(contadorClicks === 1){
        modoDark();
    }else if(contadorClicks === 2){
        location.reload();
    }
});
function modoDark(){
    var buttonDark = window.document.getElementById('modo-dark');
        buttonDark.style.backgroundColor = 'white';
        buttonDark.style.color = 'black';
        buttonDark.innerHTML = 'Modo Light';


    var cabecalho = window.document.getElementsByTagName('header')[0];
    cabecalho.style.backgroundColor = '#222222';
    var links = window.document.getElementsByTagName('a');
    for(var i = 0; i < 9; i++){
        links[i].style.color = 'white';
    }
    var logo = window.document.getElementsByClassName('icone-header');
    for(var i = 0; i < logo.length; i++){
    logo[i].src = "/img/modo-dark/logo.png";
    }

    var backgroundColor = window.document.getElementsByTagName('body')[0];
    backgroundColor.style.backgroundColor = '#333333';
    
    var footer = window.document.getElementsByTagName('footer')[0];
    footer.style.backgroundColor = '#222222';
    footer.style.color = 'white';
    
    var linksFooter = footer.getElementsByTagName('a');  //altera os links somente do footer
    for (var i = 0; i < linksFooter.length; i++) { 
        linksFooter[i].style.color = 'white';}
    
    var creditos = window.document.getElementsByClassName('creditos');
    for (var i = 0; i < creditos.length; i++) {
        creditos[i].style.backgroundColor = 'purple';
        creditos[i].style.color = 'white';
    }
}


