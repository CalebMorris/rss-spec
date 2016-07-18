export function missingRequiredDataError(content: any) {
  return new Error(`Missing required data to create a ${this.contructor.name}:[${JSON.stringify(content || this)}]`);
}

export default class ContentChild<T> {
  content: T;

  constructor(content: T) {
    this.content = content;

    if (typeof content === 'undefined') {
      throw missingRequiredDataError.call(this);
    }
  }
}
