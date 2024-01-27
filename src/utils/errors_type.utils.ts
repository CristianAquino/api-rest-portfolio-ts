import { errorType } from "../types";

function validationError(type: string) {
  const dataError: errorType = {
    NoContentError: {
      code: 204,
    },
    InvalidIdError: {
      code: 400,
    },
    UnauthorizedError: {
      code: 401,
    },
    ResendEmailError: {
      code: 403,
    },
    NotFoundError: {
      code: 404,
    },
    InvalidTokenError: {
      code: 498,
    },
    JsonWebTokenError: {
      code: 498,
    },
    TokenExpiredError: {
      code: 498,
    },
    CreatedError: {
      code: 500,
    },
    UpdatedError: {
      code: 500,
    },
    ConextionDBError: {
      code: 503,
    },
  };
  return dataError[type];
}

export { validationError };
