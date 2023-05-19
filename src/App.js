import React from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';
import './css/App.css';

const photos = [
    {src: 'images/ecdysis.jpeg', alt: 'description1', title: 'Ecdysis'},
    {src: 'images/eventually.jpeg', alt: 'description2', title: 'Eventually We Find Our Way'},
    {src: 'images/float.jpeg', alt: 'description1', title: "Float"},
    {src: 'images/friends-house.jpg', alt: 'description2', title: "Where Is The Friend's House?"},
    {src: 'images/irreversible.jpeg', alt: 'description1', title: "Untitled"},
    {src: 'images/letithappen.jpeg', alt: 'description2', title: "Let It Happen"},
    {src: 'images/makeartnotwar.jpeg', alt: 'description1', title: "Make Art Not War"},
    {src: 'images/meandher.jpeg', alt: 'description2', title: "Me And Her"},
    {src: 'images/mirage.jpeg', alt: 'description1', title: "Mirage"},
    {src: 'images/mist.jpeg', alt: 'description2', title: "Mist"},
    {src: 'images/monkeybrain1.jpeg', alt: 'description1', title: "Monkey Brain I"},
    {src: 'images/monkeybrain2.jpeg', alt: 'description2', title: "Monkey Brain II"},
    {src: 'images/n33d2f1ndp34c3.jpeg', alt: 'description1', title: "N33D2F1NDP34C3"},
    {src: 'images/nightowl1.jpeg', alt: 'description2', title: "Night Owl I"},
    {src: 'images/saltandsun.jpeg', alt: 'description1', title: "Salt And Sun"},
    {src: 'images/sitback.jpeg', alt: 'description2', title: "Sit Back"},
    {src: 'images/surrender.jpeg', alt: 'description2', title: "Golden Surrender"},
    {src: 'images/sweeper.png', alt: 'description2', title:"Sweeper | جارو"},
    {src: 'images/thewater.png', alt: 'description2', title:"The Water Does Not Care"},
    {src: 'images/threes.jpeg', alt: 'description2', title:"They Come To Me In Threes"},
    {src: 'images/toserveandprotect.jpeg', alt: 'description2', title:"To Serve And Protect"},
    {src: 'images/underneath.jpeg', alt: 'description2', title:"Underneath Of It All"},
    {src: 'images/waitforsomethingwild.jpeg', alt: 'description2', title:"Wait For Something Wild"},
    {src: 'images/buildingandpost.jpeg', alt: 'description1', title:"Untitled"},
    {src: 'images/cave.jpeg', alt: 'description2', title:"Untitled"},
    {src: 'images/reflectingnebula.jpeg', alt: 'description2', title:"Reflecting Nebula"},
    {src: 'images/nightowl2.jpeg', alt: 'description1', title: "Night Owl II"},
    // Add as many photos as you want
];

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery photos={photos} />
      <Footer />
    </div>
  );
}

export default App;
