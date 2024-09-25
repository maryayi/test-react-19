const promise = Promise.resolve('Coming from server');

const Server2 = async () => {
  const data = await promise;
  return <div>{data}</div>;
};

export default Server2;
