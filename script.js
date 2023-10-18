function abrir()
{
    var m = document.getElementById("menuprincipal");
    var b = document.getElementById("hamburguer");

    if (m.style.display == "none")
    {
        m.style.display = "block";
        b.innerHTML = "X";
    }
    else
    {
        m.style.display = "none";
        b.innerHTML = "≡";
    }

    
}