import type { RouteRecord } from 'vite-react-ssg';
import { AppLayout } from './App';
import { Home } from './pages/Home';
import { StartupCoaching } from './pages/StartupCoaching';
import { ScaleUpAdvisory } from './pages/ScaleUpAdvisory';
import { Apply } from './pages/Apply';
import { NotFound } from './pages/NotFound';
import { Coaching } from './pages/Coaching';
import { About } from './pages/About';
import { Speaking } from './pages/Speaking';
import { Blog } from './pages/Blog';
import { Media } from './pages/Media';
import { Careers } from './pages/Careers';
import { Newsletter } from './pages/Newsletter';
import { CaseStudies } from './pages/CaseStudies';
import { TermsOfUse } from './pages/TermsOfUse';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'coaching',
        Component: Coaching,
      },
      {
        path: 'startup-coaching',
        Component: StartupCoaching,
      },
      {
        path: 'scale-up-advisory',
        Component: ScaleUpAdvisory,
      },
      {
        path: 'case-studies',
        Component: CaseStudies,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'speaking',
        Component: Speaking,
      },
      {
        path: 'blog',
        Component: Blog,
      },
      {
        path: 'media',
        Component: Media,
      },
      {
        path: 'careers',
        Component: Careers,
      },
      {
        path: 'newsletter',
        Component: Newsletter,
      },
      {
        path: 'terms-of-use',
        Component: TermsOfUse,
      },
      {
        path: 'privacy-policy',
        Component: PrivacyPolicy,
      },
      {
        path: 'apply',
        Component: Apply,
      },
      {
        path: 'apply/:service',
        Component: Apply,
        getStaticPaths: () => [
          'apply/startup',
          'apply/scale-up',
          'apply/strategy',
        ],
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
];
