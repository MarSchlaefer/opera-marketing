import React from 'react';
import Gallery from 'react-photo-gallery'

const Photos = () => {

  const PHOTO_SET = [
    {
      src: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1042_1068660998190_3709_n.jpg?_nc_cat=102&_nc_ht=scontent-lga3-1.xx&oh=9feef4f840dae5e2401c44d4130b620a&oe=5C63DBBF",
      width: 2.7,
      height: 4
    },
    {
      src: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/47268201_10218128260979394_8735403497932980224_n.jpg?_nc_cat=111&_nc_ht=scontent-lga3-1.xx&oh=a4dadb99a4c273332aae695b9e787d91&oe=5CB15514",
      width: 4,
      height: 3
    },
    {
      src: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/17022280_10155032318189919_7773583393972988602_n.jpg?_nc_cat=110&_nc_ht=scontent-lga3-1.xx&oh=36240765e1fb43b1797561a6c257588a&oe=5CAE419E",
      width: 3,
      height: 4
    },
    {
      src: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13507086_10210111467284623_958254365016422943_n.jpg?_nc_cat=108&_nc_ht=scontent-lga3-1.xx&oh=a6c7a45c79c31e79b467501a266877ca&oe=5CA1D203",
      width: 3,
      height: 4
    },
    {
      src: "https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/13346281_10209871418363550_7287272179011099660_o.jpg?_nc_cat=101&_nc_ht=scontent-lga3-1.xx&oh=d72e78aecb28c7dc5d170798d89a27d2&oe=5CA70E99",
      width: 3,
      height: 4
    },
    {
      src: require('../images/CC-Boheme-3.JPG'),
      width: 3,
      height: 4
    },
    {
      src: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/11026194_10152866937056795_3857226888671821790_n.jpg?_nc_cat=107&_nc_ht=scontent-lga3-1.xx&oh=1a8a0ecc8f35a304bc60af78f097c62a&oe=5CA801B9",
      width: 3,
      height: 4
    },
    {
      src: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1377626_10151938217723103_973317246_n.jpg?_nc_cat=106&_nc_ht=scontent-lga3-1.xx&oh=6ce009f318854e7d361594ab690af13e&oe=5CA6C338",
      width: 4,
      height: 3
    },
    {
      src: require('../images/Perichole-1982 Tacoma-3.JPG'),
      width: 3,
      height: 4
    },
    {
      src: require('../images/Mikado-Saratoga-6-97.JPG'),
      width: 2.5,
      height: 4
    },
    {
      src: "https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/1275308_10153295112665015_531137392_o.jpg?_nc_cat=100&_nc_ht=scontent-lga3-1.xx&oh=8b4894f04128ef614af02dc858e2c49d&oe=5CAB6061",
      width: 4,
      height: 3
    },
    {
      src: require('../images/Flute-1995_96-Crop.jpg'),
      width: 3,
      height: 4
    },
    {
      src: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1240126_10202096648002908_404982685_n.jpg?_nc_cat=101&_nc_ht=scontent-lga3-1.xx&oh=56171573b8fc9a8cabd7bedda226ea26&oe=5CADD9B5",
      width: 3,
      height: 4
    },
    {
      src: require('../images/Mich-Bron-NYCO-10-90-Crop.jpg'),
      width: 3,
      height: 4
    },
    {
      src: "https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/192562_10150103277481795_7699886_o.jpg?_nc_cat=104&_nc_ht=scontent-lga3-1.xx&oh=3becd67564abf9055994174e209dee7c&oe=5C91D8EE",
      width: 4,
      height: 3
    },
    {
      src: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1231538_10151634436586795_1692855557_n.jpg?_nc_cat=110&_nc_ht=scontent-lga3-1.xx&oh=0ca52311b8fc4852648ae819675e8c18&oe=5CA476CB",
      width: 3,
      height: 4
    },
    {
      src: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/521701_3674604507726_966256557_n.jpg?_nc_cat=108&_nc_ht=scontent-lga3-1.xx&oh=68c055f0efc4dacdbe16bb699e9ec093&oe=5C9034D4",
      width: 4,
      height: 3
    },
    {
      src: "https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/204734_10150157037091795_4741199_o.jpg?_nc_cat=104&_nc_ht=scontent-lga3-1.xx&oh=0d753dfc0629cc4dceed4f16cbd46c61&oe=5CA0F33D",
      width: 4,
      height: 3
    },
    {
      src: require('../images/Mikado-Mom-Crop.jpg'),
      width: 4,
      height: 4
    },
    {
      src: "https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/1933682_10150099189976795_6183075_o.jpg?_nc_cat=111&_nc_ht=scontent-lga3-1.xx&oh=f6eb99107735a2e55346ffc09bcc5472&oe=5CA23BB2",
      width: 4,
      height: 3
    },
    {
      src: require('../images/Desert-Song-89-2.JPG'),
      width: 3,
      height: 4
    },
    {
      src: require('../images/Mikado-Yum-Yum.JPG'),
      width: 3,
      height: 4
    }
  ]

  return(
    <div className="photos">
      <h1>Photos</h1>
      <Gallery photos={PHOTO_SET} />
    </div>
  )
}

export default Photos
