

class SayWhat {


    constructor() {
        this.init()
    }

    init() {
        this.bindEvents()
    }

    bindEvents() {
        $('.twords-wrapper li').on('click', (e) => {
            $('.twords-backdrop').addClass('show')
            $('.twords-wrapper li').removeClass('show')
            $(e.currentTarget).addClass('show')
        })

        $('.twords-backdrop').on('click', () => {
            $('.twords-wrapper li').removeClass('show')
            $('.twords-backdrop').removeClass('show')
        })
    }

    getRandomWord() {
        return words[Math.floor(Math.random() * this.words.length)]
    }

    showWord(index) {
        $('body').data('showword', index)
    }



}


$(function() {
    const sayWhat = new SayWhat()
})