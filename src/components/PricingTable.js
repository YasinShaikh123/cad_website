import React from 'react'
import crossicon from '../assets/image/53443.png'
import checkicon from '../assets/image/53444.png'

const PricingTable = () => {

  return (
        <div className='pricing-table' style={{padding:'0 15px 5rem 15px'}}>
            <div className='container-fluid'>
                <table>
                    <tr>
                        <th className='top-fixed w-250px' style={{padding:'24px',border:'none'}}>
                            <div className='plan'>
                                <h3>Not Sure Which<br/> Plan Is For You?</h3>
                                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button>Find My Plan</button>
                            </div>
                        </th>
                        <th className='top-fixed w-250px'>
                            <div class="yearly">
                                <h4>Standard</h4>
                                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div class="start">
                                    <p>Starts at</p>
                                    <div class="dis">
                                        <span class="amt">$250</span><span class="off">62% off</span>
                                    </div>
                                    <div class="amount">
                                        <h2>$95.99</h2>
                                        <p>/Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div class="start-btn">
                                        <a href="#">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <th className='top-fixed w-250px '>
                            <div class="yearly">
                                <h4>Premium</h4>
                                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div class="start">
                                    <p>Starts at</p>
                                    <div class="dis">
                                        <span class="amt">$250</span><span class="off">62% off</span>
                                    </div>
                                    <div class="amount">
                                        <h2>$95.99</h2>
                                        <p>/Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div class="start-btn">
                                        <a href="#">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <th className='top-fixed w-250px'>
                            <div class="yearly">
                                <h4>Professional</h4>
                                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div class="start">
                                    <p>Starts at</p>
                                    <div class="dis">
                                        <span class="amt">$250</span><span class="off">62% off</span>
                                    </div>
                                    <div class="amount">
                                        <h2>$95.99</h2>
                                        <p>/Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div class="start-btn">
                                        <a href="#">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td style={{padding:'24px',border:'none'}}></td>
                        <td style={{padding:'24px'}}></td>
                        <td style={{padding:'24px'}}></td>
                        <td style={{padding:'24px'}}></td>
                    </tr>
                    <tr>
                        <td><span>Number maximum users per Org</span></td>
                        <td style={{textAlign:'center'}}>100</td>
                        <td style={{textAlign:'center'}}>300</td>
                        <td style={{textAlign:'center'}}>Unlimited</td>
                    </tr>
                    <tr>
                        <td><span>Unlimited document storage</span></td>
                        <td style={{textAlign:'center'}}>5GB</td>
                        <td style={{textAlign:'center'}}>Unlimited</td>
                        <td style={{textAlign:'center'}}>Unlimited</td>
                    </tr>
                    <tr>
                        <td><span>Brand Customization</span></td>
                        <td style={{textAlign:'center'}}><img src={crossicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>Multi region data storage</span></td>
                        <td style={{textAlign:'center'}}><img src={crossicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>Client onboarding/intake</span></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>Secure portal for clients</span></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>Secure Messaging</span></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>e-Signatures</span></td>
                        <td style={{textAlign:'center'}}>$</td>
                        <td style={{textAlign:'center'}}><img src={checkicon} />*</td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>Update once, update everywhere</span></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} />*</td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>Create templated forms</span></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>Task based actions</span></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>Contact Management</span></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>Guest forms</span></td>
                        <td style={{textAlign:'center'}}><img src={crossicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>Legal trail</span></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                </table>
                    <div className='table-sec'>Encryption & Security</div>
                <table>
                    <tr>
                        <th className="w-250px" style={{border:'none',padding:'0'}}></th>
                        <th className="w-250px" style={{border:'none',padding:'0'}}></th>
                        <th className="w-250px" style={{border:'none',padding:'0'}}></th>
                        <th className="w-250px" style={{border:'none',padding:'0'}}></th>
                    </tr>
                    <tr>
                        <td><span>Encrypted storage</span></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>Encryption at rest and in transit</span></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>Zero-knowledge authentication</span></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>Two-step verification</span></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                </table>
                <div className='table-sec'>Data Management</div>
                <table>
                    <tr>
                        <th className="w-250px" style={{border:'none',padding:'0'}}></th>
                        <th className="w-250px" style={{border:'none',padding:'0'}}></th>
                        <th className="w-250px" style={{border:'none',padding:'0'}}></th>
                        <th className="w-250px" style={{border:'none',padding:'0'}}></th>
                    </tr>
                    <tr>
                        <td><span>Granular permission level for collaborators</span></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>Revoke document access</span></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>Full Text Document Search</span></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                </table>
                    <div className='table-sec'>Encryption & Security</div>
                <table>
                    <tr>
                        <th className="w-250px" style={{border:'none',padding:'0'}}></th>
                        <th className="w-250px" style={{border:'none',padding:'0'}}></th>
                        <th className="w-250px" style={{border:'none',padding:'0'}}></th>
                        <th className="w-250px" style={{border:'none',padding:'0'}}></th>
                    </tr>
                    <tr>
                        <td><span>Support center</span></td>
                        <td style={{textAlign:'center'}}>$</td>
                        <td style={{textAlign:'center'}}><img src={checkicon} />(8/5)</td>
                        <td style={{textAlign:'center'}}><img src={checkicon} />(24/7)</td>
                    </tr>
                    <tr>
                        <td><span>Deployment support</span></td>
                        <td style={{textAlign:'center'}}>$</td>
                        <td style={{textAlign:'center'}}>$</td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                    <tr>
                        <td><span>Training</span></td>
                        <td style={{textAlign:'center'}}>$</td>
                        <td style={{textAlign:'center'}}>Virtual</td>
                        <td style={{textAlign:'center'}}>Virtual or On-site</td>
                    </tr>
                    <tr>
                        <td><span>Existing client data migration</span></td>
                        <td style={{textAlign:'center'}}>$</td>
                        <td style={{textAlign:'center'}}>$</td>
                        <td style={{textAlign:'center'}}><img src={checkicon} /></td>
                    </tr>
                </table>
            </div>
        </div>

  )
}

export default PricingTable
