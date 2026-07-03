type FileSource = { type: 'file', path: string };
const fileSource: FileSource = { type: 'file', path: '/path/to/file.txt' };

type DBSource = { type: 'db', connectionUrl: string };
const dbSource: DBSource = { type: 'db', connectionUrl: 'some-connection-url' };

type Source = FileSource | DBSource;

function loadData(source: Source) {
  if (source.type === 'file') {
    // Handle file source
    return;
  }

  source.type === 'db'
  // Handle DB source
}

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User('A');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
  // ใช้ instanceof เมื่อต้องเช็กว่า object นี้มาจาก class ไหน โดยเฉพาะ union ของหลาย class, custom error, DOM element, SDK object, หรือ inheritance.  
  if (entity instanceof User) {
    entity.join();
    return;
  }
  entity.scan();
}