import styles from './header.module.css';
import jclogo from '../../src/assets/jc_logo_v2.svg';
import crown from '../../src/assets/crown.svg';
import searchicon from '../../src/assets/ic_search.svg';
import voicesearchIcon from '../../src/assets/voice-search.svg';
import jioicon from '../../src/assets/jio-logo.png';
const Header = () => {
    let navlinks=["Home","Sports","Movies","Tv shows","More"];
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <div className={styles.logo}> 
                <img src={jclogo} alt="" />
                <div className={styles.premium}><img src={crown} alt="" />
                <p>Go Premium</p></div>
                </div>
                <ul className={styles.navlinks}>
                    {
                navlinks.map((link)=>{
                                // eslint-disable-next-line react/jsx-key
                                return <li className={styles.navlink}>{link}</li>
                            })
                        }
                </ul>
            </nav>
            <div className={styles.search}>
                <div className={styles.searchbox}>
                    <div className={styles.headericon}>
                    <img src={searchicon} alt="" />
                    </div>
                    <input type="text" className={styles.searchinput} placeholder='Movies Shows and More'/>
                    <div className={styles.headericon}>
                    <img src={voicesearchIcon} alt="" />
                    </div>
                </div>
                <img className={styles.usericon} src={jioicon} alt="" />
            </div>
        </header>
    );
};

export default Header;

