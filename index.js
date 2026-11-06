var compress = function(chars) {
    let l=0, r=0;
    while(r<chars.length){
        let cc =chars[r];
        let c=0;
        while(r<chars.length && chars[r] === cc){
            c++;
            r++;
        }
        chars[l] = cc;
        l++;
        if(c>1){
            let cs=c.toString();
            for(let i=0; i<cs.length; i++){
                chars[l] =cs[i];
                l++;
            }
        }
    }
    return l;
};