import React from "react"
import { getColorContrast } from "../utils"
import {
	AiOutlineStop,
	AiOutlineCheckCircle,
	AiOutlineWarning,
} from "react-icons/ai"

const ContrastInfoCard = ({ color1, color2 }) => {
	const contrast = getColorContrast(
		color1.relativeLuminance,
		color2.relativeLuminance
	)

	return (
		<>
			{contrast > 1 ? (
				<li className="infoCardContainer">
					<div
						className="infoCardColorSwatch"
						aria-hidden="true"
						style={{
							backgroundColor: color1.colorCodeHex,
							color: color2.colorCodeHex,
						}}>
						Aa
					</div>
					<div>
						<p>Background: {color1.colorCodeHex}</p>
						<p>Foreground: {color2.colorCodeHex}</p>
					</div>
					<div>
						<p className="colorRatio">
							<strong>
								{Math.round(contrast * 100) / 100}
								<span aria-label="to"></span>:1
							</strong>
						</p>
						{contrast >= 7 && (
							<div>
								<p className="colorRatio">AAA</p>
							</div>
						)}
						{contrast >= 4.5 && contrast < 7 && (
							<div>
								<p className="colorRatio">AA</p>
							</div>
						)}
						{contrast >= 3 && contrast < 4.5 && (
							<div>
								<p className="colorRatio">AA large</p>
							</div>
						)}
					</div>
					<div>
						{contrast >= 4.5 && (
							<div className="infoCardPassFail">
								<p className="passFailText">PASS</p>
								<AiOutlineCheckCircle className="icon" color="green" />
							</div>
						)}
						{contrast >= 3 && contrast < 4.5 && (
							<div className="infoCardPassFail">
								<p className="passFailText">PASS</p>
								<AiOutlineWarning className="icon" color="#D46513" />
							</div>
						)}
						{contrast < 3 && (
							<div className="infoCardPassFail">
								<p className="passFailText">FAIL</p>
								<AiOutlineStop className="icon" color="red" />
							</div>
						)}
					</div>
				</li>
			) : null}
		</>
	)
}

export default ContrastInfoCard
