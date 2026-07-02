class User {

  protected _firstName: string = '';
  private _lastName: string = '';

  set firstName(name: string) {
    if (name.trim() === '') throw new Error('Invalid name naja');
    
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim() === '') { 
      throw new Error('Invalid last_name naja');
    }
    this._lastName = name;
  }

  // getter เป็น method ที่ใช้สำหรับเข้าถึง property ของ class โดยไม่ต้องเรียกใช้ method แบบปกติ
  // เราใช้ getter เพราะ 
  // 1. อ่านง่ายเหมือน property
  // 2. ซ่อน logic ไว้ข้างในได้
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // static property และ method เป็น property และ method ที่สามารถเรียกใช้ได้โดยไม่ต้องสร้าง instance ของ class นั้น ๆ
  static eid = 'USER'

  static greet() {
    console.log('Hello from User class');
  }
}

// User.firstName = 'Wichan';

const me = new User();
me.firstName = 'Wichan';
me.lastName = '';

console.log(me.fullName); // Wichan Sangwondee
class Employee extends User {
  constructor(public jobTitle : string) {
    super();
    // เป็น method ที่ใช้เรียก class แม่ก่อน
    // กฎสำคัญ ถ้า class ลูกมี constructor ของตัวเอง และ extends class แม่ ต้องเรียก super() ก่อนใช้
  }

  work () {
    console.log(this._firstName);
  }
}

abstract class UIElement {
  constructor(public identifier: string) {}
  clone (targetLocation: string) {
    // logic to Duplicate UI Element
  }
}

class SideDrawerElement extends UIElement {
  constructor(public identifier: string, public position: 'left' | 'right') {
    super(identifier);
  }
}

