var employee={
    id:1,
    greet:function(){
        //console.log(this.id);
        var seft = this;
        setTimeout(function() {
            console.log(seft.id);
        },1000);
    },

    time :function(){
        setTimeout(() => {
            console.log(this.id);
        }, 1000);
    }
}

employee.greet();
employee.time();