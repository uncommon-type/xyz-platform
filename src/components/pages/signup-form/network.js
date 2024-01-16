const sendData = async (data) => {
  console.log(`-- posting ${data} --`);
};

const sendDataWithDelay = async (data, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      sendData(data);
      resolve();
    }, delay);
  });

export default sendDataWithDelay;
