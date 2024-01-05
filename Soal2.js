function twoString (s1, s2) {
    const p1 = s1.length
    const p2 = s2.length
    const selisih = p1 - p2

    if (Math.abs(selisih) > 1) {
        return false
    }
    if (selisih < 0) {
        let index = 0
        for (i in s2){
            if(s2[i] == s1[index]) {
                // console.log(s2[i], s1[index])
                index++
                continue
            } //else {
                //console.log(s2[i], s1[index])
           // }
        }
        return !(p2-index > 1)
    }
    if (selisih > 0) {
        let index = 0
        for (i in s1){
            if(s1[i] == s2[index]) {
                // console.log(s1[i], s2[index])
                index++
                continue
            } //else {
                // console.log(s1[i], s2[index])
           // }
        }
        return !(p1-index > 1)
    }
    if (selisih == 0) {
        let replace = 0
        for (i in s1) {
            if(s2[i] == s1[1]) {
                continue
            }
            replace++
        }
    }
}

console.log(twoString('telcom', 'tel'));
console.log(twoString('telcon', 'telcono'));
console.log(twoString('telcpnop', 'telcono'));
console.log(twoString('telcon', 'telcone'));
