//# HTTP response status codes

//* 1 Informational responses (100–199)
//* 2 Successful responses (200–299)
//* 3 Redirection messages (300–399)
//* 4 Client error responses (400–499)
//* 5 Server error responses (500–599)

//$ To read more

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

//# Fetch

// fetch("https://catfact.ninja/fact")
//   .then((res) => {
//     if (res.status === 200) {
//       return res.json();
//     } else {
//       throw new Error("not found...");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//# Async && Await

// const getData = async () => {
//     const response = await fetch("https://catfact.ninja/fact");
//     if (response.status === 200) {
//         return await response.json();
//     } else {
//         throw new Error('not found....')
//     }
// };

// getData()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err.message);
//     })

//# try && catch

// const getData = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todo/1");
//         console.log(response);
//         const data = await response.json()
//         console.log(data);
//         // if (response.status === 200) {
//         //     return await response.json();
//         // } else {
//         //     throw new Error('not found...')
//         // }
//     } catch (error) {
//         throw new Error('not found...', error)
//     }
// };

// getData()

// fetch("https://apitester.ir/api/Categories")
//   .then((data) => data.json())
//     .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const fetchUsers = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
//   console.log(res);
//   const data = await res.json();
// };

// fetchUsers()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const fetchUsers = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     console.log(res);
//     const data = await res.json();
//     console.log(data);
//   } catch (jasemError) {
//     console.log("something went wrong", jasemError);
//   }
// };

// fetchUsers()
