import './Home.css';
import { Link } from "react-router-dom";
export default function Home() {

	/*
	 * Check the text for grammar mistakes
	 */
	
	 
	return (
		<div className="container">

		<Link to="/Premium">
      <div className="premium-container">
			<img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/hohs8swq3kxoldxg0crz' className='premium' height="50px" width ='50px'/>
            <div className="premium premium-link-text">Get Premium</div>
		</div>
    </Link>
	</div>
	)
}