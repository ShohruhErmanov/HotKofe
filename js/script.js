let inp = document.querySelector(".header__input")
let elBtn = document.querySelector(".header__btn")
let li = document.querySelector(".li")

elBtn.addEventListener('click', () => {
   
    if(inp.value == "Shohruh"){
        alert("+998940552101")
    }else if(inp.value == "Abdulaziz"){
        alert("+998958116222")
    }else if(inp.value == "Eldor"){
        alert("+998973410306")
    }else if(inp.value == "Hilola"){
        alert("+998945812620")
    }else if(inp.value == "Madina"){
        alert("+998949361447")
    }else if(inp.value == "Miryosin"){
        alert("+998997288876")
    }else if(inp.value == "Murod"){
        alert("+998990673606")
    }else if(inp.value == "Ozod"){
        alert("+998906892006")
    }else if(inp.value == "Saman"){
        alert("+998958890615")
    }else if(inp.value == "Xasan"){
        alert("+998999015285 +998936520613")
    }else{
        alert("Bunday ism saytga kiritilmagan")
    }
    inp.value = null
    
})

