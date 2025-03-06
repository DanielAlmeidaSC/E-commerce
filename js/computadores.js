function modoDark(){
    var buttonDark = window.document.getElementsByClassName('modo-dark');
    for(var i = 0; i < buttonDark.length; i++){
        buttonDark[i].style.backgroundColor = 'white';
        buttonDark[i].style.color = 'black';
        buttonDark[i].innerHTML = 'Modo Dark Ativado';

    }
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

