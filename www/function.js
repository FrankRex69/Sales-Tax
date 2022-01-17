// Initialition 
let priceTot=0;
let numProduct = 1;
let product = '';
let price = 0;
let salesTax = 0;
let importTax = 0;
let salesTaxImport = 0;
let totSalesTaxImport = 0;
let costproduct = 0;
let totCostbasket = 0;
let Prodbasket = [];

// Logic section
function mainLogic(product, price, salesTax, importTax) {    

    // Type data
    price = Number(price);
    salesTax=Number(salesTax);
    importTax=Number(importTax);    

    // Count:
    salesTaxImport = (Math.ceil( (price*(salesTax+importTax)/100)*20 - 0.05 )/20);  
    costproduct = round(price + salesTaxImport); 
    
    // Array product buy
    let productBuy = [numProduct, product, salesTaxImport, costproduct];   
     
    if (Prodbasket.length == 0){        
        // ---------------------
        // THE ARRAY IS EMPTY
        // ---------------------        
        // Insert element in array
        Prodbasket.push(productBuy);        
    }
    else   
    {
        // IF THE ARRAY IS NOT EMPTY.
        // Check if there is already the item to buy now.
        if(arrayLookup(product,Prodbasket,1,0)==0){            
           
            // -------------------------------------------------------------------
            // THE ARRAY IS NOT EMPTY ==> PRODUCT IS NOT PRESENT IN TO BASKET
            // -------------------------------------------------------------------

            // Initialition numProduct
            numProduct=1;

            // The element is not present and so we insert it into the array
            let productBuy = [numProduct, product, salesTaxImport, costproduct];    
            Prodbasket.push(productBuy);
            
            document.getElementById('myBasket').innerHTML="";

        }
        else
        {           
            // ---------------------------------------------------------------------
            // THE ARRAY IS NOT EMPTY ==> PRODUCT IS ALREADY PRESENT IN TO BASKET
            // ---------------------------------------------------------------------
            
            for (let i = 0; i < Prodbasket.length; i++) {
               
                let pos = Prodbasket[i][1].indexOf(product);
                
                if(pos!=-1){
                    document.getElementById('myBasket').innerHTML="";
                   
                    // The element is already present in the array and so we update its values.                   
                    // Add item already present in the cart.
                    numProductTot=Prodbasket[i][0]+1;                   
                    priceTot=Prodbasket[i][2]+salesTaxImport;
                    costproductTot=Prodbasket[i][3]+costproduct;                   
                    
                    Prodbasket[i][0]=numProductTot;
                    Prodbasket[i][2]=salesTaxImport;  
                    Prodbasket[i][3]=costproductTot;                   
                   
                    break;
                }                
            }
        }        
    }

    // Basket list
    ul = document.createElement('ul');
    document.getElementById('myBasket').appendChild(ul);
    Prodbasket.forEach(function (item) {
        let li = document.createElement('li');
        ul.appendChild(li);    
        li.innerHTML += item[0] + " " + item[1] + ": " + item[3];
    });

    // show the Sales Taxes & Total
    document.getElementById("totTax").innerHTML="SALES TAXES: " + totTax(Prodbasket);
    document.getElementById("totBasket").innerHTML="TOTAL: " + totCost(Prodbasket);

    // show the buttonEmpty
    document.getElementById("buttonEmpty").style.display = "block";

}

// Total tax for basket
function totTax(arrayXTax){ 
       
    let totTaxArray = 0;    
    for (let index = 0; index < arrayXTax.length; index++) {        
        const n = arrayXTax[index][0];
        totTaxArray=round(totTaxArray + n*arrayXTax[index][2]);                     
    }
    return totTaxArray; 
}

// Total cost for basket
function totCost(arrayXCost){        
    let totCostArray = 0;    
    for (let index = 0; index < arrayXCost.length; index++) {              
        totCostArray=round(totCostArray + arrayXCost[index][3]);                       
    }
    return totCostArray; 
}

// Round
function round(num) {       
    return Number(num.toFixed(2));
} 

// Empty basket
function empty(){
    product = '';
    price = 0;
    salesTax = 0;
    importTax = 0;
    salesTaxImport = 0;
    totSalesTaxImport = 0;
    costproduct = 0;
    totCostbasket = 0;
    Prodbasket = [];
    document.getElementById("buttonEmpty").style.display = "none";
    document.getElementById("myBasket").innerHTML='';
    document.getElementById("totTax").innerHTML='';
    document.getElementById("totBasket").innerHTML='';
}

// Check a element in array
function arrayLookup(searchValue,array,searchIndex,returnIndex) 
{
  var returnVal = 0;
  var i;
  for(i=0; i<array.length; i++)
  {
    if(array[i][searchIndex]==searchValue)
    {
      returnVal = array[i][returnIndex];
      break;
    }
  }  
  return returnVal;
}