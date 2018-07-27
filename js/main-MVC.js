//create cat class
$(function(){

"use strict";
const VK_SPACE = 32;

//Model defination
var Model={

    activeItem : 0 ,
    listItems : [ 
        {name : "anas cat" , url : "img/img1.jpg" ,  counter : 0 },
        {name : "june cat" , url : "img/img2.jpg" ,  counter : 0 },
        {name : "sami cat" , url : "img/img3.jpg" ,  counter : 0 },
        {name : "alex cat" , url : "img/img1.jpg" ,  counter : 0 },
        {name : "medo cat" , url : "img/img2.jpg" ,  counter : 0 },
        {name : "samer cat", url : "img/img3.jpg" ,  counter : 0 }
    ]

}

//Controler defination

var Controler = {
    init : () => {
          //Model init get data from server
          View.init();
          View.A11y();
    },

    getItems : ()=> {
        return Model.listItems;
    },

    setActiveItem : (item)=> {
        let index=Model.listItems.indexOf(item);
        Model.activeItem =index ;
    },


    getActiveItems : ()=> {
        return Model.listItems[Model.activeItem];
    },

    increaseCounter : ()=> {
        return ++ Controler.getActiveItems().counter;
    },

    updateActiveItem : (name , count )=> {
        Controler.getActiveItems().name   = name;
        Controler.getActiveItems().counter =count;
    },


}




//View defination
var View = {

     imageSelector  : document.querySelector('#image img'),
     headerSelector : document.querySelector('#image h2'),

    init : ()=>{
       //add items to list
        Controler.getItems().forEach( (item )=>{
            View.renderItem(item );
        } );
        //render the first item in the main div
        let mainDiv = document.querySelector('#image');
        View.showitem(Controler.getActiveItems());

        mainDiv.addEventListener('click' , ()=>{
            View.updateScore (Controler.increaseCounter());
        })
        
        //admin form
        document.querySelector("#adminBtn").addEventListener('click' , ()=> {
            //toggler admin  form
            $("#adminForm").toggle()
        });

        //admin form
        document.querySelector("#cancel").addEventListener('click' , ()=> {
            //hide admin form 
            $("#adminForm").hide()
        });
        document.querySelector("#save").addEventListener('click' , ()=> {
            //save fields
           let name  = $("#name-input").val();
           let count = $("#count-input").val();
           Controler.updateActiveItem(name , count );
           View.updateScore (count);
        })


    },

    //render list item li in ul
    renderItem : (ItemList )=>{ 
        let itemView= $( '<li class="list-item focusable"> </li> ' );
        itemView.append( $( `<img alt="${ItemList.name}" src="${ItemList.url}" >` ) );
        itemView.append( $( `<p>${ItemList.name}</p>` ) );
            

        document.querySelector('#cats-list').append(itemView[0]);

        itemView[0].addEventListener('click',View.showitem.bind(null,ItemList)); 
    
    },

     showitem : (item)=>{

        Controler.setActiveItem(item);
        View.imageSelector.setAttribute("src" ,item.url );
        View.headerSelector.textContent = item.name ;
        View.updateScore (item.counter);
        //fill admin fields
        $("#name-input").val(item.name);
        $("#count-input").val(item.counter);

    },

    updateScore : ( value )=>{
        document.querySelector("#score").textContent=value ;
    },




    A11y : ()=> {
        //get all element with focusable class
        let elms=document.querySelectorAll(".focusable" );
        elms.forEach( element => {
            element.setAttribute("tabindex", "0" ) ;
            element.addEventListener ('keydown',(event)=>{
                if(event.keyCode!==undefined & event.keyCode!= VK_SPACE ) return ;
                event.target.click();
            });
        });
    },
    


}

//app run
Controler.init();

}

);