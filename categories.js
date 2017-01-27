const categories = require('./categories.json').models
const _ = require('lodash')

const result = _(categories)
  .flatMap((cat) =>
    _.map(cat.subcategories, (sub) => ({
      cat: cat.title,
      sub: sub.title
    }))
  )
  .value()

console.log(result);
