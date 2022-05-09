import "./UpgradeToPremium.css"

export default function UpgradeToPremium(props) {

	 
	return (
                <div>
                    <a href="/upgrade?utm_campaign=funnelPremiumAboveTheFold&amp;utm_medium=internal&amp;utm_source=funnel" className="premium-hyper-link">
                        <div style={props} className="premium-upgrade-button">
                            <span className="premium-upgrade-text">Upgrade to Grammarly Premium</span>
                        </div>
                    </a>
                </div>
	)
}