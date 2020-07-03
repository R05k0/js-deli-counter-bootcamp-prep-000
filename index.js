function takeNumber(line, name) {
  line.push(name)
 
  return (`Welcome ${name}. You are number ${line} in line.`)
}
function nowServing(line) {
  if(!line.length) {
    
    return ("There is nobody waiting to be served")
  }
}