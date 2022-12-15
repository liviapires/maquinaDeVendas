<template>
        <div class="maquina centralizar">
            <div class="topo centralizar">
                <h1>Maquina de Vendas</h1>
            </div>
            <div class="tresColunas">
                <div id="produtos" class="produtos">
                </div>
                <div class="quantidade centralizar">
                    <h1>Produto Selecionado</h1>
                    <button class="mais chevron"><img class="chevron" src="@/assets/img/chevron.png"></button>
                        <div class="quadrado centralizar">
                            <p class="produtoSelecionado"></p>
                        </div>
                    <button class="menos chevron"><img class="chevron inverter" src="@/assets/img/chevron.png"></button>
                    <button class="botoes">COMPRAR</button>
                </div>
                <div class="controles centralizar">
                    <div class="centralizar">
                        <h1>Saldo</h1>
                        <span id="display" class="saldo"></span>
                        <h1>Depositar</h1>
                        <p id="display" class="deposito"></p>
                    </div>
                    <!--Teclado-->
                    <TecladoMaquina />
                    <button class="botoes" onclick="retirarDinheiro()">Retirar Dinheiro</button>
                </div>
            </div>
        </div>
</template>

<script>
import TecladoMaquina from './components/TecladoMaquina.vue'

export default {
    name: 'App',
    components: {
        TecladoMaquina,
    }
}

</script>

<style>

:root {
    --branco: #fefefe;
    --preto: #000;
    --azul: #50a4e9a9;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--branco);
    cursor: default;
}

p{
    margin: 0.2rem;
}

button{
    width: 4.6rem;
    height: 2rem;
    cursor: pointer;
}

.centralizar{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.alinhar{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.coluna{
    display: flex;
    justify-content: right;
    align-items: right;
    flex-direction: column;
}

.maquina{
    margin-top: 1.4rem;
    padding: 5%;
    width: 60rem;
    height: auto;
    border: 0.3rem solid var(--preto);
}

.produto{
    margin-top: 3.3rem;
    width: 12rem;
    height: 3.7rem;
}

.img{
    width: 50%;
}

.linha{
    width:15%;
}

.backspace{
    width: 25%;
}

.chevron{
    width: 30%;
    cursor: pointer;
    background-color: transparent;
    border: none;
}

.inverter{
    transform: rotateX(180deg);
}

.quadrado{
    width: 10rem;
    height: 10rem;
    background-color: var(--azul);
    text-align: center;
    font-size: 7rem;
    border: none;
    cursor: default;
}

#display{
    border: 0.2rem solid var(--preto);
    width: 10rem;
    height: 3.7rem;
    text-align: center;
    font-size: 3rem;
    cursor: default;
}

.tresColunas{
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 7rem;
}

.botoes{
    margin-top: 1rem;
    width: auto;
}
</style>