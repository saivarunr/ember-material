import Component from '@glimmer/component';

export default class ButtonComponent extends Component {
    get isElevated() {
        return (this.args?.elevated ?? true) && this.variant != "text";
    }

    get variant() {
        return this.args?.variant ?? "contained";
    }
}
