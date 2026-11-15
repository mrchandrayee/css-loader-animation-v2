const toast=document.getElementById("toast");
let timer;
document.querySelectorAll(".copy").forEach(button=>{
  button.addEventListener("click",async()=>{
    const snippet=button.parentElement.querySelector("code").textContent;
    try{
      await navigator.clipboard.writeText(snippet);
      toast.textContent="CSS copied to clipboard";
    }catch{
      toast.textContent="Clipboard unavailable — select the code manually";
    }
    toast.classList.add("show");
    clearTimeout(timer);
    timer=setTimeout(()=>toast.classList.remove("show"),1800);
  });
});
