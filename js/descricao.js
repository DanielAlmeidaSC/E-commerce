window.onload = function() {
    var novoTitulo = localStorage.getItem("novoTitulo");
    var novaMarca = localStorage.getItem("novaMarca");
    var novoPreco = localStorage.getItem("novoPreco");
    var antigoPreco = localStorage.getItem("antigoPreco");
    var novoJuros = localStorage.getItem("novoJuros");
    var novaImagem = localStorage.getItem("novaImagem");

    // Verifica se o novo título foi armazenado e altera o título
    if (novoTitulo) {
        var mudarTitulo = document.getElementById('title-offer-product');
        if (mudarTitulo) {
            mudarTitulo.innerHTML = novoTitulo; 
        }
    }

    // Verifica se a nova marca foi armazenada e altera a marca
    var mudarMarca = document.getElementsByClassName('mark')[0];
    if (novaMarca && mudarMarca) {
        mudarMarca.innerHTML = novaMarca;
    }

    // Verifica se o novo preço foi armazenado e altera o preço
    var mudarPreco = document.getElementsByClassName('price')[0];
    if (novoPreco && mudarPreco) {
        mudarPreco.innerHTML = novoPreco;
    }

    // Verifica se o antigo preço foi armazenado e altera o antigo preço
    var mudarAntigoPreco = document.getElementsByClassName('old-price')[0];
    if (antigoPreco && mudarAntigoPreco) {
        mudarAntigoPreco.innerHTML = `<del>${antigoPreco}</del>`;
    }

    // Verifica se o novo juros foi armazenado e altera os juros
    var mudarJuros = document.getElementsByClassName('juros')[0];
    if (novoJuros && mudarJuros) {
        mudarJuros.innerHTML = novoJuros;
    }

    // Verifica se a nova imagem foi armazenada e altera a imagem
    var mudarImagem = document.getElementById('img-product');
    if (novaImagem && mudarImagem) {
        mudarImagem.src = novaImagem;
    }
}

function comprarPCRGB(event) {
    event.preventDefault(); // Impede o redirecionamento imediato

    // Armazenar as informações no localStorage
    localStorage.setItem("novoTitulo", "PC Gamer RGB I5 8GB SSD 480GB Com Headset Monitor 20'' Windows 10");
    localStorage.setItem("novaMarca", "Marca: AOC");
    localStorage.setItem("novoPreco", "R$5.000,00");
    localStorage.setItem("antigoPreco", "R$8.000,00");
    localStorage.setItem("novoJuros", "ou R$525,00 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/Computadores/PC1.jpg");

    // Redireciona para a página de descrição após 1 segundo
    setTimeout(() => {
        window.location.href = "/html/descricaoProduto.html";
    }, 1000);
}

function comprarPCAPPLE(event) {
    event.preventDefault(); // Impede o redirecionamento imediato

    // Armazenar as informações no localStorage
    localStorage.setItem("novoTitulo", "APPLE 2025 iMAC 32GB SSD 2TB"); 
    localStorage.setItem("novaMarca", "Marca: Apple");
    localStorage.setItem("novoPreco", "R$20.000,00");
    localStorage.setItem("antigoPreco", "R$30.000,00");
    localStorage.setItem("novoJuros", "ou R$2.100,00 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/Computadores/PC2.jpg");

    // Redireciona para a página de descrição após 1 segundo
    setTimeout(() => {
        window.location.href = "/html/descricaoProduto.html"; 
    }, 1000);
}

function comprarPCACER(event){
    event.preventDefault(); //impede o redirecionamento imediato, faz com que primeiro seja executado as alterações

    localStorage.setItem("novoTitulo", "ACER NITRO 5 32GB DDR5 SSD 2TB HD 2TB RTX4090 I9"); 
    localStorage.setItem("novaMarca", "Marca: Acer");
    localStorage.setItem("novoPreco", "R$8.000,00");
    localStorage.setItem("antigoPreco", "R$10.000,00");
    localStorage.setItem("novoJuros", "ou R$864,00 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/Computadores/PC3.jpg");

    setTimeout(()=>{
        window.location.href = "/html/descricaoProduto.html";
    },1000);
}

function comprarPCRyzen(event){
    event.preventDefault();

    localStorage.setItem("novoTitulo", "PC Gamer Completo Ryzen 5 5600, RTX 4060, 16GB RGB DDR4, SSD NVMe 500GB"); 
    localStorage.setItem("novaMarca", "Marca: Ryzen");
    localStorage.setItem("novoPreco", "R$9.000,00");
    localStorage.setItem("antigoPreco", "R$10.000,00");
    localStorage.setItem("novoJuros", "ou R$945,00 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/Computadores/PC4.png");

    setTimeout(()=>{
        window.location.href = "/html/descricaoProduto.html";
    },1000);
}

function comprarPCTOB(event){
    event.preventDefault();

    localStorage.setItem("novoTitulo", "TOB 32GB DDR5 SSD 4TB HD 5TB RTX4090 + MONITOR 27'' AOC"); 
    localStorage.setItem("novaMarca", "Marca: TOB");
    localStorage.setItem("novoPreco", "R$14.000,00");
    localStorage.setItem("antigoPreco", "R$19.999,99");
    localStorage.setItem("novoJuros", "ou R$1.470,00 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/Computadores/PC5.png");

    setTimeout(()=>{
        window.location.href = "/html/descricaoProduto.html";
    },1000);

}

function comprarPCAcer2(event){
    event.preventDefault();

    localStorage.setItem("novoTitulo", "ACER NITRO 5 8GB DDR5 SSD 256 RTX3050"); 
    localStorage.setItem("novaMarca", "Marca: Acer");
    localStorage.setItem("novoPreco", "R$5.500,00");
    localStorage.setItem("antigoPreco", "R$7.999.99");
    localStorage.setItem("novoJuros", "ou R$577,50 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/Computadores/PC6.png");

    setTimeout(()=>{
        window.location.href = "/html/descricaoProduto.html";
    },1000);

}