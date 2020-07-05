// Uma factory retorna um novo objeto
module.exports = () => {
    return {
        inc() {
            this.valor++
        }
    }
}