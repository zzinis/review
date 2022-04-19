const boxs = document.querySelectorAll('#row');
        const btns = document.querySelectorAll('.btns li');

        const wrap = document.querySelector('#wrap');
        const box1 = document.querySelector('article');

        for(let i=0; i<btns.length; i++ ){
            btns[i].addEventListener('click', e=>{
                activation(i, btns);
                activation(i, boxs);
            });
        }

        function activation(index, list){
            for(let el of list){
                el.classList.remove('on');
            }
            list[index].classList.add('on');
        }

        wrap.addEventListener("click", ()=>{
            box1.style.backgroundColor = "hotpink";
        });