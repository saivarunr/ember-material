import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RippleGeneratorComponent extends Component {
    @tracked
    state = {
        positions: []
    }


    @action
    onClick(event) {
        console.log("Clicked", event);
        if (this.args?.onClick) {
            this.args.onClick(...arguments);
        }
    }
}
