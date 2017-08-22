import { IronValidatableBehavior } from '../iron-validatable-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <slot></slot>
`,

  is: 'test-validatable',

  behaviors: [
    IronValidatableBehavior
  ]
});
