import '../../polymer/polymer.js';
import { IronValidatableBehavior } from '../iron-validatable-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: inline-block;
      }
      input {
        padding: 0.4em;
        font-size: 16px;
        margin: 5px;
        color: inherit;
      }
    </style>
    <input id="input">
`,

  is: 'validatable-input',

  properties: {
    invalid: {
      reflectToAttribute: true,
      type: Boolean,
      value: false
    }
  },

  behaviors: [
    IronValidatableBehavior
  ],

  listeners: {
    'input': '_onInput'
  },

  _onInput: function() {
    this.invalid = !this.validate(this.$.input.value);
  }
});
