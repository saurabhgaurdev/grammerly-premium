import {useState, useEffect} from 'react';
import "./PremiumCustomerReport.css";
export default function PremiumCustomerReport() {

	

    const scoreResult = [
		{
			'text':"76% of Grammarly users find writing more enjoyable.",
			'percentage': 76,
			'stroke-dashoffset': 224.51999999999998

		},
		{
			'text':"76% of Grammarly users find writing more enjoyable.",
			'percentage': 85,
			'stroke-dashoffset': 172.95
		},
		{
			'text':"76% of Grammarly users find writing more enjoyable.",
			'percentage': 70,
			'stroke-dashoffset':258.90000000000003
		}
	];

	/*
	 * Check the text for grammar mistakes
	 */
	 
	return (
			<section className='section-wrapper'>
				
				<div className='score-result-content'>
					<h2 className='report-header'>Premium Customers Report Better Results</h2>
					<div className='decription-para'>We routinely survey Grammarly users and have found that:</div>
					<div className='score-result'>
					{scoreResult.length > 0 && scoreResult.map((item, i) =>
						<div key={i} className='score-item'>
							<div className="score-circle">
								<div className="score-item-score">
									<svg className="svg-container">
										<defs>
										<linearGradient id="grad1" gradientUnits="userSpaceOnUse" x1="100%" y1="100%" x2="0%" y2="0%">
											<stop stopColor="#4FDBCA" offset="0"></stop>
											<stop stopColor="#4CD696" offset="1"></stop>
										</linearGradient>
										</defs>
										<circle stroke="#e6e6e8" cx="73" cy="73" r="71" strokeWidth="4"></circle>
										<circle  className="clockwise-circle" cx="73" cy="73" r="71" stroke="#15C39A"  strokeDashoffset={item['stroke-dashoffset']} strokeWidth="4"></circle>
									</svg>
									<div className="score-item-count"><span style={{'color': 'inherit', 'fontWeight': '600'}}>{item.percentage}</span><span style={{'color': 'inherit', 'fontWeight': '600'}} >%</span></div>
								</div>
							</div>
							<div className="large-text">{item.text}</div>
						</div>)
						}
					</div>

				</div>
			</section>
	)
}