import { useState } from 'react';
import UpgradeToPremium from '../Buttons/UpgradeToPremiun/UpgradeToPremium';
import "./UpLevel.css"
export default function UpLevel() {
	const freeFeatureList = [
		{
			"text":"Spelling",
			"src":"https://static.grammarly.com/assets/files/8ce10810d1ced77584f15d910a7b69dd/example-spelling.svg",
			"imgText": "Eliminate spelling errors."
		},
		{
			"text":"Grammar",
			"src":"https://static.grammarly.com/assets/files/45bb5d7f61028cc68409ac207d58e806/example-grammar.svg",
			"imgText": "Eliminate grammatical errors."
		},
		{
			"text":"Punctuation",
			"src":"https://static.grammarly.com/assets/files/04a6185f01001090f239f95e005d7b96/example-punctuation.svg",
			"imgText": "Eliminate punctuation errors."
		},
		{
			"text":"Conciseness",
			"src":"https://static.grammarly.com/assets/files/b16a2117a5bc0b5ac49fdcdbbfee30c9/example-conciseness.svg",
			"imgText": "Make every sentence concise and easy to follow."
		}
	];

	const premiumFeatureList = [
		{
			"text":"Everything in Free",
			"src":"",
			"imgText": ""
		},
		{
			"text":"Clarity-focused sentence rewrites",
			"src":"https://static.grammarly.com/assets/files/b14251ced92375bba8190092543d2937/example-sentence-rewrites.svg",
			"imgText": "Automatically rewrite hard-to-read sentences."
		},
		{
			"text":"Tone adjustments",
			"src":"https://static.grammarly.com/assets/files/1e01fcc98c60d4c210320cc735a38368/example-confident-writing.svg",
			"imgText": "Eliminate hedging language or unnecessary qualifiers to sound more confident."
		},
		{
			"text":"Plagiarism detection",
			"src":"https://static.grammarly.com/assets/files/04a6185f01001090f239f95e005d7b96/example-punctuation.svg",
			"imgText": "Ensure your work is fresh and original by checking it against 16 billion web pages."
		},
		{
			"text":"Word choice",
			"src":"https://static.grammarly.com/assets/files/1cb3884004858ec65c71e5f7db9edd54/example-word-choice.svg",
			"imgText": "Find vivid words to enliven each and every message."
		},
		{
			"text":"Formality level",
			"src":"https://static.grammarly.com/assets/files/d7dae495a77eb1db07abafa627c135db/example-formality.svg",
			"imgText": "Write with the appropriate tone, even when you're in a hurry."
		},
		{
			"text":"Fluency",
			"src":"https://static.grammarly.com/assets/files/6ae68325cb99c9176eab1924c4bc8ce4/example-fluency.svg",
			"imgText": "Ensure your word choices sound natural and fluent."
		},
		{
			"text":"Additional advanced suggestions",
			"src":"",
			"imgText": "Fix inconsistencies in spelling and punctuation, adjust the tone of your writing, and get additional advanced feedback."
		}
	];
	// const [freeFeatureList, setFreeFeatureList] = useState([]);
	// const [freeFeatureList, setFreeFeatureList] = useState([]);
	 
	return (
			<section style={{ 'background': '#f9faff'}}> 
				<section className="wrapper-section">
					<div className='content'>
						<h2 className='plan-compare-header'>Up-Level Your Communication</h2>
						<div className="title-paragraph">Unlock Grammarly Premium’s advanced features and suggestions.</div>
						<div className='plan-compare-container'>
							<div className='plan-summery'>
								<div className='plan-summery-top'>
								<span className="summery-tag">For Casual Writing</span>
								<h3>Free</h3>
								<div className="box-font-medium">Basic writing suggestions.</div>
								<button className="current-plan-button" type="button">
									<div>
										<span className="button-text">Current Plan</span>
									</div>
								</button>
								</div>
								<div className='plan-summery-bottom'>
									<ul className='feature-list-wrapper'>

									{freeFeatureList.length > 0 &&

												freeFeatureList.map((item, i) => <li key={i} className="feature-list-item">
												<span className='flex-box'>
													<span className="hoverable-target">
														<span className="hoverable-text">
															<div className="small-text">{item.text}</div>
														</span>
													</span>
													<div className="example-card">
														<div className="card-content-wrapper">
															<div className="img-demo">
																{ item.src != "" && <img src={item.src} alt="Example of grammar, spelling, and punctuation" />}
															</div>
															{item.imgText !="" && <div className="xsmall-text">{item.imgText}</div>}
														</div>
													</div>
												</span>
											</li>)
									}								
									</ul>
								</div>
							</div>
							<div className='plan-summery'>
								<div className='plan-summery-top'>
									<span className="summery-tag">For Work or School</span>
									<h3>Premium</h3>
									<div className="box-font-medium">Style, tone, and clarity improvements for writing at work and school.</div>
									<div className="premium-button">
									<UpgradeToPremium width="auto"/>
									</div>
								</div>
								<div className='plan-summery-bottom'>
									<ul className='feature-list-wrapper'>
									{premiumFeatureList.length > 0 &&
											premiumFeatureList.map((item, i) => <li key={i} className="feature-list-item">
											<span className='flex-box'>
												<span style={i === 0 ? {'cursor': 'auto'}:{}} className="hoverable-target">
													<span className="hoverable-text">
														<div style= {i === 0 ? {'color':'#0E101A','fontWeight':'600'}: {}}className="small-text">{item.text}</div>
													</span>
												</span>
												{(item.src || item.imgText) && <div className="example-card">
													<div className="card-content-wrapper">
														<div className="img-demo">
														{ item.src && <img src={item.src} alt="Example of grammar, spelling, and punctuation" />}
														</div>
														{item.imgText && <div className="xsmall-text">{item.imgText}</div>}
													</div>
												</div>}
											</span>
											</li>)
											}
									</ul>
								</div>
							</div>

						</div>
					</div>

				</section>
			</section>
	)
}