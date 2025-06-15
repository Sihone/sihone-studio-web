const header = document.getElementById("header").style.display = "block";
const content = `
<div class="container-fluid d-flex flex-nowrap align-items-center justify-content-between">
            <div class="company-logo">
                <a href="index.html" class="logo-dark"><img alt="image" class="img-fluid" src="assets/img/header-logo.svg"></a>
                <a href="index.html" class="logo-light"><img alt="image" class="img-fluid" src="assets/img/header-logo-white.svg"></a>
            </div>
            <div class="menu-wrap">
                <div class="main-menu">
                    <div class="mobile-logo-area d-lg-none d-flex align-items-center justify-content-between">
                        <a href="index.html" class="mobile-logo-wrap">
                            <img alt="image" class="img-fluid light" src="assets/img/header-logo.svg">
                            <img alt="image" class="img-fluid dark" src="assets/img/header-logo-white.svg">
                        </a>
                        <div class="menu-close-btn">
                            <i class="bi bi-x"></i>
                        </div>
                    </div>
                    <ul class="menu-list">
                        <li class="single-menu-item position-inherit">
                            <a href="index.html">
                                Home
                            </a>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="service.html" class="drop-down">Our Services
                            </a>
                            <i class="bi bi-plus dropdown-icon"></i>
                            <ul class="sub-menu">
                                <li><a href="service.html">Service Style 01</a></li>
                                <li><a href="service2.html">Service Style 02</a></li>
                                <li><a href="service-details.html">Service Details</a></li>
                            </ul>
                        </li>
                        <li class="single-menu-item position-inherit">
                            <a href="portfolio-classic.html">
                                Our Portfolio
                            </a>
                        </li>
                        <li class="single-menu-item position-inherit active">
                            <a href="about.html">
                                About Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="nav-right">
                    <div class="right-sidebar-button">
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path
                                    d="M4.61426 0.138589C3.82642 -0.0461965 3.00651 -0.0461965 2.21867 0.138589C1.7127 0.257268 1.2499 0.514858 0.88241 0.882348C0.514919 1.24984 0.257329 1.71263 0.13865 2.21861C-0.0461354 3.00645 -0.0461354 3.82636 0.13865 4.6142C0.257329 5.12017 0.514919 5.58297 0.88241 5.95046C1.2499 6.31795 1.7127 6.57554 2.21867 6.69422C3.00651 6.87904 3.82642 6.87904 4.61426 6.69422C5.12024 6.57554 5.58303 6.31795 5.95052 5.95046C6.31801 5.58297 6.5756 5.12017 6.69428 4.6142C6.8791 3.82636 6.8791 3.00645 6.69428 2.21861C6.5756 1.71263 6.31801 1.24984 5.95052 0.882348C5.58303 0.514858 5.12024 0.257268 4.61426 0.138589ZM4.61426 9.3058C3.82642 9.12099 3.00651 9.12099 2.21867 9.3058C1.7127 9.42448 1.2499 9.68207 0.88241 10.0496C0.514919 10.4171 0.257329 10.8798 0.13865 11.3858C-0.0461354 12.1737 -0.0461354 12.9936 0.13865 13.7814C0.257329 14.2874 0.514919 14.7502 0.88241 15.1177C1.2499 15.4852 1.7127 15.7428 2.21867 15.8614C3.00651 16.0462 3.82642 16.0462 4.61426 15.8614C5.12024 15.7428 5.58303 15.4852 5.95052 15.1177C6.31801 14.7502 6.5756 14.2874 6.69428 13.7814C6.8791 12.9936 6.8791 12.1737 6.69428 11.3858C6.5756 10.8798 6.31801 10.4171 5.95052 10.0496C5.58303 9.68207 5.12024 9.42448 4.61426 9.3058ZM13.7815 0.138589C12.9936 -0.0461965 12.1737 -0.0461965 11.3859 0.138589C10.8799 0.257268 10.4171 0.514858 10.0496 0.882348C9.68213 1.24984 9.42454 1.71263 9.30587 2.21861C9.12105 3.00645 9.12105 3.82636 9.30587 4.6142C9.42454 5.12017 9.68213 5.58297 10.0496 5.95046C10.4171 6.31795 10.8799 6.57554 11.3859 6.69422C12.1737 6.87904 12.9936 6.87904 13.7815 6.69422C14.2875 6.57554 14.7502 6.31795 15.1177 5.95046C15.4852 5.58297 15.7428 5.12017 15.8615 4.6142C16.0462 3.82635 16.0462 3.00645 15.8615 2.21861C15.7428 1.71263 15.4852 1.24984 15.1177 0.882348C14.7502 0.514858 14.2875 0.257268 13.7815 0.138589ZM13.7815 9.3058C12.9936 9.12099 12.1737 9.12099 11.3859 9.3058C10.8799 9.42448 10.4171 9.68207 10.0496 10.0496C9.68213 10.4171 9.42454 10.8798 9.30587 11.3858C9.12105 12.1737 9.12105 12.9936 9.30587 13.7814C9.42454 14.2874 9.68213 14.7502 10.0496 15.1177C10.4171 15.4852 10.8799 15.7428 11.3859 15.8614C12.1737 16.0462 12.9936 16.0462 13.7815 15.8614C14.2875 15.7428 14.7502 15.4852 15.1177 15.1177C15.4852 14.7502 15.7428 14.2874 15.8615 13.7814C16.0462 12.9936 16.0462 12.1737 15.8615 11.3858C15.7428 10.8798 15.4852 10.4171 15.1177 10.0496C14.7502 9.68207 14.2875 9.42448 13.7815 9.3058Z"/>
                            </g>
                        </svg>
                    </div>
                    <a href="contact.html" class="primary-btn3 btn-hover d-lg-flex d-none">
                        Contact Us
                        <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        <span></span>
                    </a>
                    <div class="sidebar-button mobile-menu-btn">
                        <svg width="20" height="18" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.29445 2.8421H10.5237C11.2389 2.8421 11.8182 2.2062 11.8182 1.42105C11.8182 0.635903 11.2389 0 10.5237 0H1.29445C0.579249 0 0 0.635903 0 1.42105C0 2.2062 0.579249 2.8421 1.29445 2.8421Z"></path>
                            <path d="M1.23002 10.421H18.77C19.4496 10.421 20 9.78506 20 8.99991C20 8.21476 19.4496 7.57886 18.77 7.57886H1.23002C0.550421 7.57886 0 8.21476 0 8.99991C0 9.78506 0.550421 10.421 1.23002 10.421Z"></path>
                            <path d="M18.8052 15.1579H10.2858C9.62563 15.1579 9.09094 15.7938 9.09094 16.5789C9.09094 17.3641 9.62563 18 10.2858 18H18.8052C19.4653 18 20 17.3641 20 16.5789C20 15.7938 19.4653 15.1579 18.8052 15.1579Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`;
header.innerHTML = content;
