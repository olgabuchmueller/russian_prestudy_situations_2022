function Pick(set,n) {
    assert(set instanceof Object, "First argument of pick cannot be a plain string" );
    n = Number(n);
    if (isNaN(n) || n<0) 
        n = 0;
    this.args = [set];
    this.runSet = null;
    set.remainingSet = null;
    this.run = arrays => {
        if (this.runSet!==null) return this.runSet;
        const newArray = [];
        if (set.remainingSet===null) {
            if (set.runSet instanceof Array) set.remainingSet = [...set.runSet];
            else set.remainingSet = arrays[0];
        }
        for (let i = 0; i < n && set.remainingSet.length; i++)
            newArray.push( set.remainingSet.shift() );
        this.runSet = [...newArray];
        return newArray;
    }
}
function pick(set, n) { return new Pick(set,n); }