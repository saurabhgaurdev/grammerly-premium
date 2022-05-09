import {useState, useEffect} from 'react';
import UpgradeToPremium from '../Buttons/UpgradeToPremiun/UpgradeToPremium';
import "./AimHigh.css"
import AnimationContainer from './Animation/AnimationContainer';
import DescriptionContainer from './Animation/DescriptionContainer';
export default function AimHigh() {

    const [counter,setCounter] = useState(1);

	/*
	 * Check the text for grammar mistakes
	 */
	useEffect(() => {
        var timer = setTimeout(() => {
            if(counter === 4){
                setCounter(1);
            }
            else {
                setCounter(counter + 1);
            }
        }, 7000);

        return () => clearInterval(timer);
      },[counter])
	 
	return (
		<section className='aim-high-container'>
            <div className='content'>
                <div className='title'>
                    <h1 className='title-h1'>
                    Aim High With Brilliant Writing
                    </h1>
                   <UpgradeToPremium/>
                </div>
                <section className='section-content'>
                    <AnimationContainer counter ={counter}/>
                    <DescriptionContainer counter ={counter}/>
                </section>
            </div>
        </section>
 

	)
}