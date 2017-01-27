const _ = require('lodash')

const obj = {
  name: 'sirguys',
  email: 'sirguys@gmail.com'
}

console.log(obj)

// newObj ต้องใช้ babel แปลง
const newObj = {
  ...obj,
  id: 10
}

const newObjLodash = _.extend({}, obj, { id: 10 })

console.log(newObjLodash);
