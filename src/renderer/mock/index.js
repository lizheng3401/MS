const Mock = require('mockjs');
const Random = Mock.Random;

const bloglist = () => {
  const blogs = [];
  for (let i = 0; i < 4; i += 1) {
    const temp = {
      username: Random.cname(),
      avator: Random.dataImage('40x40'),
      createdTime: Random.datetime(),
      text: Random.word(),
    };

    blogs.push(temp);
  }
  return {
    blogs,
  };
};

Mock.mock('api/blog/list', 'get', bloglist);
