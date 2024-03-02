import React from 'react';
import NavigationSection from './Nav';
import Logo from '../images/logo.png';
import SearchBar from './search';

const HeaderSection = () =>{
    var SiteLogo = true;
    let headSc;
    if(true){
        headSc = <NavigationSection></NavigationSection>
    }
    else{
        headSc = <p>No Header</p>;
    }

    const srchname = 'Search Here...'
    return(
        <>
            <header>
                <div className="wrapper">
                    <div className="header">
                        <a href="javascript:void(0);">
                            {SiteLogo ? <img src={Logo} alt="" /> : <p>No Logo</p>}
                        </a>
                        {<SearchBar plcname={ srchname } />}
                        {headSc}
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderSection