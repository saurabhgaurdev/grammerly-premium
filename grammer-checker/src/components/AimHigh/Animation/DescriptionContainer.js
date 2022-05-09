import {useState} from 'react';
import "./Animation.css"
export default function DescriptionContainer(props) {

	/*
	 * Check the text for grammar mistakes
	 */
	
	 
	return (
        <div className="description-container">
            <ul className="description-list-container">
                <li className="description-list-item">
                    <h5  className={props.counter === 1 ? 'description-h5-active' : 'description-h5'}>Clear, confident communication</h5>
                    <div className="small">Take the guesswork out of great writing.</div>
                    <div className="hidden-spacer"/>
                    <div className="progressBar">
                        <div className={props.counter === 1 ? 'progress-made-active' : 'progress-made'}/>
                    </div>
                </li>
                <li className="description-list-item">
                    <h5 className={props.counter === 2 ? 'description-h5-active' : 'description-h5'}>Comprehensive real-time feedback</h5>
                    <div className="small">Effective writing takes more than good grammar.</div>
                    <div className="hidden-spacer"/>
                    <div className="progressBar">
                        <div className={props.counter === 2 ? 'progress-made-active' : 'progress-made'}/>
                    </div>
                </li>
                <li className="description-list-item">
                    <h5 className={props.counter === 3 ? 'description-h5-active' : 'description-h5'}>Support you can rely on</h5>
                    <div className="small">Write with a second pair of eyes that never gets tired.</div>
                    <div className="hidden-spacer"/>
                    <div className="progressBar">
                        <div className={props.counter === 3 ? 'progress-made-active' : 'progress-made'}/>
                    </div>
                </li>
                <li className="description-list-item">
                    <h5 className={props.counter === 4 ? 'description-h5-active' : 'description-h5'}>Strike the right tone</h5>
                    <div className="small">Make the best impression, every time.</div>
                    <div className="hidden-spacer"/>
                    <div className="progressBar">
                        <div className={props.counter === 4 ? 'progress-made-active' : 'progress-made'}/>
                    </div>
                </li>
            </ul>
        </div>

	)
}