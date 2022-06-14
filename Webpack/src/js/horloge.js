import config from './config.json5';
import { format } from 'date-fns';
import css from '../css/horloge.module.css';

export class Horloge {
  /**
   * @constructor
   * @param {HTMLElement} container
   */
  constructor(container) {
    this._container = container;
    this._container.className = css.horloge;
  }

  _render() {
    const now = new Date();
    this._container.innerText = format(now, config.timeFormat);
  }

  start() {
    this._render();
    setInterval(this._render.bind(this), 1000);
  }
}
