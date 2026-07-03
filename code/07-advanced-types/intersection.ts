type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
}

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

// intersection type คือการรวม type หลาย ๆ ตัวเข้าด้วยกัน โดย object ที่เป็น intersection type จะต้องมี property ของทุก ๆ type ที่รวมกัน
type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;