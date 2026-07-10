type ReadPermission = 'on-read' | 'read';
type WritePermission = 'on-write' | 'write';

type FilePermission = `${ReadPermission} | ${WritePermission}`;

type DataFile = {
  data:string;
  permission: FilePermission;
}

type DataFileEventNames = `${ keyof DataFile }-Changed`;

type DataFileEvent = {
  [Key in DataFileEventNames]: () => void;
}