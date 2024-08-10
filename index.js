







let countEL = document.getElementById("count-el")

console.log(countEL)


let saveEL = document.getElementById("save-el")

console.log(saveEL)

let count = 0 

function increment() {

count = count + 1 

countEL.innerText = count 
console.log(count)


}





function reset() {

count = 0 

countEL.innerText = count 
console.log(count)

location.reload()

}


function save() {

   let countStr = count + " - " 

   saveEL.textContent = saveEL.textContent + countStr 

   
   count = 0 

   countEL.innerText = count 

  



}