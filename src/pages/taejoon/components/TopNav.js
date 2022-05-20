function TopNav() {
    return (
        <div className="header">
            <a className='main_logo' href="">WeBucks</a>
            <ul className="category">
                <li>
                    <a id="coffee" className="category_li" href="#">COFFEE</a>
                </li>
                <li>
                    <a id="menu" className="category_li" href="#">MENU</a>
                </li>
                <li>
                    <a id="store" className="category_li" href="#">STORE</a>
                </li>
                <li>
                    <a id="new" className="category_li" href="#">WHAT'S NEW</a>
                </li>
            </ul>
        </div>
    );
}
export default TopNav;