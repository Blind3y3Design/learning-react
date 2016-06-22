import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">
  
  			<div className="post banner">
			    <h1 className="post-title">I <em>strategize</em>, <em>prototype</em>, <em>test</em> and <em>build</em> web products.</h1>
			</div>
  
		  	<div className="post clearfix">

				<h2>Technologies I build with:</h2>

				<div className="skill-item clearfix">
					<h4>Design</h4>
					<ul className="">
						<li><em>Adobe Creative Suite</em>
							<ul>
								<li><em>Photoshop</em></li>
								<li><em>Illustrator</em></li>
							</ul>
						</li>
						<li><em>Balsamiq</em></li>
						<li><em>Invision</em></li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Development</h4>
					<ul>
						<li><em>HTML5</em></li>
						<li><em>CSS3</em>
							<ul>
								<li><em>Sass</em></li>
								<li><em>Less</em></li>
							</ul>
						</li>
						<li><em>Javascript</em>
							<ul>
								<li><em>React</em></li>
								<li><em>Redux</em></li>
								<li><em>Angular</em></li>
								<li><em>jQuery</em></li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Testing</h4>
					<ul>
						<li><em>Optimizely</em></li>
						<li><em>User Interviews</em></li>
						<li><em>User Surveys</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
						<li><em>Babel</em></li>
						<li><em>Webpack</em></li>
						<li><em>Gulp/Grunt</em></li>
					</ul>
				</div>

  			</div>


  			<div className="post clearfix">

				<h2>Companies I have worked with:</h2>

				<ul className="clients">
					<li className="amex-logo">American Express</li>
					<li className="craftsman-logo">Craftsman</li>
					<li className="kenmore-logo">Kenmore</li>
					<li className="mls-logo">Major League Soccer</li>
					<li className="owo-logo">One World Observatory</li>
					<li className="qualcomm-logo">Qualcomm</li>
					<li className="td-bank-logo">TD Bank</li>
				</ul>

			</div>

			<Banner />

  		</div>
  
    );
  }
}

export default Home;