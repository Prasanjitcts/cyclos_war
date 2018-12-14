import { BannerCard } from 'app/content/banner-card';
import { BannerResolver } from 'app/content/banner-resolver';
import { ContentGetter } from 'app/content/content-getter';
import { ContentPage } from 'app/content/content-page';
import { DashboardItemConfig } from 'app/content/dashboard-item-config';
import { DashboardResolver } from 'app/content/dashboard-resolver';
import { DefaultDashboardResolver } from 'environments/default-dashboard-resolver';

// This file defines the environment variables shared by both development and production

// The root URL for the API. Either 'api' (without slashes) when using a proxy, or the full URL
// (with protocol) to the Cyclos backend, ending with /api.
const API_URL = 'api';

// Application title
const APP_TITLE = 'Cyclos Local';
// Application title on small devices (constrained space)
const APP_TITLE_SMALL = 'Cyclos';
// The application title displayed on the title bar inside the menu on small devices
const APP_TITLE_MENU = 'Cyclos menu';

// Available choices for number of results in a search. The default is the smallest one
const SEARCH_PAGE_SIZES = [40, 100, 200];
// Number of results displayed on quick searches, such as on user selection
const QUICK_SEARCH_PAGE_SIZE = 10;

// **** Advertisements category customization **** //

// This defines a mapping between advertisement category internal name and material icons.
// See https://material.io/tools/icons
const AD_CATEGORY_ICONS = {
  'community': 'people',
  'food': 'restaurant',
  'goods': 'pages',
  'housing': 'location_city',
  'jobs': 'work',
  'labor': 'business',
  'leisure': 'mood',
  'services': 'room_service'
};
// This defines a mapping between advertisement category internal name and icon colors
const AD_CATEGORY_COLORS = {
  'community': '#2196f3',
  'food': '#f04d4e',
  'goods': '#ff9700',
  'housing': '#029487',
  'jobs': '#8062b3',
  'labor': '#de3eaa',
  'leisure': '#687ebd',
  'services': '#8ec63f'
};

// **** Content **** //
// See the project home page for help on how to customize content

// The home page shown for guests
const HOME_PAGE: ContentPage = {

  // To enable cache, set a cache key and a number of seconds
  // cacheKey: 'home',
  // cacheSeconds: 360, // 360 seconds = 1 hour

  // Layout can be 'full', 'center' or 'card' (when 'card', a title can be set)
  layout: 'full',

  // The content can be obtained by fetching a URL, or by a Cyclos floating content page
  // See the documentation on ContentGetter for more details.
  content: ContentGetter.url('content/home.html')
};
// Dashboard resolver
const DASHBOARD_RESOLVER: DashboardResolver | DashboardItemConfig[] = new DefaultDashboardResolver();
// Banner resolver
const BANNER_RESOLVER: BannerResolver | BannerCard[] = null;


//////////////////////////////////////////////////////////////////////
// **** Final configuration. Please, don't modify it **** //
export const configuration = {
  production: true,
  appTitle: APP_TITLE,
  appTitleSmall: APP_TITLE_SMALL,
  appTitleMenu: APP_TITLE_MENU,
  apiRoot: API_URL,
  searchPageSizes: SEARCH_PAGE_SIZES,
  quickSearchPageSize: QUICK_SEARCH_PAGE_SIZE,
  adCategoryIcons: AD_CATEGORY_ICONS,
  adCategoryColors: AD_CATEGORY_COLORS,
  homePage: HOME_PAGE,
  dashboardResolver: DASHBOARD_RESOLVER as DashboardResolver | DashboardItemConfig[],
  bannerResolver: BANNER_RESOLVER as BannerResolver | BannerCard[]
};
