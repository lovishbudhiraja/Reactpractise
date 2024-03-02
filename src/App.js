import './App.css';
import HeaderSection from './header/Header';
import BannerSection from './banner/banner';
import ContentHome from './homeContent/content';

// Normal Function

function App() {
  return (
    <>
      <HeaderSection></HeaderSection>
      <BannerSection></BannerSection>
      <ContentHome></ContentHome>
    </>
  );
}

// Fat-Arrow Function

// const App=()=>{
//   return(
//     <>
//       <div className="App">
//         <header>
//           <a href="#">Logo Goes Here</a>
//         </header>
//         <Navigation />
//         <Navigation />
//         <Navigation />
//       </div>
//       <div></div>
//     </>
//   )
// }

export default App;
