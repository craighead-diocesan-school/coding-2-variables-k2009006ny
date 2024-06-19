// ####################################
// #### ----- GST Calculator ----- ####
// ####################################

function gstCalculator() {
  alert('The price with GST the price and 15%.')

  let price = prompt('What is the cost before GST?')
  gst = 1.15

  result = price * gst

  alert('The cost with GST is $' + result)
}
