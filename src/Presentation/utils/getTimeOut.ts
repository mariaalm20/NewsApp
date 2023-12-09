export const timeOut = async (value: any) =>
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, 1000);
  });
