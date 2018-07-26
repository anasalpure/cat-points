//create cat class
(function(){

"use strict";
const VK_SPACE = 32;



class Cat {

    constructor( name ,image  ){
     this.name=name;
     this.img=image;
     this.counter =0;

     this.onClick=this.onClick.bind(this);
     this.render();
    }

    onClick (event){
        this.counter+=1;
        document.querySelector("#score").textContent=this.counter ;
    }

    render(){

        let  catView=$(
            `<div class="img-back focusable" id="${this.name.replace(' ' ,'')}" >`+
            '</div> '
            );
        catView.append( $( '<div class="overlay"></div>' ) );
        catView.append( $( `<h2 class="center-abs">${this.name}</h2>` ) );
        catView.append( $( `<img alt="All CSS Functions" src="${this.img}" >`) );
            
             
            
        document.querySelector("#game-container").append(catView[0]);
        //add click listener 
        catView[0].addEventListener('click',this.onClick);

    }
}



//initial list items and render it in list 
let listItems=[ 
    {name : "anas cat" , url : "img/img1.jpg" , added : false},
    {name : "june cat" , url : "img/img2.jpg" , added : false},
    {name : "sami cat" , url : "img/img3.jpg" , added : false},
    {name : "alex cat" , url : "img/img1.jpg" , added : false},
    {name : "medo cat" , url : "img/img2.jpg" , added : false},
    {name : "samer cat", url : "img/img3.jpg" , added : false}
];



listItems.forEach( (item)=>{

    const view =renderItem(item);
    document.querySelector('#cats-list').append(view);
    view.addEventListener('click',(function(itemCopy) {
        return function() {
            additem (itemCopy);
        };
    })(item));

} );

function additem (item){
    console.log(item);
    if(item.added) return ;
    item.added=true;
    new Cat(  item.name , item.url );
}


function renderItem(ItemList){
    let  itemView=$(' <li class="list-item focusable"> </li>' );
    itemView.append( $( `<img alt="${ItemList.name}" src="${ItemList.url}" />` ) );
    itemView.append( $( `<p> ${ItemList.name} </p>`) );
    return itemView[0];     
}





}

)();