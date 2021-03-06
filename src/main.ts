import {Aurelia} from 'aurelia-framework';
import * as environment from '../aurelia_project/config/environment.json';
import {PLATFORM} from 'aurelia-pal';
import './../static/style.scss';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
