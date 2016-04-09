import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app';

export default (
  <Route path="/" component={App}>
  </Route>
);

//<IndexRoute component={CreateStoryContainer} hideBackBtn={true} />
//<Route path="search" component={ParentSearchContainer} showRefine={false}>
//  <IndexRoute component={TopicSearchContainer} />
//  <Route path=":storyId" component={TopicSearchResultContainer} showRefine backBtnOverridePath="" />
//  <Route path=":storyId/refine" component={RefineContainer} />
//  <Route path=":storyId/status" component={StoryStatusContainer} backBtnOverridePath="" />
//  </Route>
//  <Route path="write/story/:storyId" component={EditableStoryContainer} />
//  <Route path="featured" component={HomeContainer} />
//  <Route path="/settings/account" component={UserProfileContainer} />
//  <Route path="about" component={AboutContainer} />
//  <Route path="privacy" component={PrivacyContainer} />
//  <Route path="terms" component={TermsContainer} />
//  <Route path="/user/:token" component={TokenContainer} />
//  <Route path="/story/:storyId" component={StoryContainer} />