export function convertToMonetary (value: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency'
  })

  return formatter.format(value)
}
