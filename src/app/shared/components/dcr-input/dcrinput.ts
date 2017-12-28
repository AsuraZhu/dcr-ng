export  class DcrInput {
  constructor(
    imgsrc: string,
    type: string,
    value: string,
    placeholder: string
  ) {
    this.imgsrc = imgsrc;
    this.type = type;
    this.value = value;
    this.placeholder = placeholder;
  }
  public imgsrc: string; // 输入框 图标
  public type: string;   // 类型 比如 text password
  public value: string;  //
  public placeholder: string;
}
