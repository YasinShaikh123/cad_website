import React from 'react'
import { Link } from 'react-router-dom'

const DashFaq = () => {
  return (
    <div className='dashfaq'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div class="sec-head">
                        <h3 class="roco-font">FAQ</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typese ttingindus orem Ipsum has beenthe standard dummy.</p>
                    </div>
                </div>
                <div className='col-md-6 faq-acc'>
                    <div id="accordion" class="accordion">
                        <div class="card mb-0">
                            <div class="faqs">
                                <div class="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                                    <a class="card-title">
                                        Torem ipsum dolor sit amet, consectetur adipiscing elit ?
                                    </a>
                                </div>
                                <div id="collapseOne" class="card-body collapse show" data-parent="#accordion" >
                                    <p>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access 
                                        and use the Website for its intended purpose. This license does not permit you to modify, distribute, reproduce, 
                                        or exploit any part of the Website without our prior written consent.
                                    </p>
                                </div>
                            </div>
                            <div class="faqs">
                                <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                    <a class="card-title">
                                        Torem ipsum dolor sit amet, consectetur adipiscing elit ?
                                    </a>
                                </div>
                                <div id="collapseTwo" class="card-body collapse" data-parent="#accordion" >
                                    <p> Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access 
                                        and use the Website for its intended purpose. This license does not permit you to modify, distribute, reproduce, 
                                        or exploit any part of the Website without our prior written consent.
                                    </p>
                                </div>
                            </div>
                            <div class="faqs">
                                <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                    <a class="card-title">
                                    Torem ipsum dolor sit amet, consectetur adipiscing elit ?
                                    </a>
                                </div>
                                <div id="collapseThree" class="collapse" data-parent="#accordion" >
                                    <div class="card-body">Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access 
                                        and use the Website for its intended purpose. This license does not permit you to modify, distribute, reproduce, 
                                        or exploit any part of the Website without our prior written consent.
                                    </div>
                                </div>
                            </div>
                            <div class="faqs">
                                <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapsefour">
                                    <a class="card-title">
                                    Torem ipsum dolor sit amet, consectetur adipiscing elit ?
                                    </a>
                                </div>
                                <div id="collapsefour" class="collapse" data-parent="#accordion" >
                                    <div class="card-body">Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access 
                                        and use the Website for its intended purpose. This license does not permit you to modify, distribute, reproduce, 
                                        or exploit any part of the Website without our prior written consent.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link className='see' to='/faq'>See more</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashFaq
