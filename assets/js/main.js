(function () {
    let index = 0
    const lista = document.querySelector('.lista')
    const seq = []
    seq.push(document.querySelector('.comando'));
    let divAtual = seq[index];
    const side_bar = document.querySelector('.side-bar')
    const container = document.querySelector('.container')
    const botoesKOFXV = document.querySelector('.kofxv_box')
    const botoesSF6 = document.querySelector('.sf6_box')
    let tituloPagina = document.querySelector('#input-titulo')

    //botoesComma = kofxv_box
    //botoesJogo = sf6_box

    document.addEventListener('mouseup', function (e) {
        let el = e.target;
        triagem(el);
    })

    function triagem(alvo) {
        if (alvo.classList.contains('comma')) {
            addImg(alvo)
        }
        if (alvo.classList.contains('btnNext')) {
            nextDiv()
        }
        if (alvo.classList.contains('btnPrevious')) {
            previousDiv()
        }
        if (alvo.classList.contains('aba_kofxv')) {
            abrirKOFXV()
        }
        if (alvo.classList.contains('aba_sf6')) {
            abrirSF6()
        }
        if (alvo.classList.contains('btnImp')) {
            document.title = tituloPagina.value
            window.print()

        }
    }



    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === 'ArrowDown') {
            nextDiv()
        }
        if (e.key === 'ArrowUp') {
            previousDiv()
        }
        if (e.key === 'ArrowLeft') {
            previousImg()
        }

    });


    function addImg(img) {
        if (seq.length > 0) {
            let slot = img.cloneNode(true);
            divAtual.appendChild(slot);
            console.log(seq)
        } else {
            nextDiv()
            let slot = img.cloneNode(true);
            divAtual.appendChild(slot);
            console.log(seq)
        }
    }

    function nextDiv() {
        let newDiv = document.createElement('div');
        newDiv.classList.add('comando');
        lista.appendChild(newDiv);
        seq.push(newDiv);
        index++
        divAtual = seq[index]
        // if (seq.length >= 12) {

        // }
    }

    function previousDiv() {
        if (seq.length > 0) {
            divAtual.remove();
            seq.pop()
            index--
            divAtual = seq[index]
        }
    }

    function previousImg() {
        if (seq.length > 0) {
            if (divAtual.children.length > 0) {
                divAtual.lastChild.remove()
            } else { console.log('não tem children') }
        }
    }

    function abrirKOFXV() {
        botoesSF6.classList.add('hidden')
        if (botoesKOFXV.classList.contains('hidden')) {
            botoesKOFXV.classList.remove('hidden')
        }
    }

    function abrirSF6() {
        botoesKOFXV.classList.add('hidden')
        if (botoesSF6.classList.contains('hidden')) {
            botoesSF6.classList.remove('hidden')
        }
    }




})()