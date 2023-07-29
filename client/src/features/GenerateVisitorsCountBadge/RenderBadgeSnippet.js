import * as CopyToClipboard from './assets/CopyToClipboard.svg';
import copy from 'copy-to-clipboard';

import './RenderBadgeSnippet.css';
import { Component } from 'inferno';

export class RenderBadgeSnippet extends Component {

  constructor(props) {
    super(props);
    this.targetUrl = this.props.targetUrl;
  }

  render() {

    const htmlLink = `<a href="https://projects.ramunarasinga.com"><img src="https://visitors-count.onrender.com/api/count/incr/badge.svg?url=${this.props.targetUrl}"/></a>`

    const mdLink = `[![Visitors](https://visitors-count.onrender.com/api/count/incr/badge.svg?url=${this.props.targetUrl})](https://projects.ramunarasinga.com)`

    return (
      <>
        <div class="row justify-content-center py-3">
          <div class="col-9">
            <h4>HTML Link:</h4>
            <div class="row">
              <div class="col-11 gvb-html-container">
                {htmlLink}
              </div>
              <div class="col-1 copy" onClick={() => copy(htmlLink)}>
                <img src={CopyToClipboard} height='40' />
                Copy
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center py-3">
        <div class="col-9">
          <h4>Markdown Link:</h4>
          <div class="row">
            <div class="col-11 gvb-html-container">
              {mdLink}
            </div>
            <div class="col-1 copy" onClick={() => copy(mdLink)}>
              <img src={CopyToClipboard} height='40' />
              <span>Copy</span>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}