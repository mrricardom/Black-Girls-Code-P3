import React, { useState } from "react"
import "./Donation.css"
import Layout from "../../components/shared/Layout/Layout"
import donationGirls from "../../img/donation-page.png"

function Donation() {
	return (
		<Layout>
			<div>
				<div className="donation-content">
					<div className="img-container">
						<img
							src={donationGirls}
							className="donation-pic"
							alt="Support Black Girls CODE"
						/>
					</div>
					<p className="mission-p">
						Our mission is to empower young women of color between the ages of
						7-17 to embrace the current tech marketplace as builders and
						creators by introducing them to skills in computer programming and
						technology.
					</p>
					<div className="donate-form-container">
						<h1 className="form-header">Choose Donation Amount</h1>
						<div className="btn-group-one">
							<button className="time-btn">One-Time</button>
							<button className="time-btn">Monthly</button>
							<button className="time-btn">Quarterly</button>
							<button className="time-btn">Annually</button>
						</div>
						<div className="btn-group-two">
							<button className="money-btn">$25</button>
							<button className="money-btn">$50</button>
							<button className="money-btn">$100</button>
							<button className="money-btn">$250</button>
						</div>
						<form>
							<input
								type="text"
								className="amount"
								placeholder="$ Enter amount"
							></input>
							<div className="matching">
								<h3 className="employer-match-text">
									Employer Donation Matching
								</h3>
								<div className="match-border">
									<h3 className="co-match-name">Matching Company Name</h3>
									<input
										type="text"
										className="company-name"
										placeholder="Search company name..."
									></input>
									<h3 className="match-text">
										Type in your employer's name to find out if they can match
										your donations
									</h3>
								</div>
							</div>
							<div className="check-boxes">
								<div>
									<input
										className="checkbox"
										type="checkbox"
										id="dedicate"
									></input>
									<label htmlFor="dedicate">
										Dedicate my donation in honor or in memory of someone{" "}
									</label>
								</div>

								<div>
									<input
										className="checkbox"
										type="checkbox"
										id="comment"
									></input>
									<label htmlFor="comment"> Write us a comment </label>
								</div>

								<div>
									<input
										className="checkbox"
										type="checkbox"
										id="display-to-dw"
									></input>
									<label htmlFor="display-to-dw">
										Display your donation and comment on the donor wall
									</label>
								</div>
							</div>
						</form>
						<button className="submit-btn">SUBMIT</button>
					</div>
					<div className="charity-container">
						<p className="charity">
							We are a 501(c)(3) charitable organization. Our E IN # is
							45-4930530. All donations are fully tax-deductible and no goods or
							services have been exchanged for this donation.
						</p>
					</div>
					<div className="donor-wall-container">
						<h1 className="donor-text">Donor Wall</h1>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Donation
