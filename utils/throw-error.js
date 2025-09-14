class DataError extends Error {
  constructor(message, details = {}) {
    super(message);
    this.details = details;
  }
}

class FatalError extends Error {
  constructor(message) {
    super(message);
  }
}

class TimeoutError extends Error {
  constructor(message) {
    super(message);
  }
}

const throwError = {
  data: (message, details = {}) => {
    throw new DataError(message, details);
  },
  fatal: (message) => {
    throw new FatalError(message);
  },
  timeout: (message) => {
    throw new TimeoutError(message);
  },
};

module.exports = {
  throwError,
  DataError,
  FatalError,
  TimeoutError,
};
