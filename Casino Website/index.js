let show1 = 0;
function show(){
        let menu = document.getElementsByClassName("menu1")[0];
        let menu2 = document.getElementsByClassName("menu2")[0];
        if(show1==0){
            menu2.style.display = "block";
            menu.innerHTML = "close";
            show1 = 1;
        }else{
            menu2.style.display = "none";
            menu.innerHTML = "menu";
            show1 = 0;
        }
    }

let casinoapp = [
    {
        "Name":"K11 Bet",
        "description": "",
        "ReferLinks": "https://k11bet.cn/?id=13110400&currency=INR&type=2",
        "FirstDepositBonus": "",
        "Minimun Deposit": "",
        "images": "https://res.cloudinary.com/dqwsepgzc/image/upload/v1716442982/casino%20image/k11bet_re3smr.jpg",
    },
    {
        "Name":"Daman Bet",
        "description": "",
        "ReferLinks": "https://damanbet.in/?id=36333443&currency=mjo&type=1",
        "FirstDepositBonus": "",
        "Minimun Deposit": "",
        "images": "https://res.cloudinary.com/dqwsepgzc/image/upload/v1716442982/casino%20image/damanbeet_b7ff2u.jpg",
    },
    {
        "Name":"24K Winner",
        "description": "",
        "ReferLinks": "https://24kwinner.in/?id=43049095&currency=INR&type=2",
        "FirstDepositBonus": "",
        "Minimun Deposit": "",
        "images": "https://res.cloudinary.com/dqwsepgzc/image/upload/v1716442974/casino%20image/24kbet_b5kio4.png",
    },
    {
        "Name":"T-20 Win Bet",
        "description": "",
        "ReferLinks": "https://goldsbetvip5.com/?id=878847079&currency=INR&type=2",
        "FirstDepositBonus": "",
        "Minimun Deposit": "",
        "images": "https://res.cloudinary.com/dqwsepgzc/image/upload/v1716442972/casino%20image/t_2win_yaf1di.jpg",
    },
];



for(let i=0;i<casinoapp.length;i++){
    let main1 = document.getElementsByClassName("main1")[0];
    let casinodiv = document.createElement("div");
    let click1 = document.createElement('a');
    let img = document.createElement("img");

    click1.href = casinoapp[i].ReferLinks;
    casinodiv.style.width = "100px";
    casinodiv.style.height = "100px";
    casinodiv.style.display = "inline-block";
    casinodiv.style.margin = "20px";
   
    img.style.width = "100px";
    img.style.height = "100px";
    img.src = casinoapp[i].images;
    
    main1.appendChild(casinodiv);
    casinodiv.append(click1);
    
    click1.append(img);
}
