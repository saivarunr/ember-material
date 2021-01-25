import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ButtonComponent extends Component {
    get isElevated() {
        return (this.args?.elevated ?? true) && this.variant == "contained";
    }

    get variant() {
        return this.args?.variant ?? "contained";
    }

    @action
    onClick() {
        console.log(event);
        if (this.args?.onClick) {
            this.args.onClick(event);
        }
    }
}
