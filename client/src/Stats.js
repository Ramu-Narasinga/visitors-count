import React, { useState } from 'react';

import './Stats.css';

import styled from 'styled-components';

const VisitorCounter = styled.div`
  display: inline-flex;
  border-radius: 8px;
  flex-direction: column;
  max-width: 100%;
  overflow: hidden;
  position: sticky;
  background-color: rgb(255, 255, 255);
  color: rgb(17, 17, 17);
  left: 0%;
  // transform: scale(0.85);
  -webkit-box-shadow: 0 0 10px rgb(135, 94, 230);
  box-shadow: 0 0 10px rgb(135, 94, 230);
`;

const VisitorCounterLayout = styled.div`
  max-width: 100%;
  padding: 12px 24px 16px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const VisitorCounterTitle = styled.div`
  margin: -12px -24px 12px;
  padding: 12px 16px;
  display: flex;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  user-select: none;
  -webkit-box-align: center;
  align-items: center;
  // transform: scale(1.5);
  text-align: center;
`;

const TitleText = styled.div`
  font-size: 11px;
  line-height: 11px;
  opacity: 0.65;
  text-transform: uppercase;
`;

const TodayCounter = styled.div`
  text-align: center;
  margin: 0px auto;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  position: relative;
`

const CounterComponent = styled.div``;

const CounterTitle = styled.div`
  font-size: 11px;
  line-height: 1.27;
  text-transform: uppercase;
  opacity: 0.65;
  white-space: nowrap;
`;

const CounterCount = styled.div`
  font-size: 30.2222px;
  font-weight: 400;
  line-height: 1.17;
  white-space: nowrap;
  font-size: 19.2px;
  margin-top: 2px;
}
`;

const CounterStatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: -16px;
  margin-right: -16px;
  text-align: center;
`;

export const Stats = () => {

  const [hideStats, setHideStats] = useState(false);

  const handleHideStats = () => {
    setHideStats(true);
  };
  
  return (
    <VisitorCounter>
      {!hideStats && (
        <VisitorCounterLayout>
          <VisitorCounterTitle>
            <div class="Title__Icon-sc-5x9hdv-1 dFtBdD">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M9.333 2c.369 0 .667.291.667.65v11.7c0 .359-.298.65-.667.65H6.667A.658.658 0 0 1 6 14.35V2.65c0-.359.298-.65.667-.65h2.666zm5 3c.369 0 .667.298.667.667v8.666a.667.667 0 0 1-.667.667h-2.666a.667.667 0 0 1-.667-.667V5.667c0-.369.298-.667.667-.667h2.666zm-10 4c.369 0 .667.269.667.6v4.8c0 .331-.298.6-.667.6H1.667C1.298 15 1 14.731 1 14.4V9.6c0-.331.298-.6.667-.6h2.666z">
                </path>
              </svg>
            </div>
            <TitleText>Site Visitors</TitleText>
          </VisitorCounterTitle>
          <TodayCounter>
            <CounterComponent>
              <CounterTitle>Today</CounterTitle>
              <CounterCount>5</CounterCount>
            </CounterComponent>
          </TodayCounter>
          <CounterStatsWrapper>
            <CounterComponent>
              <CounterTitle>Yesterday</CounterTitle>
              <CounterCount>34</CounterCount>
            </CounterComponent>
            <CounterComponent>
              <CounterTitle>This Week</CounterTitle>
              <CounterCount>505</CounterCount>
            </CounterComponent>
            <CounterComponent>
              <CounterTitle>Last Week</CounterTitle>
              <CounterCount>410</CounterCount>
            </CounterComponent>
            <CounterComponent>
              <CounterTitle>This Month</CounterTitle>
              <CounterCount>1,069</CounterCount>
            </CounterComponent>
            <CounterComponent>
              <CounterTitle>Last Month</CounterTitle>
              <CounterCount>1,839</CounterCount>
            </CounterComponent>
            <CounterComponent>
              <CounterTitle>This Year</CounterTitle>
              <CounterCount>10,166</CounterCount>
            </CounterComponent>
            <CounterComponent>
              <CounterTitle>Last Year</CounterTitle>
              <CounterCount>4,827</CounterCount>
            </CounterComponent>
            <CounterComponent>
              <CounterTitle>Total</CounterTitle>
              <CounterCount>15,040</CounterCount>
            </CounterComponent>
          </CounterStatsWrapper>
        </VisitorCounterLayout>
      )}
      {hideStats && (
        <div>
          <button onClick={handleHideStats}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </button>
        </div>
      )}
    </VisitorCounter>
  )
}