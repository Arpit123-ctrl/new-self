let url="https://quote-garden.onrender.com/api/v3/quotes";
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let ans=await axios.get(url);

  console.log(ans.data);
});