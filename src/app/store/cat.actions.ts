export class SetBreed {
  static readonly type = '[Cat] Set Breed';
  constructor(public breed: string) {}
}

export class SetLimit {
  static readonly type = '[Cat] Set Limit';
  constructor(public limit: number) {}
}
