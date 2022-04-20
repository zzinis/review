        const boxs = document.querySelectorAll('#row');
        const btns = document.querySelectorAll('.btns li');

        const wrap = document.querySelector('#wrap1');
        const box1 = document.querySelector('article');

        wrap.addEventListener("click",()=>{
            let isOn = wrap.classList.contains("on");
            console.log(isOn);
        })

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
