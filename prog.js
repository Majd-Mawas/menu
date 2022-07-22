const Btns = document.querySelectorAll("#Btns")
const Food = document.querySelectorAll("#min-food")

    Btns.forEach(function(btn){
        btn.addEventListener("click",function(e){
            for(let i = 0 ; i<Food.length;i++){
                    Food[i].classList.remove("cate")
                if(e.target.innerText != Food[i].classList.value){
                    Food[i].classList.add("cate")
                }
                if(e.target.innerText == "All"){
                    Food[i].classList.remove("cate")
                }
            }
        })
    })
