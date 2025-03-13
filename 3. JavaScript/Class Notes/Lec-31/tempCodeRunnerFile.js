async function call1() {
  const [data1, data2] = await Promise.all([test1(), test2()]);
  console.log(data1);
  console.log(data2);
}

call1();
