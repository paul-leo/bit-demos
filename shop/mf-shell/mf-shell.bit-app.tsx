import { Platform } from '@bitdev/platforms.platform';

const UserServer = import.meta.resolve('@bitdev/node.examples.user-server');
const DiscussionServer = import.meta.resolve('@bitdev/platforms.examples.discussion-server');
const AcmeWeb = import.meta.resolve('@bitdev/platforms.examples.acme-web');
const PlatformGateway = import.meta.resolve('@bitdev/symphony.backends.gateway-server');

export const MfShell = Platform.from({
  name: 'mf-shell',

  frontends: {
    main: AcmeWeb,
    mainPortRange: [3000, 3100],
  },

  backends: {
    // use the default gateway component. supports proxy of graphql and restful requests.
    main: PlatformGateway,
    services: [
      // composes example micro-services. replace with your own.
      UserServer,
      DiscussionServer
    ],
    
  },
});

export default MfShell;
