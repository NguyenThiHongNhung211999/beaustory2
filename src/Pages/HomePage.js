import React from 'react';
import Page from '../Component/Page';
import Slide from'../Component/Slide';

class HomePage extends React.Component {
  buildContent() {
    let homepageContent = [];
    homepageContent.push(
      <div key={1}>
        <Slide></Slide>
      </div>
  );
    
    homepageContent.push(
        <div key={2}>
          <h3>BEAUSTORY</h3>
        </div>
    );

    return homepageContent;
}
render() {
    return (
        <div>
            <Page cls="app-homepage" _content={this.buildContent()}></Page>
        </div>
    )
}
  }
  
  export default HomePage;
  