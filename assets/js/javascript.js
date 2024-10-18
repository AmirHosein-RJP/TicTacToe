const tic = document.querySelectorAll('.TicTacToe>div')
const winnernotify = document.querySelector('.TicTacToe>.WD')
const replaybtn = document.querySelector('.TicTacToe>button')
const ply1 = document.querySelector('.TicTacToe>.ply1')
const ply2 = document.querySelector('.TicTacToe>.ply2')
const drw = document.querySelector('.TicTacToe>.drw')
let winner = []
let player1 = 0
let player2 = 0
let draw = 0


let flag = true


tic.forEach((val, i) => {
    val.addEventListener('mouseenter', (e) => {
        const placeholder = document.createElement('span');
        let clicked = e.target.getAttribute('data-clicked')

        if(clicked == 'off'){
            if(flag) {
                placeholder.innerText = '{'
                tic[i].style.border = '5px solid #731E3F'
            }else {
                placeholder.innerText = '0'
                tic[i].style.border = '5px solid #731E3F'
            }
        }

        if(e.target.getAttribute('data-clicked') == 'off'){
            e.target.appendChild(placeholder)
        }
    })
    val.addEventListener('mouseleave', (e) => {
        if(e.target.getAttribute('data-clicked') == 'off'){
            val.firstChild.remove()
            tic[i].style.border = '5px solid rgba(255, 255, 255, 0.155)'
        }
    })
    val.addEventListener('click', (e) => {
        let clicked = e.target.getAttribute('data-clicked')

        if (clicked == 'off') {
            if (flag) {
                val.innerText = '{'
                val.style.border = '5px solid #E73d7E'
            }
            else {
                val.innerText = '0'
                val.style.border = '5px solid #E73d7E'
            }
            flag = !flag
        }
        e.target.setAttribute('data-clicked', 'on')

        switch (true) {
            case (tic[0].innerText != '') && (tic[0].innerText == tic[1].innerText && tic[0].innerText == tic[2].innerText): winner.push(0, 1, 2); break;
            case (tic[3].innerText != '') && (tic[3].innerText == tic[4].innerText && tic[3].innerText == tic[5].innerText): winner.push(3, 4, 5); break;
            case (tic[6].innerText != '') && (tic[6].innerText == tic[7].innerText && tic[6].innerText == tic[8].innerText): winner.push(6, 7, 8); break;
            case (tic[0].innerText != '') && (tic[0].innerText == tic[3].innerText && tic[0].innerText == tic[6].innerText): winner.push(0, 3, 6); break;
            case (tic[1].innerText != '') && (tic[1].innerText == tic[4].innerText && tic[1].innerText == tic[7].innerText): winner.push(1, 4, 7); break;
            case (tic[2].innerText != '') && (tic[2].innerText == tic[5].innerText && tic[2].innerText == tic[8].innerText): winner.push(2, 5, 8); break;
            case (tic[0].innerText != '') && (tic[0].innerText == tic[4].innerText && tic[0].innerText == tic[8].innerText): winner.push(0, 4, 8); break;
            case (tic[2].innerText != '') && (tic[2].innerText == tic[4].innerText && tic[2].innerText == tic[6].innerText): winner.push(2, 4, 6); break;
        }

        winner.forEach((el) => {
            tic[el].style.color = '#3de7a6'
            tic[el].style.border = '5px solid #3de7a6'
        })

        if (winner.length == 3) {
            tic.forEach((tic) => {
                tic.setAttribute('inert', true)
            })
            let winnermark = tic[winner[0]].innerText
            console.log(winnermark);

            if (winnermark == '{') {
                player1++
            }
            else {
                player2++
            }

            setTimeout(() => {
                tic.forEach((val) => {
                    val.style.display = 'none'
                    val.removeAttribute('inert')
                    val.parentElement.style.alignContent = 'center'
                })
                winnernotify.style.display = 'flex'
                winnernotify.children[0].innerText = winnermark
                winnernotify.children[1].innerText = 'win'
                replaybtn.style.display = 'flex'
            }, 1800);
        }

        replaybtn.addEventListener('click', () => {
            replaybtn.style.display = 'none'
            winnernotify.style.display = 'none'
            winnernotify.children[0].innerText = ''
            winner = []
            tic.forEach((val) => {
                val.style.display = 'flex'
                val.innerText = ''
                val.style.border = '5px solid rgba(255, 255, 255, 0.155)'
                val.style.color = 'white'
                val.parentElement.style.alignContent = 'space-evenly'
                val.setAttribute('data-clicked', 'off')
            })
        })


        let count = 0
        tic.forEach((val) => {
            if(val.innerText == ''){
                count++
            }
        })
        if(count == 0 && winner.length != 3){
            draw++
            setTimeout(() => {
                tic.forEach((tic) => {
                    tic.style.display = 'none'
                    tic.innerText = ''
                    tic.parentElement.style.alignContent = 'center'
                })
                winnernotify.style.display = 'flex'
                winnernotify.children[1].innerText = 'draw'
                winnernotify.children[1].style.marginBottom = '30px'
                replaybtn.style.display = 'flex'
                winner = []
            }, 1800);
        }

        ply1.innerText = 'player 1:' + player1
        ply2.innerText = 'player 2:' + player2
        drw.innerText = 'draw:' + draw
        

        


        
        




    })
})
