let products=[
    ["book",12.49,0,0],
    ["music CD",14.99,10,0],
    ["chocolate bar",0.85,0,0],
    ["imported box of chocolates",10.00,0,5],
    ["imported bottle of perfume (type 1)",47.50,10,5],
    ["imported bottle of perfume (type 2)",27.99,10,5],
    ["bottle of perfume",18.99,10,0],
    ["packet of headache pills",9.75,0,0],
    ["box of imported chocolates",11.25,0,5]
]

ul = document.createElement('ul');
document.getElementById('product').appendChild(ul);

ul = document.createElement('ul');
document.getElementById('product').appendChild(ul);

products.forEach(function (item) { 

    // Product list
    let li = document.createElement('li');
    ul.appendChild(li);     
    li.innerHTML += item[0].toUpperCase() + " - Price: " + item[1] + " - Sales tax: " + item[2] + " - Import tax: " + item[3];

    // Basket button
    let btn = document.createElement("button");
    btn.className = "btn btn-warning btn-sm";    
    btn.onclick = function() { mainLogic(item[0],item[1],item[2],item[3]); };
    ul.appendChild(btn);
    btn.innerHTML += "Add in to basket";   
    
});

