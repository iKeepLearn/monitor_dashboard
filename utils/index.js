var hash = function(s) {
    /* Simple hash function. */
    var a = 1, c = 0, h, o;
    if (s) {
        a = 0;
        /*jshint plusplus:false bitwise:false*/
        for (h = s.length - 1; h >= 0; h--) {
            o = s.charCodeAt(h);
            a = (a<<6&268435455) + o + (o<<14);
            c = a & 266338304;
            a = c!==0?a^c>>21:a;
        }
    }
    return String(a);
};

export function getColor(address){
    let number = parseInt(hash(address));
    let number16 = number.toString(16)
    if (number16.length >= 6)
        return "#".concat(number16.slice(-6))
    else{
        
        return getColor(address.concat(address))
    }
        
}

export function thousands(num){
    var str = num.toString();
    var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    return str.replace(reg,"$1,");
}