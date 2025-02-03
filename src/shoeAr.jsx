import '@google/model-viewer';
import './blue.css'


const ShoeAR = () => {
  return (
    <div>
    <h1 className='title-Ar'>Take a Look at our Demo <span className='Ar'>AR</span> feature</h1>
<button className='ar-btn'>Show more</button>
    <model-viewer
      src="/model/nike.glb"
      ios-src="/model/nike.glb"
      alt="3D Shoe Model"
      ar
      ar-modes="webxr scene-viewer quick-look"
      environment-image="neutral"
      auto-rotate
      camera-controls
      ar-placement="floor"
      camera-orbit="5deg 75deg 6m"
      field-of-view="20deg"
      style={{ width: '100%', height: '400px' }}
    />
    </div>
  );
};

export default ShoeAR;


