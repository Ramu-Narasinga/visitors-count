import { Component } from 'inferno';
import './GenerateVisitorsCountBadge.css';
import { RenderBadgeSnippet } from './RenderBadgeSnippet';

export class GenerateVisitorsCountBadge extends Component {
  constructor(props) {
    super(props)
    this.state = {targetUrl: window.location.origin};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("event.target.value:", event.target.value);
    this.setState({targetUrl: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {

    const {
      targetUrl
    } = this.state;

    return (
      <section class="bg-light generate-visitors-badge">
        <div class="row justify-content-center">
          <div class="col-9">
            <h1>Generate Views Badge</h1>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-9">
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label for="url">
                  <h4>Target URL:</h4>
                </label>
                <input 
                  type="email" 
                  class="form-control"
                  id="url" 
                  aria-describedby="urlforviews" 
                  placeholder="Enter url" 
                  value={targetUrl}
                  onInput={this.handleChange}
                />
              </div>
            </form>
          </div>
        </div>
        <RenderBadgeSnippet 
          targetUrl={targetUrl}
        />
      </section>
    )
  }
}