import React, { Component, Suspense } from 'react';
import './app.scss';
// import BJImage from './images/01.jpeg';
const TestButton = React.lazy(() => import('ReactB/Button'));

class App extends Component {
  render() {
    console.log('render...')
    return (
      <>
        <div className="box">
          reactA
          <Suspense fallback={<div>Loading...</div>}>
            <TestButton />
          </Suspense>
        </div>
      </>
    );
  }
}

export default App;