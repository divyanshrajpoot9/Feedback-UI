const card = document.getElementsByClassName("card")[0];
const reviewContainer = document.querySelectorAll(".review-container");
const btn = document.getElementById("btn");
const rating = document.querySelectorAll(".rating");
let selectedRating = "";
reviewContainer.forEach((ele)=>{
    // console.log(ele.children);
    ele.addEventListener("click", (e)=>{
        removeActive(); // function which will remove class
      selectedRating =  e.target.innerText || e.target.parentNode.innerText;
        e.target.classList.add("active");
        e.target.parentNode.classList.add("active");
    });
})

btn.addEventListener("click", ()=>{
    if(selectedRating !== ""){
        card.innerHTML = `
        <h2>Thank you!</h2>
        <h3 class="heading">Feedback: ${selectedRating}</h3>
        <p style="text-align:center;">We'll use your feedback to improve our customer support.</p>
        `
    }
})

function removeActive(){
    rating.forEach((ele)=>{
        // console.log(ele);
        ele.classList.remove("active");
        // console.log(ele);
    })
}