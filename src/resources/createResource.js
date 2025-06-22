export const createResource = (asyncFn) => {
  let status = "pending";
  let result;
  console.log("creating resource");
  const suspense = asyncFn.then(
    (res) => {
      status = "success";
      result = res;
      console.log("got result", result);
    },
    (err) => {
      status = "fail";
      result = err;
    }
  );
  return {
    read: () => {
      if (status === "pending") throw suspense;
      if (status === "fail") throw result;
      return result;
    },
  };
};
