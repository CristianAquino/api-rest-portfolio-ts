import { errorType } from "../types";

function validationError(type: string) {
  const dataError: errorType = {
    NotFoundError: {
      code: 404,
    },
    InvalidTokenError: {
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
