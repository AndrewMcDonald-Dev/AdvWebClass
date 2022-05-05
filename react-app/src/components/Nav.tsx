// import { ref } from 'vue';
// import LoginBadge from './LoginBadge.vue';

import { useState } from "react";

// const isOpen = ref(false)

const NavLink = (props: any) => <a {...props}>{props.children}</a>;
const LoginBadge = (): JSX.Element => {
    return <div>LoginBadge</div>;
};

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="navbar is-link"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img
                            src="https://bulma.io/images/bulma-logo.png"
                            width="112"
                            height="28"
                        />
                    </a>
                    <a
                        role="button"
                        className={`navbar-burger ${isOpen ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
                    <div className="navbar-start">
                        <NavLink className="navbar-item" href="/">
                            Home
                        </NavLink>
                        <NavLink className="navbar-item" href="/wall">
                            Wall
                        </NavLink>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">More</a>
                            <div className="navbar-dropdown">
                                <NavLink className="navbar-item" href="/about">
                                    About
                                </NavLink>
                                <NavLink className="navbar-item" href="/jobs">
                                    Jobs
                                </NavLink>
                                <NavLink
                                    className="navbar-item"
                                    href="/contact"
                                >
                                    Contact
                                </NavLink>
                                <hr className="navbar-divider" />
                                <NavLink className="navbar-item" href="/issue">
                                    Report an issue
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <LoginBadge />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
