// เอาไว้ check type ของตัวแปรที่เราไม่รู้จัก หรือไม่แน่ใจว่าเป็นอะไร ปลอดภัยกว่า any เพราะเราต้องเช็คก่อนว่าเป็น type อะไร แล้วค่อยใช้งาน
function process(val: unknown) {
  if (
    typeof val === 'object' &&
    !!val &&
    'log' in val &&
    typeof val.log === 'function'
  ) {
    val.log();
  }
}
