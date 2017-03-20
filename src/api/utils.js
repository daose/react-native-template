const verifyResponse = response => (
  response.ok ? response : Promise.reject()
);

const handleError = () => (
  Promise.reject()
);

export { verifyResponse, handleError };
