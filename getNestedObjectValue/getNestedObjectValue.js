const recursiveGet = (obj, keys, depth) => {
  const currKey = keys[0]

  if(depth === 1) {
    return obj[currKey]
  }

  const newKeys = keys.filter(k => k !== keys[0])
  const newDepth = depth - 1

  return recursiveGet(obj[currKey], newKeys, newDepth)
}

const getNestedObjectValue = (path, nestedObject) => {
  const keys = path.split(".")
  const depth = keys.length

  return recursiveGet(nestedObject, keys, depth)
}

module.exports = getNestedObjectValue
