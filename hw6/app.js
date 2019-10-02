function greet(firstName = 'John', lastName = 'Doe'){
    //if(typeof firstName === 'undefined'){firstName = "John"}
    //if (typeof lastName === 'undefined'){lastName = 'Doe'}
    //console.log('hello');
    return 'Hello' + firstName + ' ' + lastName;
}

//console.log(greet());

const square = function(x = 3){
    return x*x;
};

// console.log(square());

(function(){
    console.log('IIFE Ran..');

})();

(function(name){
    console.log('Hello' + name);

})('Brad');

const todo = {
    add:function(){
        console.log('add todo..');
    },
    edit: function(id){
        console.log(`delete todo ${id}`);
    }
}
 todo.add();
 todo.edit(22);
 todo.delete();