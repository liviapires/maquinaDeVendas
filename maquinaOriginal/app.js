const produtosDisplay = document.getElementById("produtos");

const confirmar = document.querySelector('.confirma');
const saldo = document.querySelector('.saldo');
const deposito = document.querySelector('.deposito');
const mais = document.querySelector('.mais');
const menos = document.querySelector('.menos')
const selecionado = document.querySelector('.produtoSelecionado');

confirmar.addEventListener('click', ()=>{
    const dinheiro = saldo.innerHTML;
    saldo.innerHTML = parseFloat(dinheiro) + parseFloat(deposito.innerHTML);
})

mais.addEventListener('click', (n) => {
    n = selecionado.innerHTML;
    n++;
    selecionado.innerHTML = n;
  });
  
menos.addEventListener('click', (n) => {
    n = selecionado.innerHTML;
    n--;
    selecionado.innerHTML = n;
});

function iniciar(){
    sorvetes.map((prd)=>{
        produtosDisplay.innerHTML += `
            <div class="produto alinhar">
                <img src="`+prd.img+`" class="img">
                <div class="coluna">
                    <p>`+prd.nome+`</p>
                    <p>`+prd.preco+`</p>
                    <p>Estoque: `+prd.estoque+`</p>
                </div>
            </div>
        `
    })
}

function clickNoTeclado(n){
    deposito.innerHTML += n;
}

function retirarDinheiro(){
    saldo.innerHTML = "";
    alert("Seu dinheiro foi retirado!");
}

function deletar(){
    deposito.innerHTML = "";
}

iniciar();