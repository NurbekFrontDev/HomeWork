const obj = {
    count: 10,
    doSomethingLater() {
        setTimeout(() => {
            this.count++;
            console.log(this.count);
        }, 1000)
    }
};

obj.doSomethingLater();