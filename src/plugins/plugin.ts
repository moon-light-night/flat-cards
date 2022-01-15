import Vue from 'vue'

Vue.filter('pluralize', (number: number, form: string) => {
  if (number % 10 === 1 && number % 100 !== 11) {
    return `${number} ${form[0]}`
  } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
    return `${number} ${form[1]}`
  }
  return `${number} ${form[2]}`
})
