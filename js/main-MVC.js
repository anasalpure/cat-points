//create cat class
$(function(){

"use strict";


//Model defination
var Model={

    counter : 0 ,
    listItems : [ 
        {name : "anas cat" , url : "img/img1.jpg" , added : false},
        {name : "june cat" , url : "img/img2.jpg" , added : false},
        {name : "sami cat" , url : "img/img3.jpg" , added : false},
        {name : "alex cat" , url : "img/img1.jpg" , added : false},
        {name : "medo cat" , url : "img/img2.jpg" , added : false},
        {name : "samer cat", url : "img/img3.jpg" , added : false}
    ]

}

//Controler defination

var Controler = {
    init : () => {
          //Model init get data from server
          View.init()
    },

    getItems : ()=> {
        return Model.listItems;
    },

    increaseCounter : ()=> {
        return ++Model.counter ;
    },

}




//View defination
var View = {

    init : ()=>{

        Controler.getItems().forEach( (item)=>{
            View.renderItem(item);
        } );

    },

    
    renderItem : (ItemList)=>{ 
        let itemView= $( '<li class="list-item"> </li> ' );
        itemView.append( $( `<img alt="${ItemList.name}" src="${ItemList.url}" >` ) );
        itemView.append( $( `<p>${ItemList.name}</p>` ) );
            

        document.querySelector('#cats-list').append(itemView[0]);

        itemView[0].addEventListener('click',View.showitem.bind(null,ItemList));
    
    },

     showitem : (item)=>{
        if(item.added) return ;
        item.added=true;

        let  catView=$(
            `<div class="img-back focusable" id="${item.name.replace(' ' ,'')}" >`+
            '</div> '
            );
        catView.append( $( '<div class="overlay"></div>' ) );
        catView.append( $( `<h2 class="center-abs">${item.name}</h2>` ) );
        catView.append( $( `<img alt="All CSS Functions" src="${item.url}" >`) );
            
             
            
        document.querySelector("#game-container").append(catView[0]);
        //add click listener 
        catView[0].addEventListener('click',View.catClicked);
    },



    catClicked : (event)=>{
        let counter =Controler.increaseCounter();
        document.querySelector("#score").textContent=counter ;
    }
    


}

//app run
Controler.init();

}

);