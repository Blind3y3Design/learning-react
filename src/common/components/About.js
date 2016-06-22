import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

  render () {
    const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>

      		<Banner />

      	  <div className="about">

      	  	<h3>About Me</h3>

      	  	<p>I have been developing modern standards-complians web sites for the past 6 years. Over the years, I have worked with many methodologies, frameworks, and architectures. I currently focus on performant, usable, and accessible web-based products.</p> 

      	  	<p>My first job in the web was for an e-commerce based advertising agency. In my time there we focused on providing a wide range of products and experiences for our clients. Our goal was to make performant and stable sites that allowed the users to easily and quickly purchase the products they desired.</p>

      	  	<p>In 2014, I was given the opportunity to work with an amazing team of developers on a small team that had the freedom to explore new technologies and ideas while still being backed by a stable and reliable company. It was at this company that I got to grow my management and User Experience skills. We had the ability to create our own internal teams and manage ourselves indepentently. This allowed for each team member to take on a larger role and have more of a sense of ownership over the final product(s). </p>

      	  	<p>In the last few years I have had the privelege to work with a wide range of clients such as: <a href="https://www.qualcomm.com/" target="_blank">Qualcomm</a>, <a href="https://www.att.com/" target="_blank">AT&amp;T</a>, <a href="https://www.americanexpress.com/" target="_blank">American Express</a>, <a href="https://oneworldobservatory.com/" target="_blank">One World Observatory</a>, and some of Broadway&rsquo;s hit shows including <a href="http://schoolofrockthemusical.com/" target="_blank">School of Rock</a> and <a href="http://www.wickedthemusical.com/" target="_blank">Wicked</a>.</p>

	      </div>

	      <div className="repos">
	      	<h3><a href="https://github.com/blind3y3design?tab=repositories" target="_blank">My GitHub</a> Repos</h3>
	        {isFetching && results.length === 0 &&
	          	<Loader />
	        }
	        {!isFetching && error && results.length === 0 &&
	          <h3 className="post-error">There has been an Error</h3>
	        }
	        {!isFetching && !error && results.length === 0 &&
	          <h3>Empty</h3>
	        }
	        {results.length > 0 &&
	          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
	            <Repos results={results} />
	          </div>
	        }
	      </div>

      </div>
    );
  }
}

About.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default About;