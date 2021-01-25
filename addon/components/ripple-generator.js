import Component from '@glimmer/component';
import { action } from '@ember/object';
// import ripplet from 'ripplet.js';

export default class RippleGeneratorComponent extends Component {
    @action
    onClick(event) {
        ripplet(event);
        if (this.args?.onClick) {
            this.args.onClick(...arguments);
        }
    }
}
