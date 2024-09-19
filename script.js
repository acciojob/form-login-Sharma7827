let fname = document.querySelector(".fname")
let lname = document.querySelector(".lname")
let btn1 = document.querySelector(".btn")

btn.addEventListener("click" , getFormvalue)

function getFormvalue(e) {
	e.preventDefault()
	let name1 = fname.value
	let name2 = lname.value

	alert(`${name1} + ${name2}`)

	
   

}
