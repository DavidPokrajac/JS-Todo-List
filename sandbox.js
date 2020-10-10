window.onload = function(){

    // Referencing HTML tags
    var mainContainer = document.querySelector(".container");

    var form = document.forms[0];

    var input = form.querySelector("input");

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

        var value = input.value.trim();

        /* If the value of the input tag is more than 1 in length, call generate function and pass value of the input tag as the argment.
        Also, reset the form after submitting. If there's no length, make a p tag that will be inserted as an alert to type somehting,
        and then disappear after certain amount of seconds */
        if(value.length >= 1){
            generate(value);
            form.reset();
        } else{
            var p = document.createElement("p");
            p.textContent = "Please Enter Valid Value";
            mainContainer.prepend(p);
            setTimeout(function(){
                mainContainer.removeChild(p);
            }, 4000);
        }
    });

    // Event listener to be called when all of the items want to be deleted at once
    clearAll.addEventListener("click", function(){
        ul.innerHTML = "";
    });

}