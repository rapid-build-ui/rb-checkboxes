/****************
 * RB-CHECKBOXES
 ****************/
import { props, html, RbBase } from '../../rb-base/scripts/rb-base.js';
import FormControl from '../../form-control/scripts/form-control.js';
import '../../rb-checkbox/scripts/rb-checkbox.js';
import template from '../views/rb-checkboxes.html';

export class RbCheckboxes extends FormControl(RbBase()) {
	/* Lifecycle
	 ************/
	viewReady() { // :void
		super.viewReady && super.viewReady();
		// this.rb.elms.focusElm = this.shadowRoot.querySelector('input');
		// this.rb.elms.formControl = this.rb.elms.focusElm
	}

	/* Properties
	 *************/
	static get props() { // :object
		return {
			...super.props,
			kind: props.string
		};
	}

	/* Template
	 ***********/
	render({ props }) { // :string
		return html template;
	}
}

customElements.define('rb-checkboxes', RbCheckboxes);
