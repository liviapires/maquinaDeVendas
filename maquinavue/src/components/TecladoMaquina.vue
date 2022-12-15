<template>
    <div class="teclado">
                        <button class="btn" onclick="clickNoTeclado(1)">1</button>
                        <button class="btn" onclick="clickNoTeclado(2)">2</button>
                        <button class="btn" onclick="clickNoTeclado(3)">3</button>
                        <button class="btn" onclick="clickNoTeclado(4)">4</button>
                        <button class="btn" onclick="clickNoTeclado(5)">5</button>
                        <button class="btn" onclick="clickNoTeclado(6)">6</button>
                        <button class="btn" onclick="clickNoTeclado(7)">7</button>
                        <button class="btn" onclick="clickNoTeclado(8)">8</button>
                        <button class="btn" onclick="clickNoTeclado(9)">9</button>
                        <button class="btn" onclick="deletar()"><img class="backspace" src="@/assets/img/backspace.png"></button>
                        <button class="btn" onclick="clickNoTeclado(0)">0</button>
                        <button class="confirma">Confirmar</button>
                    </div>
</template>

<style>
.teclado{
    margin-top: 2rem;
    display: grid;
    grid-template-columns: auto auto auto
}
</style>