function calculate(event){
    event.preventDefault();
    const name=event.target.name.value;
    const price=parseFloat(event.target.price.value);
    const quantity=parseFloat(event.target.quantity.value);
    const productObj={
        name:name,
        price:price,
        quantity:quantity
    };
    axios.post("https://crudcrud.com/api/d79a2b694a25491fa0c54aec3c86acfd/veg_Shop",productObj)
    .then((res)=>{
        displayValueOnScreen(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
    document.getElementById("name").value="";
    document.getElementById("price").value="";
    document.getElementById("quantity").value="";
}
window.addEventListener("DOMContentLoaded",()=>{
    // const List=document.querySelector("ul");
    // List.innerHTML="";
    axios.get("https://crudcrud.com/api/d79a2b694a25491fa0c54aec3c86acfd/veg_Shop")
    .then((res)=>{
        for(var i=0;i<res.data.length;i++){
            displayValueOnScreen(res.data[i]);
        }
    })
    .catch((err)=>{
        console.log(err);
    })
})

function displayValueOnScreen(userDetails){
    //const List=document.querySelector("ul");
    //const userItem=document.createElement('li');
    //userItem.textContent=`${userDetails.name}       RS: ${userDetails.price}        ${userDetails.quantity}KG  `;
    //List.appendChild(userItem);
    const container = document.getElementById("productContainer");
    const card = document.createElement('div');
    card.className = 'product-card';
    const newbtnEdit=document.createElement("button");
    newbtnEdit.textContent="Edit";
    newbtnEdit.onclick=editbtn();
    const newbtnDelete=document.createElement("button");
    newbtnDelete.textContent="Delete";
    newbtnDelete.onclick=deletebtn();
    card.innerHTML = `${userDetails.name}  \u00A0\u00A0\u00A0\u00A0 RS : ${userDetails.price} \u00A0\u00A0\u00A0\u00A0  ${userDetails.quantity}KG \u00A0\u00A0\u00A0\u00A0 ${newbtnEdit} \u00A0\u00A0\u00A0\u00A0 ${newbtnDelete}`;
    container.appendChild(card);
}
