window.onload = function(){

    // Referencing HTML tags
    var mainContainer = document.querySelector(".container");

    var form = document.forms[0];

    // var input = form.querySelector("input");

    var ul = document.querySelector("ul");

    var clearAll = document.querySelector("#clear-all button");
    
    // Adding function to generate UL list items
    function generate(a){
        ul.innerHTML += `<li>${a}
            <span>
                <i class="far fa-check-circle completed"></i>
                <i class="fas fa-pencil-alt edit"></i>
                <i class="fas fa-trash-alt delete"></i>
            </span>
        </li>`;
    }

    // Adding event listener for a submit form
    form.addEventListener("submit", function(e){
        
        e.preventDefault();

        var value = form.item.value.toLowerCase().trim();

        /* If the value of the input tag is more than 1 in length, call generate function and pass value of the input tag as the argment.
        Also, reset the form after submitting. If there's no length, make a p tag that will be inserted as an alert to type somehting,
        and then disappear after certain amount of seconds */
        if(value.length >= 1){
            generate(value);
            form.item.value = "";
        } else{
            var p = document.createElement("p");
            p.textContent = "Please Enter Valid Value";
            p.classList.add("alerted");
            mainContainer.prepend(p);
            setTimeout(function(){
                mainContainer.removeChild(p);
            }, 2000);
        }
    });

    ul.addEventListener("click", function(e){

        // Prevent event bubbling
        e.stopPropagation();

        if(e.target.classList.contains("delete")){
            e.target.parentNode.parentNode.remove();
        }

        if(e.target.classList.contains("edit")){
            e.target.parentNode.parentNode.style.display = "none";
            form.item.value = e.target.parentNode.parentNode.textContent;
        }

        if(e.target.classList.contains("completed")){
            e.target.parentNode.parentNode.style.color = "grey";
            e.target.parentNode.parentNode.style.textDecoration = "line-through";
            e.target.style.opacity = "0.2";
            e.target.classList.remove("completed");
        } else{
            e.target.parentNode.parentNode.style.color = "black";
            e.target.parentNode.parentNode.style.textDecoration = "none";
            e.target.style.opacity = "1";
            e.target.classList.add("completed");
        }

    });

    // Event listener to be called when all of the items want to be deleted at once
    clearAll.addEventListener("click", function(){
        ul.innerHTML = "";
    });

}