const mixinMethods = {
  methods: {
    formatDateStrTime (time) {
      const date = new Date(time)
      return `${(date.getMonth() + 1).toString().padStart(2, '0')}月${date
        .getDate()
        .toString()
        .padStart(2, '0')}日 ${date
        .getHours()
        .toString()
        .padStart(2, '0')}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}`
    }
  }
}
export { mixinMethods }
