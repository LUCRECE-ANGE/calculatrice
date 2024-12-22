const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode=touches.map(touche => touche.dataset.key);
const ecran=document.querySelectorAll('.ecran');
document.addEventListener('keydown',(e) =>{
    const valeur= e.KeyCode.toString();
    calculer(valeur)
})
document.addEventListener('click',(e)=>{
    const valeur = e.target.dataset.key;
    calculer(valeur)
   
})

const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)){
        switch(valeur){
            case '8':
                ecran.textContent="";
                break;
            case '13':
                const calcul=eval(ecran.textContent);
                ecran.textContent=calcul;
                break;
            default:
                const indexkeycode =listeKeycode.indexOf(valeur);
                const touche=touches[indexkeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}