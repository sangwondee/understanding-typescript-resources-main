 interface Authenticatable {
  email : string;
  password : string;

  login() : void;
  logout() :void;
}

interface AuthenticatableAdmin extends Authenticatable {
  role : 'admin' | 'superadmin';
}

class AuthenticatableUser implements Authenticatable {
  // implements เอาวิธีการตามแบบของคลอสที่เราใช้งานต้องครบทุกอันและสามารถเพิ่ม 
  // ข้อดีของ implements คือมันทำให้ class ถูกตรวจว่า “ทำตาม interface ครบไหม” ตั้งแต่ตอนเขียนโค้ดครับ
    // 1. กันลืม method/property
    // 2. ทำให้โค้ดอ่านง่าย
    // 3. ทำให้หลาย class ใช้มาตรฐานเดียวกัน
      //   class Admin implements Authenticatable {
        //   login() {}
        //   logout() {}
        // }
      // class Customer implements Authenticatable {
      //   login() {}
      //   logout() {}
      // }
    // 4. ทำให้ function รับ object ได้หลายแบบ ไม่ต้องสนว่าเป็น Admin, Customer, หรือ class อะไร ขอแค่ทำตาม Authenticatable
      //     function startSession(user: Authenticatable) {
      //   user.login();
      // }
    // 5. เปลี่ยน implementation ได้ง่าย
      // วันนี้ login ด้วย password:
      // class PasswordUser implements Authenticatable {
      //   login() {}
      //   logout() {}
      // }
      // วันหลังมี login ด้วย Google:
      // class GoogleUser implements Authenticatable {
      //   login() {}
      //   logout() {}
      // }

  constructor(
    public username : string, 
    public email : string, 
    public password: string) 
  {}
  login() {
    // ...
  }

  logout() {
    // ...
  }
}

function authenticate(user: Authenticatable) {
  user.login()
}

// interface ใน TypeScript คือ “แบบแปลนของรูปทรงข้อมูล” ใช้บอกว่า object, class, หรือ function ควรมี property/method อะไรบ้าง และแต่ละตัวเป็น type อะไร

let user : Authenticatable

user = {
  email: 'test@mail.com',
  password: 'abc1',
  login() {
    // reach out to a database, check credentials, create a session
  },
  logout() {
    // clear the session
  }
}