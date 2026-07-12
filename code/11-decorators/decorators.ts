
// class decorator
function logger<T extends new (...args: any[]) => any> (target: T, ctx: any) {
  // Decorator function ต้องมี parameter 2 ตัว 
  // คือ target และ ctx (Decorator context)
  console.log('Logger decorator');
  console.log(target);
  console.log(ctx);
  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log('Creating instance of Person');
      console.log(`Name: ${this.name}`);
    }
  };
}

// method decorator
function autobind(target: (...args: any[]) => any, ctx: ClassMethodDecoratorContext) {
  ctx.addInitializer(function(this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  })

  return function(this:any) {
    console.log(`Executing original method`);
    target.apply(this);
  }
}
// field decorator
// field decorator จะมี parameter 2 ตัว คือ target และ ctx (Decorator context)
// target จะเป็น undefined สำหรับ field decorator เพราะ field decorator 
// ไม่สามารถเข้าถึง instance ของ class ได้

function replacer<T>(initValue: T) {
  return function replacerDecorator(target: undefined, ctx: ClassFieldDecoratorContext) {
    console.log(target);
    console.log(ctx);
    
    return (initialValue: any) => {
      console.log(initialValue);
      return initValue
    }
  }
}



@logger
// กำหนด Decorator ให้กับ class Person
class Person {
  @replacer('')
  name = 'AA';

  @autobind
  greet() {
    console.log(`Hi i am ${this.name}`);
  }
}

const person = new Person();
const greet = person.greet;
greet();

console.log(person);