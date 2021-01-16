import React from "react";

const Header = () => {
	return (
		<div className="header">
            <div className="logo">
                <img src="/images/logo.png" alt="logo"/>
            </div>
                <div className="nav">
                    <div className="search-bar">
                        <input type="text" placeholder="Search.."/><i className="fas fa-search"></i>
                    </div>
                    <a className="btn primary-btn" href="">Login</a>
                    <a className="btn secondary-btn" href="">Create</a>
                    <div class="hamburger">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
        </div>
	);
};

export default Header;