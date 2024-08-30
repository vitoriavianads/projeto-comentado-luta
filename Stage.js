/**
 * 1 - saber as informações de quem está lutando
 * (qual o id que tem as informações do char 1 ou char 2)
 * 2 - ação de atacar dos chars
 * 3 - atualizar a barra de vida
 */ 

class Stage {
    constructor(char1, char2, char1Element, char2Element) {
        this.char1 = char1
        this.char2 = char2
        this.charElement = char1Element
        this.char2Element = char2Element
    }

    start() {
        this.update()
    }

    update() {
        // char1
        this.char1Element.querySelector('.name').innerHTML = `$
        {this.char1.name}`
        // barra de vida
        let charHP = (this.char1.life / this.char1.maxLife) * 100
        this.charElement.querySelector(`.bar`).style.widht = `$
        {char1HP}%`

        //char2 - selecionando o nome do char
        this.char2Element.querySelector('.name').innerHTML = `$
        {this.char2.name}`
        // barra de vida
        let char2HP = (this.char2.life / this.char2.maxLife) * 100
        this.char2Element.querySelector('.bar').style.widht = `${char2HP}%`

    }
}