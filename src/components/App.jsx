import React from 'react';

import Header from './header.jsx';




import Footer from './footer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="content">
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;