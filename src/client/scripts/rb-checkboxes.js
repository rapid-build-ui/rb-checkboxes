/***********
 * RB-CHECKBOXES
 ***********/
import { props, html, RbBase } from '../../rb-base/scripts/rb-base.js';
import template from '../views/rb-checkboxes.html';

export class RbCheckboxes extends RbBase() {
	/* Properties
	 *************/
	static get props() {
		return {
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
