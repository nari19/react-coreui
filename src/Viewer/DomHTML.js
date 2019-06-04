import React, { PureComponent } from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-webpack-loader-syntax
import gtCss from '!!raw-loader!../MDediter/github.scss';

/**
 * DomHTML class
 */
export default class DomHTML extends PureComponent {
  /**
   * @static propTypes
   * @returns {{width: (boolean|*|string), height: (boolean|*|string), htmlCode: *}}
   */
  static get propTypes() {
    return {
      width    : PropTypes.number,
      height   : PropTypes.number,
      htmlCode : PropTypes.string.isRequired
    }
  }

  /**
   * @returns {{width: number, height: number, cssCode: string}}
   */
  static get defaultProps() {
    return {
      width    : 960,
      height   : 1280
    }
  }

  /**
   * @returns {XML}
   */
  render() {
    // cache
    const { width, height } = this.props;
    
    // JSX template
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`} width="100%" >
        <style>{ gtCss }</style>
        <g dangerouslySetInnerHTML={{
          __html: `<foreignObject x="0" y="50" width="100%" height="100%" class="markdown-body">${ReactDOMServer.renderToStaticMarkup(this.renderInnerHtml())}</foreignObject>`
        }} />
      </svg>
    );
  }

  /**
   * @returns {XML}
   */
  renderInnerHtml() {
    // cache
    const { htmlCode } = this.props;

    // JSX template
    return (
      <div xmlns="http://www.w3.org/1999/xhtml" dangerouslySetInnerHTML={{
        __html: htmlCode
      }} />
    );
  }
}