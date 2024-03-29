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

export class UpdatedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UpdatedError";
  }
}

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

export class InvalidTokenError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidTokenError";
  }
}

export class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnauthorizedError";
  }
}

export class ResendEmailError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ResendEmailError";
  }
}

export class NoContentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NoContentError";
  }
}

export class InvalidIdError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidIdError";
  }
}
