import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static classes = ["border", "borderPrimary"]
    static targets = ["hideable", "highlightable"]

    showTargets() {
        this.hideableTargets.forEach(el => {
            el.hidden = false
        });
    }

    hideTargets() {
        this.hideableTargets.forEach(el => {
            el.hidden = true
        });
    }

    toggleTargets() {
        this.hideableTargets.forEach(el => {
            el.hidden = !el.hidden
        });
    }

    highlightTargets() {
        this.highlightableTargets.forEach(el => {
            el.parentElement.classList.toggle(this.borderClass, el.checked);
            el.parentElement.classList.toggle(this.borderPrimaryClass, el.checked);
        });
    }

}
