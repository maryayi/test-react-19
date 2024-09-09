'use client';

import { useState } from 'react';
import AboutTab from './AboutTab';
import ContactTab from './ContactTab';
import PostsTab from './PostsTab';
import TabButton from './TabButton';

export default function TabContainer() {
  const [tab, setTab] = useState('about');

  function selectTab(nextTab: 'about' | 'posts' | 'contact') {
    setTab(nextTab);
  }

  return (
    <>
      <div className="flex gap-2 p-2">
        <TabButton
          isActive={tab === 'about'}
          onClick={() => selectTab('about')}
        >
          About
        </TabButton>
        <TabButton
          isActive={tab === 'posts'}
          onClick={() => selectTab('posts')}
        >
          Posts (slow)
        </TabButton>
        <TabButton
          isActive={tab === 'contact'}
          onClick={() => selectTab('contact')}
        >
          Contact
        </TabButton>
      </div>
      <hr />
      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </>
  );
}
