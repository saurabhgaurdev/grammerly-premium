import {useState} from 'react';
import AimHigh from '../AimHigh/AimHigh';
import PremiumCustomerReport from '../PremiumCustomerReport/PremiumCustomerReport';
import UpLevel from '../UpLevel/UpLevel';
export default function Content() {

	/*
	 * Check the text for grammar mistakes
	 */
	
	 
	return (
		<div className='content-container'>
		<AimHigh/>
		<UpLevel/>
		<PremiumCustomerReport/>
		</div>
	)
}