document.getElementById('push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Enter atleast one task..")
    }
    else{
        document.getElementById('tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        var current_tasks = document.getElementsByClassName("delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        document.querySelector("#newtask input").value = "";
        
    }
}