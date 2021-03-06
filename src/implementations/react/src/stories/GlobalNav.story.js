/**
Copyright 2016 Autodesk,Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, boolean, text } from '@storybook/addon-knobs';

import GlobalNav from '../adapters/GlobalNav/GlobalNavAdapter';

const SideNav = GlobalNav.SideNav;
const TopNav = GlobalNav.TopNav;
const Profile = TopNav.Profile;
const Shortcut = TopNav.Shortcut;
const Help = TopNav.Help;
const TopNavSearch = TopNav.Search;
const ProjectAccountSwitcher = GlobalNav.TopNav.ProjectAccountSwitcher;
const Account = GlobalNav.TopNav.ProjectAccountSwitcher.Account;
const Project = GlobalNav.TopNav.ProjectAccountSwitcher.Project;
const SubNav = GlobalNav.SubNav;
const Tabs = GlobalNav.SubNav.Tabs;
const Tab = GlobalNav.SubNav.Tabs.Tab;
const Slot = GlobalNav.Slot;

const links = [
  { title: 'Autodesk Main', url: 'http://www.autodesk.com' },
  {
    title: 'AutoCAD',
    url: 'https://www.autodesk.com/products/autocad/overview'
  },
  { title: 'Maya', url: 'https://www.autodesk.com/products/maya/overview' }
];
const LONG_COPY = (
  <div>
    <p>
      Raw denim flexitarian green juice kinfolk. Umami hammock trust fund everyday carry, woke wolf viral sriracha austin.
      Fingerstache affogato messenger bag salvia, cray iPhone bushwick blue bottle marfa gentrify dreamcatcher pop-up.
      Slow-carb etsy enamel pin cronut, raclette post-ironic hashtag. Hoodie dreamcatcher enamel pin lumbersexual before
      they sold out, authentic selvage tumblr vinyl. Hot chicken chillwave coloring book fixie vice venmo echo park
      portland. Tote bag master cleanse cronut banjo banh mi pitchfork, celiac photo booth.
    </p>

    <p>
      Next level deep v roof party, jianbing pok pok pug butcher vape farm-to-table kombucha. Yr snackwave VHS, wolf
      poutine actually woke poke flexitarian paleo food truck DIY kale chips viral yuccie. Cornhole tattooed vaporware
      affogato, gentrify mlkshk portland organic. Swag try-hard cronut hashtag, etsy bespoke chia banjo messenger bag.
      Mustache umami godard man braid cronut yuccie. YOLO vaporware franzen, gochujang typewriter mixtape brunch salvia
      paleo lyft. Four dollar toast tumblr mustache thundercats single-origin coffee, freegan flexitarian cold-pressed
      beard roof party VHS venmo af ugh bushwick.
    </p>

    <p>
      Ethical man bun shoreditch chambray farm-to-table. Celiac readymade tote bag shabby chic chia, franzen poke meggings
      pop-up williamsburg VHS. Flexitarian cardigan blog yuccie activated charcoal farm-to-table. Iceland activated
      charcoal aesthetic, chambray offal snackwave austin four loko stumptown roof party humblebrag. Food truck selfies
      vexillologist, subway tile direct trade fingerstache tofu biodiesel four dollar toast. Literally squid tattooed jean
      shorts, raw denim echo park blog mustache skateboard seitan XOXO lo-fi cray hammock shabby chic. Live-edge
      sustainable pug, pinterest celiac kinfolk wayfarers narwhal art party vegan +1.
    </p>

    <p>
      Helvetica DIY portland, sriracha selvage wolf beard plaid quinoa vegan flexitarian poke. Semiotics fam scenester,
      plaid synth listicle flexitarian subway tile. Cred everyday carry pop-up, forage viral tbh tilde mustache roof party
      leggings gastropub unicorn synth. Brunch hoodie williamsburg, selfies plaid jianbing deep v lomo truffaut meggings
      dreamcatcher kitsch. Mustache deep v fap hashtag, freegan quinoa blue bottle green juice helvetica pickled cronut.
      Photo booth 90's microdosing vexillologist roof party stumptown. Viral hella pitchfork, aesthetic intelligentsia
      godard hoodie plaid migas iPhone mlkshk tumeric keffiyeh.
    </p>

    <p>
      Banh mi pug fanny pack heirloom portland. Humblebrag selvage forage vape organic beard bicycle rights, fam gentrify
      live-edge. Vape artisan truffaut, celiac prism XOXO drinking vinegar pour-over vinyl chambray lyft venmo. Tattooed
      edison bulb air plant hot chicken meggings cold-pressed gastropub, tbh tilde hoodie photo booth leggings. Etsy
      post-ironic fap you probably haven't heard of them, helvetica synth kinfolk listicle mixtape keytar cold-pressed.
      90's put a bird on it yr godard prism kogi, live-edge enamel pin hell of photo booth. Raclette portland humblebrag
      synth af, fashion axe fingerstache ethical snackwave post-ironic cray.
    </p>

    <p>
      Messenger bag listicle skateboard normcore. Roof party food truck authentic dreamcatcher lumbersexual ramps. Man bun
      drinking vinegar mixtape, disrupt sartorial cray lumbersexual bicycle rights fam brunch celiac lyft. Hella edison
      bulb poke thundercats taxidermy twee. Lomo biodiesel la croix, pitchfork normcore prism godard coloring book
      cornhole locavore helvetica. Everyday carry distillery tousled, bespoke irony chartreuse lumbersexual fixie. Unicorn
      asymmetrical tacos poke, tote bag disrupt sriracha coloring book.
    </p>

    <p>
      Humblebrag narwhal hammock, cornhole biodiesel lomo vegan twee migas enamel pin iPhone vaporware chicharrones vape
      wolf. Godard XOXO deep v tbh irony, church-key seitan fixie post-ironic asymmetrical literally put a bird on it.
      Hell of helvetica cornhole lomo forage. Affogato activated charcoal ugh, +1 vape poutine poke artisan listicle
      before they sold out brunch prism VHS cronut. Craft beer PBR&B vice, synth XOXO green juice bitters narwhal
      chicharrones pinterest microdosing intelligentsia wayfarers scenester schlitz. Stumptown synth bicycle rights ugh
      poke, photo booth quinoa cronut pickled meggings tumeric. Yr wayfarers mustache pitchfork, art party bitters craft
      beer single-origin coffee.
    </p>
  </div>
);

import logo from '../playground/images/bim-logo.png';
import profileImage from '../playground/images/profileImage.png';
import project1 from '../playground/images/project-1.png';
import project2 from '../playground/images/project-2.png';
import project3 from '../playground/images/project-3.png';
import project4 from '../playground/images/project-4.png';

storiesOf('GlobalNav', module)
  .addWithInfo('default', <div><p>Global Nav basic usage</p></div>, () => {
    return (
      <GlobalNav showSubNav={true}>
        <SideNav />
        <TopNav logo={logo}>
          <ProjectAccountSwitcher
            open={boolean('Project Account Switcher open:', false)}
            onProjectChange={action('Project activated')}
            onAccountChange={action('Account activated')}
          >
            <Account image="" label="DPI Construction" />
            <Project image={project4} label="Oakland Medical Center" />
            <Project image={project1} label="Stanford hospital" />
          </ProjectAccountSwitcher>
          <Shortcut icon="settings" title="GEAR" link="#" />
          <Help title="HELLLP MEEEE!!!!" link="#`" />
          <Profile
            image={profileImage}
            name="Jane Designer"
            email="jane.designer@example.com"
            onProfileSettingsClick={action('profile settings clicked')}
            onSignOutClick={action('sign out clicked')}
          />
        </TopNav>
        <SubNav moduleIndicatorName="Insight" moduleIndicatorIcon="hamburger" />
        <Slot>{LONG_COPY}</Slot>
      </GlobalNav>
    );
  })
