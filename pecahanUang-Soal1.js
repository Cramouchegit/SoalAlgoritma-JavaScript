function lembarPecahan(num) {
    const mataUang = [
        100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100,
    ];
    let kembalian = {}
    for (i in mataUang) {
        if (num + 99 >= mataUang[i]){
            const lembar = Math.floor((num + 99)/mataUang[i])
            num = num - mataUang[i] * lembar
            kembalian[`Rp.${mataUang[i]}`] = lembar
        }
    }
    console.log(kembalian)
}
lembarPecahan(150490)
lembarPecahan(150400)
lembarPecahan(70)