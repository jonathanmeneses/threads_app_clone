import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    maxLength = 280
    static targets = ["input", "counter"]

    connect() {
        this.updateCounter()
        console.log('Hello world')
    }

    updateCounter() {

        const remaining = this.maxLength - this.inputTarget.value.length
        this.counterTarget.textContent = `${remaining} characters remaining`
        console.log('Updated!')

        if (remaining < 50) {
            this.counterTarget.classList.add('warning')
        } else {
            this.counterTarget.classList.remove('warning')
        }

        if (remaining < 0) {
            this.counterTarget.classList.add('error')
        } else {
            this.counterTarget.classList.remove('error')
        }
    }

}
