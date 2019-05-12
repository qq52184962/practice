const list = document.querySelector('#book-list ul')
var todo,done,total;

//initialcounter
todo = document.querySelectorAll(".status").length;
undo = document.querySelectorAll(".undo").length;
total = todo+undo;

const initialtodoamt = document.querySelector(".todo");
const initialundoamt = document.querySelector(".retrieve");
const initialtotalamt = document.querySelector(".total");

//initial amount displaying
initialtodoamt.textContent = "Todo: "+todo;
initialundoamt.textContent = "Uodo: "+undo;
initialtotalamt.textContent = "Total: "+total;

//counter will be used in clicking & item-adding
var totalamt = document.querySelector(".total");
var todoamt = document.querySelector(".todo");
var undoamt = document.querySelector(".retrieve");

initialtodoamt.textContent = "Todo: "+todo;
initialundoamt.textContent = "Uodo: "+undo;
initialtotalamt.textContent = "Total: "+total;

//remove list+status+change+dynamic title amount display
list.addEventListener("click",function(e){

    const li = e.target.parentElement;
    const changests = li.querySelector('.status');
    const undosts = li.querySelector('.Undo');

    if(e.target.className=='delete')
    {
        list.removeChild(li);
        todo--;
        total--;
        todoamt.textContent = "Todo: "+todo;
        undoamt.textContent = "Uodo: "+undo;
        totalamt.textContent = "Total: "+total;
    }
    if(e.target.className==="status")
    {
        li.firstElementChild.style.textDecoration ="line-through";
        changests.textContent="Undo";
        changests.className="Undo";

        //counter is here
        todo--;
        undo++;
        todoamt.textContent = "Todo: "+todo;
        undoamt.textContent = "Uodo: "+undo;
        totalamt.textContent = "Total: "+total;
    }
    else if(e.target.className==="Undo")
    {
        li.firstElementChild.style.textDecoration="none";
        undosts.textContent="Done";
        undosts.className="status";
        
        //counter is here
        undo--;
        todo++;
        todoamt.textContent = "Todo: "+todo;
        undoamt.textContent = "Uodo: "+undo;
        totalamt.textContent = "Total: "+total;
    }

})

//hide the item
const hidethebks = document.querySelector('#hide');

hidethebks.addEventListener('change',function(e){
    if(hidethebks.checked)
    {
        list.style.display ="none";
    }
    else
    {
        list.style.display="initial";
    }
})

const addbk = document.forms['add-book'];

//add new item
addbk.addEventListener("submit",function(e){
    e.preventDefault();
    const value = addbk.querySelector('input[type="text"]').value;
    
    
    //create elements
    const li = document.createElement('li');
    const content = document.createElement('span');
    const sts = document.createElement('span');
    const button = document.createElement('span');

    //givevalues
    content.textContent=value;
    content.classList.add('name');
    sts.textContent="Done"
    sts.classList.add("status")
    button.textContent='delete';
    button.classList.add('delete')

    //append elements
    list.appendChild(li);
    li.appendChild(content);
    li.appendChild(sts);
    li.appendChild(button);

    addbk.reset();

    //counter is here
    total++;
    todo++;
    todoamt.textContent = "Todo: "+todo;
    totalamt.textContent = "Total: "+total;

})

//filter
const filt = document.querySelector('input[type="text"]');

filt.addEventListener('keyup', function(e){
    // console.log(e.target.value);
    const temptext = e.target.value.toLowerCase();
    const allbooks = list.querySelectorAll('li');

    allbooks.forEach(function(book)
    {
        const bookname = book.firstElementChild.textContent;
        if(bookname.toLowerCase().indexOf(temptext)!=-1) //if the content we typed in doesn't appear, return -1
        {
            book.style.display="block";
        }
        else
        {
            book.style.display="none";
        }
    })
    
})

//tabbed content


const tab = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tab.addEventListener('click',function(e){
    if(e.target.tagName=="LI")
    {
        const targetpnl = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel==targetpnl)
            {
                panel.classList.add('active');
            }
            else
            {
                panel.classList.remove('active');
            }
            
        })
    }
})



