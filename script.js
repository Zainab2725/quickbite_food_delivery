let location_box=document.getElementById('location_box')
let search_arrow=document.getElementById('search_arrow')
let search_address=document.getElementById('search_address')

search_address.addEventListener("focusin",()=>{
    location_box.style.visibility='visible'
    search_arrow.style.transform="rotate(180deg)"
    location_box.style.opacity='1'
})
search_address.addEventListener("focusout",()=>{
    location_box.style.visibility='hidden'
    search_arrow.style.transform="rotate(0deg)"
    location_box.style.opacity='0'
})

let email_radio=document.getElementById('email')
let phone_radio=document.getElementById('phone')
let email_input=document.getElementById('emails')
let phone_input=document.getElementById('phones')
let email_phone=document.getElementById('email_phone')

phone_radio.addEventListener('click',()=>{
    email_phone.classList.add("show_more")
    email_radio.checked=false;
})
email_radio.addEventListener('click',()=>{
    email_phone.classList.remove("show_more")
    phone_radio.checked=false;
})
let photo=document.getElementsByClassName("photo")
function showdetails(e){
    e.photo.style.display='none'
}