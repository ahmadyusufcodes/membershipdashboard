import React from 'react'

export default function SideBar() {
  return (
    <div className="dlabnav">
            <div className="dlabnav-scroll">
				<ul className="metismenu" id="menu">
					<li className="dropdown header-profile">
						<a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
							<img src="static/images/profile/pic1.jpg" width="20" alt=""/>
							<div className="header-info ms-3">
								<span className="font-w600 ">Hi,<b>William</b></span>
								<small className="text-end font-w400">william@gmail.com</small>
							</div>
						</a>
						<div className="dropdown-menu dropdown-menu-end">
							<a href="./app-profile.html" className="dropdown-item ai-icon">
								<svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
								<span className="ms-2">Profile </span>
							</a>
							<a href="./email-inbox.html" className="dropdown-item ai-icon">
								<svg id="icon-inbox" xmlns="http://www.w3.org/2000/svg" className="text-success" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
								<span className="ms-2">Inbox </span>
							</a>
							<a href="./login.html" className="dropdown-item ai-icon">
								<svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" className="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
								<span className="ms-2">Logout </span>
							</a>
						</div>
					</li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-025-dashboard"></i>
							<span className="nav-text">Dashboard</span>
						</a>
                        <ul aria-expanded="false">
							<li><a href="index.html">Dashboard Light</a></li>
							<li><a href="index-2.html">Dashboard Dark</a></li>
							<li><a href="my-wallet.html">My Wallet</a></li>
							<li><a href="page-invoices.html">Invoices</a></li>
							<li><a href="cards-center.html">Cards Center</a></li>
							<li><a href="page-transaction.html">Transaction</a></li>
							<li><a href="transaction-details.html">Transaction Details</a></li>	
						</ul>

                    </li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
						<i className="flaticon-050-info"></i>
							<span className="nav-text">Apps</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="./app-profile.html">Profile</a></li>
							<li><a href="./post-details.html">Post Details</a></li>
                            <li><a className="has-arrow" href="javascript:void()" aria-expanded="false">Email</a>
                                <ul aria-expanded="false">
                                    <li><a href="./email-compose.html">Compose</a></li>
                                    <li><a href="./email-inbox.html">Inbox</a></li>
                                    <li><a href="./email-read.html">Read</a></li>
                                </ul>
                            </li>
                            <li><a href="./app-calender.html">Calendar</a></li>
							<li><a className="has-arrow" href="javascript:void()" aria-expanded="false">Shop</a>
                                <ul aria-expanded="false">
                                    <li><a href="./ecom-product-grid.html">Product Grid</a></li>
									<li><a href="./ecom-product-list.html">Product List</a></li>
									<li><a href="./ecom-product-detail.html">Product Details</a></li>
									<li><a href="./ecom-product-order.html">Order</a></li>
									<li><a href="./ecom-checkout.html">Checkout</a></li>
									<li><a href="./ecom-invoice.html">Invoice</a></li>
									<li><a href="./ecom-customers.html">Customers</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-041-graph"></i>
							<span className="nav-text">Charts</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="./chart-flot.html">Flot</a></li>
                            <li><a href="./chart-morris.html">Morris</a></li>
                            <li><a href="./chart-chartjs.html">Chartjs</a></li>
                            <li><a href="./chart-chartist.html">Chartist</a></li>
                            <li><a href="./chart-sparkline.html">Sparkline</a></li>
                            <li><a href="./chart-peity.html">Peity</a></li>
                        </ul>
                    </li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-086-star"></i>
							<span className="nav-text">Bootstrap</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="./ui-accordion.html">Accordion</a></li>
                            <li><a href="./ui-alert.html">Alert</a></li>
                            <li><a href="./ui-badge.html">Badge</a></li>
                            <li><a href="./ui-button.html">Button</a></li>
                            <li><a href="./ui-modal.html">Modal</a></li>
                            <li><a href="./ui-button-group.html">Button Group</a></li>
                            <li><a href="./ui-list-group.html">List Group</a></li>
                            <li><a href="./ui-card.html">Cards</a></li>
                            <li><a href="./ui-carousel.html">Carousel</a></li>
                            <li><a href="./ui-dropdown.html">Dropdown</a></li>
                            <li><a href="./ui-popover.html">Popover</a></li>
                            <li><a href="./ui-progressbar.html">Progressbar</a></li>
                            <li><a href="./ui-tab.html">Tab</a></li>
                            <li><a href="./ui-typography.html">Typography</a></li>
                            <li><a href="./ui-pagination.html">Pagination</a></li>
                            <li><a href="./ui-grid.html">Grid</a></li>

                        </ul>
                    </li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-045-heart"></i>
							<span className="nav-text">Plugins</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="./uc-select2.html">Select 2</a></li>
                            <li><a href="./uc-nestable.html">Nestedable</a></li>
                            <li><a href="./uc-noui-slider.html">Noui Slider</a></li>
                            <li><a href="./uc-sweetalert.html">Sweet Alert</a></li>
                            <li><a href="./uc-toastr.html">Toastr</a></li>
                            <li><a href="./map-jqvmap.html">Jqv Map</a></li>
							<li><a href="./uc-lightgallery.html">Light Gallery</a></li>
                        </ul>
                    </li>
                    <li><a href="widget-basic.html" className="ai-icon" aria-expanded="false">
							<i className="flaticon-013-checkmark"></i>
							<span className="nav-text">Widget</span>
						</a>
					</li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-072-printer"></i>
							<span className="nav-text">Forms</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="./form-element.html">Form Elements</a></li>
                            <li><a href="./form-wizard.html">Wizard</a></li>
                            <li><a href="./form-ckeditor.html">CkEditor</a></li>
                            <li><a href="form-pickers.html">Pickers</a></li>
                            <li><a href="form-validation.html">Form Validate</a></li>
                        </ul>
                    </li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-043-menu"></i>
							<span className="nav-text">Table</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="table-bootstrap-basic.html">Bootstrap</a></li>
                            <li><a href="table-datatable-basic.html">Datatable</a></li>
                        </ul>
                    </li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-022-copy"></i>
							<span className="nav-text">Pages</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="./page-login.html">Login</a></li>
                            <li><a href="./page-register.html">Register</a></li>
                            <li><a className="has-arrow" href="javascript:void()" aria-expanded="false">Error</a>
                                <ul aria-expanded="false">
                                    <li><a href="./page-error-400.html">Error 400</a></li>
                                    <li><a href="./page-error-403.html">Error 403</a></li>
                                    <li><a href="./page-error-404.html">Error 404</a></li>
                                    <li><a href="./page-error-500.html">Error 500</a></li>
                                    <li><a href="./page-error-503.html">Error 503</a></li>
                                </ul>
                            </li>
                            <li><a href="./page-lock-screen.html">Lock Screen</a></li>
                            <li><a href="./empty-page.html">Empty Page</a></li>
                        </ul>
                    </li>
                </ul>
				<div className="copyright">
					<p><strong>Dompet Payment Admin Dashboard</strong> © 2022 All Rights Reserved</p>
					<p className="fs-12">Made with <span className="heart"></span> by DexignLab</p>
				</div>
			</div>
        </div>
  )
}