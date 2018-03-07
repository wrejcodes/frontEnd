/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import BigBtn1 from 'components/BigBtn1';
import { getActive } from 'themes';
import PageHeader from 'components/PageHeader/index';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const theme = getActive();
    const FlexBox = styled.div`
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
    `;
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home Page" />
        </Helmet>
        <PageHeader title="My Chemical Bromance" />
        <br />
        <FlexBox >
          <BigBtn1 theme={theme} text="View Database" link="/database" />
          <BigBtn1 tab="5%" theme={theme} text="Add/Delete Entries" link="/entries" />
          <BigBtn1 tab="10%" theme={theme} text="Analysis" link="/analysis" />
        </FlexBox>
      </div>
    );
  }
}
