(function () {
    let index = 0
    const lista = document.querySelector('.lista')
    const seq = []
    seq.push(document.querySelector('.comando'));
    let divAtual = seq[index];
    const root = document.querySelector(':root')
    const body = document.querySelector('body')
    const btns = document.querySelector('.container button')
    const btnIcon = document.querySelector('.container button i')
    const botoesKOFXV = document.querySelector('.kofxv_box')
    const botoesSF6 = document.querySelector('.sf6_box')
    const botoesTK8 = document.querySelector('.tk8_box')
    const botoesXKO = document.querySelector('.xko_box')

    const botoesAll = document.querySelectorAll(".comma-box")
    const allAbas = document.querySelectorAll(".aba")
    const abaSf6 = document.querySelector(".aba_sf6")  
    const abaKofxv = document.querySelector(".aba_kofxv")  
    const abaTk8 = document.querySelector(".aba_tk8")  
    const abaXKO = document.querySelector(".aba_xko")  

    let tituloPagina = document.querySelector('#input-titulo')


    document.addEventListener('mouseup', function (e) {
        let el = e.target;
        triagem(el);
    })

    function triagem(alvo) {
        if (alvo.classList.contains('comma')) {
            addImg(alvo)
        }
        if (alvo.classList.contains('txt')) {
            addTxt()
        }

        if (alvo.classList.contains('btnNext')) {
            nextDiv()
        }
        if (alvo.classList.contains('btnPrevious')) {
            previousDiv()
        }
        if (alvo.classList.contains('btnBack')) {
            previousImg()
        }
        if (alvo.classList.contains('aba_kofxv') || alvo.classList.contains('kofxvImg')) {
            abrirKOFXV(alvo)
        }
        if (alvo.classList.contains('aba_sf6') || alvo.classList.contains('sf6Img')) {
            abrirSF6(alvo)
        }
        if (alvo.classList.contains('aba_tk8') || alvo.classList.contains('tk8Img')) {
            abrirTK8(alvo)
        }
        //////////////////////
        if (alvo.classList.contains('aba_xko') || alvo.classList.contains('xkoImg')) {
            abrirXKO(alvo)
        }
        ///////////////////////
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
        } else {
            nextDiv()
            let slot = img.cloneNode(true);
            divAtual.appendChild(slot);
        }
    }

    function addTxt() {
        if (seq.length > 0) {

            let newTxt = document.createElement('p');
            let newSpn = document.createElement('span');
            newSpn.setAttribute('role', 'textbox')
            newSpn.setAttribute('contenteditable','')
            newSpn.innerText = 'text'
            newTxt.classList.add("txt-p")
            newSpn.classList.add("txt-after")
            console.log(newTxt)
            // let slot = img.cloneNode(true);
            divAtual.appendChild(newTxt);
            newTxt.appendChild(newSpn);
        } else {
            nextDiv()
            let slot = img.cloneNode(true);
            divAtual.appendChild(slot);
        }
    }

    function nextDiv() {
        let newDiv = document.createElement('div');
        newDiv.classList.add('comando');
        lista.appendChild(newDiv);
        seq.push(newDiv);
        index++
        divAtual = seq[index]
        window.scrollTo(0, document.body.scrollHeight)
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

    function abrirKOFXV(alvo) {

        botoesAll.forEach((box) => {
            box.classList.add("hidden")
        })
        botoesKOFXV.classList.remove('hidden')

        allAbas.forEach((aba) => {
            aba.classList.remove("aba_selec")
        })
        abaKofxv.classList.add("aba_selec")
        console.log(alvo)

        
        root.style.setProperty("--tema1", "var(--kofxv-primary)")
        root.style.setProperty("--tema2", "var(--kofxv-second)")
        root.style.setProperty("--tema3", "var(--kofxv-terc)")
        root.style.setProperty("--tema4", "var(--kofxv-quarto)")
        

    }

    function abrirSF6(alvo) {

        botoesAll.forEach((box) => {
            box.classList.add("hidden")
        })
        botoesSF6.classList.remove('hidden')

        allAbas.forEach((aba) => {
            aba.classList.remove("aba_selec")
        })
        abaSf6.classList.add("aba_selec")

        root.style.setProperty("--tema1", "var(--sf6-primary)")
        root.style.setProperty("--tema2", "var(--sf6-second)")
        root.style.setProperty("--tema3", "var(--sf6-terc)")
        root.style.setProperty("--tema4", "var(--sf6-quarto)")
    }

    function abrirTK8(alvo) {

        botoesAll.forEach((box) => {
            box.classList.add("hidden")
        })
        botoesTK8.classList.remove('hidden')

        allAbas.forEach((aba) => {
            aba.classList.remove("aba_selec")
        })
        abaTk8.classList.add("aba_selec")

        root.style.setProperty("--tema1", "var(--tk8-primary)")
        root.style.setProperty("--tema2", "var(--tk8-second)")
        root.style.setProperty("--tema3", "var(--tk8-terc)")
        root.style.setProperty("--tema4", "var(--tk8-quarto)")
    }

    function abrirXKO(alvo) {

        botoesAll.forEach((box) => {
            box.classList.add("hidden")
        })
        botoesXKO.classList.remove('hidden')

        allAbas.forEach((aba) => {
            aba.classList.remove("aba_selec")
        })
        abaXKO.classList.add("aba_selec")

        root.style.setProperty("--tema1", "var(--xko-primary)")
        root.style.setProperty("--tema2", "var(--xko-second)")
        root.style.setProperty("--tema3", "var(--xko-terc)")
        root.style.setProperty("--tema4", "var(--xko-quarto)")
    }




})()