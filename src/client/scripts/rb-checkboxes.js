/****************
 * RB-CHECKBOXES
 ****************/
import { props, html, RbBase } from '../../rb-base/scripts/rb-base.js';
import FormControl from '../../form-control/scripts/form-control.js';
import Type from '../../rb-base/scripts/type-service.js';
import '../../rb-checkbox/scripts/rb-checkbox.js';
import template from '../views/rb-checkboxes.html';

export class RbCheckboxes extends FormControl(RbBase()) {
	/* Lifecycle
	 ************/
	viewReady() { // :void
		super.viewReady && super.viewReady();
		Object.assign(this.rb.elms, {
			focusElm:    this.shadowRoot.querySelector('rb-checkbox'),
			formControl: this.shadowRoot.querySelector('input')
		});
	}

	/* Properties
	 *************/
	static get props() { // :object
		return {
			...super.props,
			horizontal: props.boolean,
			inline: props.boolean,
			label: props.string, // checkboxes label
			labelKey: props.string, // checkbox label
			right: props.boolean,
			stacked: props.boolean, // TODO: change default to unstacked
			subtext: props.string,
			toggle: props.boolean,
			value: props.array,
			data: Object.assign({}, props.array, {
				deserialize(val) { // :array
					if (Type.is.array(val)) return val;
					if (!Type.is.string(val)) return val;
					val = val.trim();
					if (/^\[[^]*\]$/.test(val)) return JSON.parse(val);
					return val;
				}
			}),
		};
	}

	/* Event Handlers
	 *****************/
	_onclick(item, evt) { // :void (TODO: fix from firing twice)
		console.log(item);
	}

	/* Template
	 ***********/
	render({ props }) { // :string
		return html template;
	}
}

customElements.define('rb-checkboxes', RbCheckboxes);
