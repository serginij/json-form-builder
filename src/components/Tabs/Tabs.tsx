import React, { useMemo, useState } from 'react';

import './Tabs.css';

interface ITabsProps {
  tabs: { label: string; Cmp: React.ReactElement }[];
}

export const Tabs: React.FC<ITabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState('');
  const [content, setContent] = useState<React.ReactElement | null>(null);

  const tabsMap: Map<string, React.ReactElement> = useMemo(
    () => new Map(tabs.map(({ label, Cmp }) => [label, Cmp])),
    [tabs],
  );

  const buttons: string[] = useMemo(
    () => Array.from(tabsMap.keys()),
    [tabsMap],
  );

  const changeTab = (tab: string) => {
    setActiveTab(tab);
    setContent(tabsMap.get(tab) || null);
  };

  return (
    <div>
      <TabButtons
        activeTab={activeTab}
        buttons={buttons}
        changeTab={changeTab}
      />
      <div className="tab-content">{content}</div>
    </div>
  );
};

interface ITabButtonsProps {
  buttons: string[];
  changeTab: (tab: string) => void;
  activeTab: string;
}

const TabButtons = ({ buttons, changeTab, activeTab }: ITabButtonsProps) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button) => {
        return (
          <button
            key={button}
            className={`tab-button ${button === activeTab ? 'active' : ''}`}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};
