export class CreatedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CreatedError";
  }
}

export class ConextionDBError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConextionDBError";
  }
}
