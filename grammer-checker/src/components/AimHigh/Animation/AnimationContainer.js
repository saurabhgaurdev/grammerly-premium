import {useState} from 'react';
import "./Animation.css"
export default function AnimationContainer(props) {

	/*
	 * Check the text for grammar mistakes
	 */
	
	 
	return (
                <div className="animation-container">
                        <div className={props.counter === 1 ? 'image-container active' : 'image-container'}>
                            <img className="writing-simple" src="https://static.grammarly.com/assets/files/1495248700340626177a3f4fb713a94d/writing_sample.svg"/>
                            <img className="grammarly-suggestion" src="https://static.grammarly.com/assets/files/32847965b20166d16b376b3f97d7ad65/grammarly_suggestion.svg"/>
                        </div>
                        <div className={props.counter === 2 ? 'image-container active' : 'image-container'}>
                            <img className="writing-simple" src="https://static.grammarly.com/assets/files/718a361635f4474a3b373645dce51bec/writing_sample.svg"/>
                            <img className="grammarly-suggestion" src="https://static.grammarly.com/assets/files/299da6fd3e0803d745cb860de475a4e5/grammarly_suggestion.svg"/>
                        </div>
                        <div className={props.counter === 3 ? 'image-container active' : 'image-container'}>
                            <img className="writing-simple _1RRPJ-active" src="https://static.grammarly.com/assets/files/467997bcab46bc3b210b11951fa061d8/writing_sample.svg"/>
                            <img className="grammarly-suggestion _1RRPJ-active" src="https://static.grammarly.com/assets/files/8557e8eb1af323bdc9bb1cc8acff9bb7/grammarly_suggestion.svg"/>
                        </div>
                        <div className={props.counter === 4 ? 'image-container active' : 'image-container'}>
                            <img className="writing-simple" src="https://static.grammarly.com/assets/files/18c5385a8f59a60ee1a389426a2a0b89/writing_sample.svg"/>
                            <img className="grammarly-suggestion" src="https://static.grammarly.com/assets/files/d9d689c835ee698bca792fe86759fbe1/grammarly_suggestion.svg"/>
                        </div>
                    </div>

	)
}