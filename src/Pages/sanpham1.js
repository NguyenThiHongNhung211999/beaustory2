import React from 'react';
import Page from '../Component/Page';


class HomePage2 extends React.Component {
  buildContent() {
    let homepageContent = [];
    
    homepageContent.push(
        <div key={2}>
          <h3>BEAUSTORY2</h3>
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
  
  export default HomePage2;
  