var input = document.getElementById('box1');
var itemCount = document.getElementById('box3').childElementCount;
var box2 = document.getElementById('box2');
var items = document.querySelectorAll('.items');

items.forEach(i =>{
    i.addEventListener('click', ()=>{
        input.value = i.firstElementChild.innerHTML;
        hideitems();
    });
});
input.addEventListener("keyup"  ,function()
{
    let index=0;
    for(let i = 0; i < itemCount ; i++)
    {
      index =  items[i].firstElementChild.innerHTML.toLowerCase().search(input.value.toLowerCase());
        if(index != -1)
        {
            items[i].classList.add('show');
        }
        else
        {
            items[i].classList.remove('show');
        }
       
    }
});
input.addEventListener("focus"  ,function()
{
    let index=0;
    for(let i = 0; i < itemCount ; i++)
    {
      index =  items[i].firstElementChild.innerHTML.toLowerCase().search(input.value.toLowerCase());
        if(index != -1)
        {
            items[i].classList.add('show');
        }
    }
});
document.addEventListener('click', e=>{
    if(e.target.value=='press'||(e.target.tagName!="P" && e.target.tagName!="INPUT"))
    {
       
        hideitems();
    }
});
function hideitems()
{
    items.forEach(item =>{item.classList.remove('show')} )
}
