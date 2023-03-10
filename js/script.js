//open menu
let filterBlocks=document.getElementsByClassName('filter-block__selector');
let filterBlocksMenu=document.getElementsByClassName('filter-block__selector__menu');



for (let item of filterBlocks) {
    item.addEventListener('click',(e)=>{
        
        if( item.classList.contains('open-menu')){
            item.classList.remove('open-menu')
        }
        else{
            item.classList.add('open-menu')
        }
        

    })
}

for (let item of filterBlocksMenu) {
    item.addEventListener('click',(e)=>{
        
        e.stopPropagation()
        

    })
}


//open menu


//format price


let inputPriceFrom = document.getElementById("priceFrom"),
inputPriceTo = document.getElementById("priceTo");

const formatPrice=(e)=>{
    val_input = e.value;
    val_input = val_input.replace(/\s/g, '');
  
    if (!val_input) return;
    let hasDotAtTheEnd = val_input.endsWith('.');
    
    val_input = Number.parseFloat(val_input)
    if (isNaN(val_input)) return  
    
    e.value = val_input.toLocaleString('ru').replace(',', '.') + (hasDotAtTheEnd ? '.' : '');
}

inputPriceFrom.onkeyup= function() {
    formatPrice(inputPriceFrom)
  }

  inputPriceTo.onkeyup= function() {
    formatPrice(inputPriceTo)
  }




//format price
