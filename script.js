var sp = document.getElementsByTagName("span");
var btn_start = document.getElementById("Start");
var btn_stop = document.getElementById("Stop");
var t;
var ms = 0, s = 0, mn =0, h = 0;

function Start(){
    t = setInterval(update_chrono,100);
    btn_start.disabled = true;
}

function update_chrono(){
    ms+=1;
    if(ms == 10){
        ms = 1;
        s+=1;
    }
    if(s == 60){
        s = 0;
        mn+=1;
    }
    if(mn == 60){
        mn = 0;
        h+=1;
    }
    sp[3].innerHTML = ms + "ms" ;
    sp[2].innerHTML = s + "s  ";
    sp[1].innerHTML = mn + "mn  " ;
    sp[0].innerHTML = h +"h ";

}

function Stop() {
    clearInterval(t);
    btn_start.disabled = false;
}

function Reset() {
    ms = 0;
    s = 0;
    mn = 0;
    h = 0;

    sp[3].innerHTML = ms + "ms" ;
    sp[2].innerHTML = s + "s  ";
    sp[1].innerHTML = mn + "mn  " ;
    sp[0].innerHTML = h +"h ";
}
