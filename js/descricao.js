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

//para tablets

function comprarTabletS9(event){
    event.preventDefault;

    localStorage.setItem("novoTitulo", "Tablet Samsung Galaxy Tab S9 FE com Caneta 10,9'' 128GB 6GB RAM Android 14 Octa-Core Wi-Fi"); 
    localStorage.setItem("novaMarca", "Marca: Samsung");
    localStorage.setItem("novoPreco", "R$2.500,00");
    localStorage.setItem("antigoPreco", "R$3.999,99");
    localStorage.setItem("novoJuros", "ou R$262,50 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/tablet/tablet1/s9.jpg");

    setTimeout(() =>{
        window.location.href = "/html/descricaoProduto.html";
    }, 1000);

}

function comprarTableta9(event){
    event.preventDefault;

    localStorage.setItem("novoTitulo", "Galaxy Tab A9+, Wifi, 11' polegadas, 4GB RAM, 64 GB, Câmera Principal 8 MP, Câmera Traseira 5 MP"); 
    localStorage.setItem("novaMarca", "Marca: Samsung");
    localStorage.setItem("novoPreco", "R$999,99");
    localStorage.setItem("antigoPreco", "R$1.699,99");
    localStorage.setItem("novoJuros", "ou R$104,99 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/tablet/tablet2/a9plus.jpg");

    setTimeout(() =>{
        window.location.href = "/html/descricaoProduto.html";
    }, 1000);

}

function comprarIpad(event){
    event.preventDefault();

    localStorage.setItem("novoTitulo", "iPad Apple (10a geração): Com chip A14 Bionic, tela Liquid Retina de 10,9 polegadas, 64 GB Wi-Fi 6, câmera frontal de 12 MP, câmera traseira de 12 MP"); 
    localStorage.setItem("novaMarca", "Marca: Apple");
    localStorage.setItem("novoPreco", "R$4.000,00");
    localStorage.setItem("antigoPreco", "R$6.999,99");
    localStorage.setItem("novoJuros", "ou R$420,00 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/tablet/tablet3/ipad.jpeg");


    setTimeout(()=>{
        window.location.href = "/html/descricaoProduto.html"
    },1000);

}

function comprarXiaomi(event){
    event.preventDefault();
    localStorage.setItem("novoTitulo", "Tablet Xiaomi Redmi Pad SE com Tela de 11'', 128GB, Wi-Fi, Android 11 e Processador Snapdragon 680 - Azul"); 
    localStorage.setItem("novaMarca", "Marca: Xiaomi");
    localStorage.setItem("novoPreco", "R$2.000,00");
    localStorage.setItem("antigoPreco", "R$2.999,99");
    localStorage.setItem("novoJuros", "ou R$210,00 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/tablet/tablet4/xiaomipa2d.jpg");

    setTimeout(() =>{
        window.location.href = "/html/descricaoProduto.html";
    },1000);
}

function comprarA9e(event){
    event.preventDefault();
    localStorage.setItem("novoTitulo", "Tablet Samsung Tab A9+ 64gb 4gb Ram - 5G - Enterprise Edition Tela 11.0'' X216 Grafit"); 
    localStorage.setItem("novaMarca", "Marca: Samsung");
    localStorage.setItem("novoPreco", "R$2.000,00");
    localStorage.setItem("antigoPreco", "R$2.999,99");
    localStorage.setItem("novoJuros", "ou R$210,00 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/tablet/tablet5/a9e.jpg");

    setTimeout(() =>{
        window.location.href = "/html/descricaoProduto.html";
    },1000);
}

function comprarVaio(event){
    event.preventDefault();
    localStorage.setItem("novoTitulo", "Tablet VAIO TL10 8GB 128GB Octa-Core, Tela 10.4” 2K, 4G WiFi, Câmera 8MP + Selfie 5MP, 7000mAh, Android 13, com Teclado de Conexão Inteligente – Preto"); 
    localStorage.setItem("novaMarca", "Marca: Vaio");
    localStorage.setItem("novoPreco", "R$1.500,00");
    localStorage.setItem("antigoPreco", "R$2.000,00");
    localStorage.setItem("novoJuros", "ou R$157,50 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/tablet/tablet6/vaio.png");

    setTimeout(() =>{
        window.location.href = "/html/descricaoProduto.html";
    },1000);
}

function comprarA25(event){
    event.preventDefault();

    localStorage.setItem("novoTitulo", "Celular Samsung Galaxy A25 5G 128GB, 6GB RAM, Tela Infinita de 6.5''"); 
    localStorage.setItem("novaMarca", "Marca: Samsung");
    localStorage.setItem("novoPreco", "R$2.300,00");
    localStorage.setItem("antigoPreco", "R$3.000,00");
    localStorage.setItem("novoJuros", "ou R$241,50 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/celular/A25/CEL-1.png");

    setTimeout(()=>
    {
        window.location.href = "/html/descricaoProduto.html";
    },1000);
}

function comprarIphone14(event){
    event.preventDefault();

    localStorage.setItem("novoTitulo", "Apple iPhone 14 (128 GB)"); 
    localStorage.setItem("novaMarca", "Marca: Apple");
    localStorage.setItem("novoPreco", "R$4.000,00");
    localStorage.setItem("antigoPreco", "R$6.500,00");
    localStorage.setItem("novoJuros", "ou R$420,00 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/celular/Iphone 14/cel-2.png");

    setTimeout(()=>{
        window.location.href = "/html/descricaoProduto.html";
    },1000);

}

function comprarInfinix(event){
    event.preventDefault();

    localStorage.setItem("novoTitulo", "Smartphone Infinix Note 40 5G 8GB RAM 256GB Câmera Tripla 108MP+ Selfie 32MP NFC 6,78'' AMOLED Dual Chip"); 
    localStorage.setItem("novaMarca", "Marca: Infinix");
    localStorage.setItem("novoPreco", "R$2.399,00");
    localStorage.setItem("antigoPreco", "R$3.399,00");
    localStorage.setItem("novoJuros", "ou R$251,89 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/celular/NOTE 13 PRO/cel-2.jpg");

    setTimeout(()=>{
        window.location.href = "/html/descricaoProduto.html";
    },1000);


}

function comprarXiaomi(event){
    event.preventDefault();

    localStorage.setItem("novoTitulo", "Smartphone Xiaomi Redmi 12 256GB 8GB RAM Dual SIM Tela 6.79''"); 
    localStorage.setItem("novaMarca", "Marca: Xiaomi");
    localStorage.setItem("novoPreco", "R$1.399,00");
    localStorage.setItem("antigoPreco", "R$3.399,00");
    localStorage.setItem("novoJuros", "ou R$251,89 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/celular/NOTE 13 PRO/cel-2.jpg");

    setTimeout(()=>{
        window.location.href = "/html/descricaoProduto.html"
    },1000);
}

function comprarS24(event){
    event.preventDefault();

    localStorage.setItem("novoTitulo", "Smartphone Samsung Galaxy S24, Galaxy AI, Selfie de 12MP, Tela de 6.2'' 1-120Hz, 256GB, 8GB RAM"); 
    localStorage.setItem("novaMarca", "Marca: Samsung");
    localStorage.setItem("novoPreco", "R$3.899,00");
    localStorage.setItem("antigoPreco", "R$5.999,00");
    localStorage.setItem("novoJuros", "ou R$409,39 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/celular/S24/cel-2.png");

    setTimeout(() => {
        window.location.href = "/html/descricaoProduto.html"
    }, 1000);
}

function comprarS25(event){
    event.preventDefault();

    localStorage.setItem("novoTitulo", "Celular Samsung Galaxy S25 Ultra 5G, 512GB, 12GB RAM, Câmera Quádrupla de 200+50+10+50, Tela Grande de 6.9'', Preto"); 
    localStorage.setItem("novaMarca", "Marca: Samsung");
    localStorage.setItem("novoPreco", "R$5.500,00");
    localStorage.setItem("antigoPreco", "R$7.999,00");
    localStorage.setItem("novoJuros", "ou R$577,50 em 10x sem juros!");
    localStorage.setItem("novaImagem", "/img/celular/S25/cel-1.png");

    setTimeout(() => {
        window.location.href = "/html/descricaoProduto.html"
        }, 1000);
}