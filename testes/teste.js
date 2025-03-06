function ordenarPorPreco() {
    const container = document.querySelector(".produtos");
    const produtos = Array.from(document.querySelectorAll(".produto"));

    produtos.sort(function(a, b) {
        // Pegamos o preço dentro do elemento HTML
        const precoA = parseFloat(a.querySelector(".preco").textContent.replace("R$", "").trim());
        const precoB = parseFloat(b.querySelector(".preco").textContent.replace("R$", "").trim());
    
        // Comparação para ordenar do maior para o menor
        return precoB - precoA;
    });

    // Remove os produtos da lista e os reinsere na ordem correta
    for (var i = 0; i < produtos.length; i++) {
        container.appendChild(produtos[i]);
    }}
