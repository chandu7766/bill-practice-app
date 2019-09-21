function calbill() {
    const Total=document.getElementById("total").value;
    const Rate=document.getElementById("rate").value;
    const Tip= parseFloat(Total)*parseFloat(Rate)/100;
    document.getElementById("tip").innerHTML=Tip;
    const Tax = 5.5/100*parseFloat(Total);
    document.getElementById("tax").innerHTML= Tax;
    const grndtota = parseFloat(Total)+Tip+Tax;
    document.getElementById("grand").innerHTML=grndtota;
}