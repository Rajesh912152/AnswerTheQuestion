let formEl=document.getElementById('formId');
let hydEl=document.getElementById('hyd');
let chennaiEl=document.getElementById('chennai');
let delhiEl=document.getElementById('delhi')
let mumbaiEl=document.getElementById("mumbai")

let errormsgEl=document.getElementById('errorMsg')

let answer="Delhi";
let seleted=null

hydEl.addEventListener('change',function(event){
    seleted=event.target.value
})
chennaiEl.addEventListener('change',function(event){
    seleted=event.target.value
})
delhiEl.addEventListener('change',function(event){
    seleted=event.target.value
})
mumbaiEl.addEventListener('change',function(event){
    seleted=event.target.value
})


formEl.addEventListener('submit',function(event){
    event.preventDefault()
    if(seleted===answer){
        errormsgEl.textContent="Correct Answer"
        errormsgEl.style.color="#2b9a40";
    }
    else if(seleted===null){
        errormsgEl.textContent="Please select the answer"
        errormsgEl.style.color="#dc3545";
    }
    else{
        errormsgEl.textContent="Wrong Answer"
        errormsgEl.style.color="#dc3545";
    }
})