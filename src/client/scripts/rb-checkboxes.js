/****************
 * RB-CHECKBOXES
 ****************/
import { RbBase, props, html } from '../../rb-base/scripts/rb-base.js';
import FormControl             from '../../form-control/scripts/form-control.js';
import Type                    from '../../rb-base/scripts/public/services/type.js';
import template                from '../views/rb-checkboxes.html';
import '../../rb-checkbox/scripts/rb-checkbox.js';
import '../../rb-popover/scripts/rb-popover.js';

export class RbCheckboxes extends FormControl(RbBase()) {
	/* Lifecycle
	 ************/
	viewReady() { // :void
		super.viewReady && super.viewReady();
		Object.assign(this.rb.elms, {
			focusElm:    this.shadowRoot.querySelector('rb-checkbox'),
			formControl: this.shadowRoot.querySelector('input')
		});
		this._initSlotStates(); // see rb-base: private/mixins/slot.js
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
			data: Object.assign({}, props.array, {
				deserialize(val) { // :array
					val = Type.is.string(val) ? val.trim() : val;
					return /^\[[^]*\]$/.test(val) ? JSON.parse(val) : [];
				}
			}),
			value: Object.assign({}, props.array, {
				deserialize(val) { // :array
					val = Type.is.string(val) ? val.trim() : val;
					return /^\[[^]*\]$/.test(val) ? JSON.parse(val) : [];
				}
			})
		};
	}

	/* Observer
	 ***********/
	updating(prevProps) { // :void
		// if (prevProps.value === this.value) return; // TODO: investigate
		this.rb.events.emit(this, 'value-changed', {
			detail: { value: this.value }
		});
	}

	/* Event Handlers
	 *****************/
	async _onchange(item, index, evt) { // :void
		const checked = evt.target.value;
		if (checked) {
			if (!this.value.length)
				this.value = [].concat(item);
			else
				this.value.splice(index, 0, item);
			// console.log('ADD:', this.value);
		} else {
			const _index = this.value.indexOf(item);
			this.value.splice(_index, 1);
			// console.log('REMOVE:', this.value);
		}
		this.triggerUpdate();
		await this.validate();
	}

	/* Template
	 ***********/
	render({ props, state }) { // :string
		return html template;
	}
}

customElements.define('rb-checkboxes', RbCheckboxes);
