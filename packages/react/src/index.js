import webtracing from 'web-tracing';

const fun = () => {
  const obj = {
    name: 'cheng',
    name2: 'cheng',
    name3: 'cheng',
    name4: 'cheng',
  }
  console.log('webtracing', webtracing.default());
  console.log({ ...obj });
}

fun()

export default fun
export { fun }