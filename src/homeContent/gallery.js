import React, {useState} from 'react';

// gallery images imports
import animal1 from '../images/animal1.jpg';
import animal2 from '../images/animal2.jpg';

import vfx1 from '../images/vfx1.jpg';
import vfx2 from '../images/vfx2.jpg';

import character1 from '../images/character1.jpg';
import character2 from '../images/character2.jpg';

import nature1 from '../images/nature1.jpg';
import nature2 from '../images/nature2.jpg';

const GalleryWithTabs = () => {
    const [galleryItems, setGalleryItems] = useState([]);

    const galleryList = [
        {
            id: 1,
            imageUrl: <img src={animal1} alt="" />,
            imageTag: 'animal'
        },
        {
            id: 2,
            imageUrl: <img src={animal2} alt="" />,
            imageTag: 'animal'
        },
        {
            id: 3,
            imageUrl: <img src={vfx1} alt="" />,
            imageTag: 'vfx'
        },
        {
            id: 4,
            imageUrl: <img src={vfx2} alt="" />,
            imageTag: 'vfx'
        },
        {
            id: 5,
            imageUrl: <img src={character1} alt="" />,
            imageTag: 'character'
        },
        {
            id: 6,
            imageUrl: <img src={character2} alt="" />,
            imageTag: 'character'
        },
        {
            id: 7,
            imageUrl: <img src={nature1} alt="" />,
            imageTag: 'nature'
        },
        {
            id: 8,
            imageUrl: <img src={nature2} alt="" />,
            imageTag: 'nature'
        }
    ]
    
    
    const flGallery = (galleryvar) => {
        //debugger;
        if(galleryvar == 'all'){
            setGalleryItems(galleryList);
        }
        else{
            const galleryFilter = galleryList.filter((curGallery) => {
                return(
                    curGallery.imageTag === galleryvar
                )
            });
            setGalleryItems(galleryFilter);
        }
        
    }
    console.log(galleryItems, "gallery");

    const dateV = new Date();
    console.log(dateV, "date");

    return(
        <>
            <div className='cBox'>
                <div className='wrapper'>
                    <h2>Our Gallery</h2>
                    <div className='galleryTabs'>
                        <a href="javascript:void(0);" onClick={() => flGallery('all')}>All</a>
                        <a href="javascript:void(0);" onClick={() => flGallery('nature')}>Nature</a>
                        <a href="javascript:void(0);" onClick={() => flGallery('animal')}>Animal</a>
                        <a href="javascript:void(0);" onClick={() => flGallery('vfx')}>VFX</a>
                        <a href="javascript:void(0);" onClick={() => flGallery('character')}>Characters</a>
                    </div>
                    <div className='gallery'>
                        <ul>
                            {galleryItems.length == 0 ? galleryList.map((galleryCn) => {
                                return(
                                    <>
                                        <li id={"gallery" + galleryCn.id}>
                                            {galleryCn.imageUrl}
                                            <p>{galleryCn.imageTag}</p>
                                        </li>
                                    </>
                                )
                            }): galleryItems.map((galleryCn) => {
                                return(
                                    <>
                                        <li id={"gallery" + galleryCn.id}>
                                            {galleryCn.imageUrl}
                                            <p>{galleryCn.imageTag}</p>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <p>copyright @{dateV.getMonth()+1} , {dateV.getFullYear()}</p>
                </div>
            </div>
        </>
    )
}
export default GalleryWithTabs;