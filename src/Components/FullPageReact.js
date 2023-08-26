import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import SampleSection from './SampleSection';
import SampleSectionSec from './SampleSectionSec';

class FullPageReact extends React.Component {
	render() {
		return (
			<ReactFullpage
				scrollingSpeed={1200}
				render={() => {
					return (
						<div>
							<div className="section">
								<SampleSection />
							</div>
							<div className="section">
								<SampleSectionSec />
							</div>
							<div className="section">
								<SampleSection />
							</div>
							<div className="section">
								<SampleSectionSec />
							</div>
							<div className="section">
								<SampleSection />
							</div>
						</div>
					);
				}}
			/>
		);
	}
}

export default FullPageReact;