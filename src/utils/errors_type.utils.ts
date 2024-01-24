import { errorType } from "../types";

function validationError(type: string) {
  const dataError: errorType = {
    CreatedError: {
      code: 500,
    },
    ConextionDBError: {
      code: 503,
    },
  };
  return dataError[type];
}

export { validationError };
