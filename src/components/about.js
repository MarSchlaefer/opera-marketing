import React from 'react';
import michele from '../images/Michele.jpg'
import boyd from '../images/Boyd.jpg'

const About = () => {

  return(
    <div className="about">
      <div className="about-michele">
        <div className='michele-image'>
          <img src={ michele } alt=''/>
        </div>
        <div className="about-text">
          <h1>About Michele</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum gravida iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non lobortis urna. Vestibulum vel diam pulvinar, mattis libero eget, volutpat tellus. Quisque non feugiat urna. Fusce efficitur in dolor lacinia blandit. Ut ut mauris sit amet ipsum suscipit ornare eu id sem. Phasellus posuere urna at ante rhoncus sodales. Phasellus facilisis nunc nibh, id blandit mi pretium quis. Integer semper id orci vitae pharetra. Vestibulum pulvinar pulvinar varius.</p>
          <p>Donec sit amet dictum risus. In commodo ullamcorper nisi sed bibendum. Morbi sed ante eget ligula eleifend eleifend ut sed est. Praesent eu massa tortor. Donec mollis dictum elementum. Cras et augue odio. Vivamus ultricies velit nec mauris posuere cursus. Etiam vitae blandit justo, id tincidunt ipsum. Sed non odio eget eros dapibus rutrum. Vestibulum molestie augue eros, ut sollicitudin dolor cursus ut. Nulla sit amet leo a nulla sollicitudin blandit. Nam consectetur mi nunc, ac consequat enim cursus ut. In imperdiet erat et lectus blandit, ac pretium tortor ultricies.</p>
          <p>Donec sit amet dictum risus. In commodo ullamcorper nisi sed bibendum. Morbi sed ante eget ligula eleifend eleifend ut sed est. Praesent eu massa tortor. Donec mollis dictum elementum. Cras et augue odio. Vivamus ultricies velit nec mauris posuere cursus. Etiam vitae blandit justo, id tincidunt ipsum. Sed non odio eget eros dapibus rutrum. Vestibulum molestie augue eros, ut sollicitudin dolor cursus ut. Nulla sit amet leo a nulla sollicitudin blandit. Nam consectetur mi nunc, ac consequat enim cursus ut. In imperdiet erat et lectus blandit, ac pretium tortor ultricies.</p>
        </div>
      </div>
      <div className="about-boyd">
        <div className="about-text">
          <h1>About Boyd</h1>
          <p>Duis nec nulla enim. Mauris iaculis lorem at nisi rhoncus, vel tincidunt eros imperdiet. Nullam convallis placerat libero eu aliquet. In eget egestas est. Donec vel eros sit amet lectus convallis pulvinar non et massa. Ut fringilla ullamcorper ex, in iaculis lacus posuere id. Donec nec luctus sem. Praesent ut sodales nibh, vitae molestie dui. In condimentum sagittis dolor sed luctus. Curabitur libero nunc, venenatis ac velit ac, varius pellentesque nunc. Sed at egestas diam, id cursus enim. Donec quis enim elementum, condimentum dui nec, lacinia velit. Integer ultrices imperdiet nunc, in tempus magna fermentum ut. Morbi elementum, nibh eget hendrerit sollicitudin, leo sem sollicitudin ipsum, sed auctor purus arcu vel velit.</p>
          <p>Donec eget hendrerit nunc, eget sagittis dolor. Fusce sed pellentesque lectus. Morbi tempor lacinia dui, a accumsan mauris lobortis eget. Suspendisse vel diam risus. Nulla vestibulum diam libero, vitae facilisis libero sodales ac. In vel sapien a elit cursus ultricies. Suspendisse eget lectus scelerisque, facilisis nisl eget, congue arcu. Aenean vestibulum eu nisi quis pretium. Phasellus purus velit, consequat gravida auctor et, sollicitudin nec tellus. Cras dolor orci, sagittis ut dignissim nec, scelerisque id odio. Donec sit amet maximus nibh, sit amet scelerisque nulla.</p>
          <p>Vestibulum aliquet purus at auctor iaculis. Nulla posuere nunc erat, in commodo ligula congue id. Sed metus metus, consectetur in commodo at, consequat vitae quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin scelerisque, nibh eu convallis dapibus, risus nunc consequat ligula, eu dapibus quam quam sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam efficitur rutrum congue. Cras convallis dolor in eleifend ultricies. Ut porttitor varius ligula ut molestie. Nam venenatis metus non augue aliquam congue. In sollicitudin nunc scelerisque justo vehicula egestas. Sed pellentesque pellentesque rhoncus.</p>
        </div>
        <div className='boyd-image'>
          <img src={ boyd } alt=''/>
        </div>
      </div>
    </div>
  )
}

export default About
